import { OrderHistory } from "../../../../../../../auth/order/AuthOrder"
import { useAppStore } from "../../../../../../../../common/infrastructure/store"
import { useEffect, useState } from "react"
import moment from 'moment'
import * as XLSX from 'xlsx'
export const UseOrdersPage = () => {
    const { user } = useAppStore();
    const [HistoryOrders, setHistoryOrders] = useState([]);
    const [dateOrder, setDateOrders] = useState([])   
    const [loading, setLoading] = useState(false)
    const [EndDate, setEndDate] = useState(moment(new Date()).format('YYYY-MM-DD'))
    const [initialDate, setInitialDate] = useState(moment(new Date()).format('YYYY-MM-DD'))
    const [rangesPicker, setRangesPicker] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ])

    const getHistoryOrder = async (initial, end) => {
        let result = await OrderHistory(user.userToken, initial === undefined ? initialDate : initial, end === undefined ? EndDate : end)
        if (result.data === 'Index was outside the bounds of the array.' ||
            result.data === 'Cannot perform runtime binding on a null reference'
        ) {
            setHistoryOrders([])
            setLoading(false)
        } else if (result.data.data.length === 0) {
            setHistoryOrders([])
            setLoading(false)
        } else {
            let res = result.data.data
            setHistoryOrders(res)
            setLoading(false)
        }
    }

    const onChange = async (date) => {
        setRangesPicker(date)
        if(moment(date[0].startDate).format('YYYY-MM-DD') !== moment(date[0].endDate).format('YYYY-MM-DD')){
            setLoading(true)
            let initialDate = moment(date[0].startDate).format('YYYY-MM-DD')
            let endDate = moment(date[0].endDate).format('YYYY-MM-DD')
            await getHistoryOrder(initialDate, endDate)
        }
    }

    const downloadExcel = () => {
        if (HistoryOrders.length > 0) {
            let fileName = `historialPedidos`
            let dataExport = fomartData(HistoryOrders)
            let detailExport = formatDataDetail()
            const worksheet = XLSX.utils.json_to_sheet(dataExport)
            const detailsheet = XLSX.utils.json_to_sheet(detailExport)
            const workbook = XLSX.utils.book_new()
            XLSX.utils.book_append_sheet(workbook, worksheet, 'Encabezado')
            XLSX.utils.book_append_sheet(workbook, detailsheet, 'Detalle')
            XLSX.writeFile(workbook, `${fileName}.xlsx`)
        }
    }

    const fomartData = (data) =>
        data.map((item) => {
            return {
                Pedido: item.document,
                Fecha: moment(item.created_at).format('DD/MM/YYYY hh:mm'),
                Estado: item.state === 0 ? 'Pendiente' : 'enviado ERP',
                Valor: item.total
            }
        })

    const formatDataDetail = () => {
        let detalleData = []
        HistoryOrders.map((item) => {
            item.detail.map((detail) => {
                detalleData.push({
                    Pedido: item.document,
                    Código: detail.product_id,
                    Descripción: detail.title,
                    'Unidad de Embalaje': detail.presentation.embalaje,
                    Kilos: detail.weight,
                    Cantidad: detail.quantity,
                    'Precio Unidad': detail.price,
                    'Precio Con Iva':
                        detail.tax === 0
                            ? detail.price
                            : Math.round((detail.price * parseFloat(detail.tax)) / 100 + detail.price),
                    Total:
                        detail.tax === '0'
                            ? detail.price * detail.quantity
                            : Math.round((detail.price * parseFloat(detail.tax)) / 100 + detail.price) *
                            detail.quantity
                })
            })
        })
        return detalleData
    }


    
    return {
        getHistoryOrder,
        loading,
        HistoryOrders,
        EndDate,
        initialDate,
        downloadExcel,
        setHistoryOrders,
        onChange,
        rangesPicker, 
        setRangesPicker,
        dateOrder

    }

}