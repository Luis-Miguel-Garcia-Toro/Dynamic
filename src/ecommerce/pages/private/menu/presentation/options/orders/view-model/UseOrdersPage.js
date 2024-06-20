import { OrderHistory } from "../../../../../../../auth/order/AuthOrder"
import { useAppStore } from "../../../../../../../../common/infrastructure/store"
import { useEffect, useState } from "react"
import moment from 'moment'
import * as XLSX from 'xlsx'
export const UseOrdersPage = () => {
    const { user } = useAppStore();
    const [HistoryOrders, setHistoryOrders] = useState([]);
    const [loader, setLoader] = useState(true)
    const [EndDate, setEndDate] = useState(moment(new Date()).format('YYYY-MM-DD'))
    const [initialDate, setInitialDate] = useState(moment(new Date()).format('YYYY-MM-DD'))


    const getHistoryOrder = async (initial, end) => {
        let result = await OrderHistory(user.userToken, initial === undefined ? initialDate : initial, end === undefined ? EndDate : end)
        console.log(result);
        setLoader(false)
        if (result.data === 'Index was outside the bounds of the array.' ||
            result.data === 'Cannot perform runtime binding on a null reference'
        ) {
            setHistoryOrders([])
        } else if (result.data.data.length === 0) {
            setHistoryOrders([])
        } else {
            setHistoryOrders(result.data.data)
        }
    }

    const changeInitialDate = (item) => {
        setLoader(true)
        setInitialDate(moment(item).format('YYYY-MM-DD'))
        getHistoryOrder(moment(item).format('YYYY-MM-DD'), EndDate)
    }

    const changeEndDate = (item) => {
        setLoader(true)
        setEndDate(moment(item).format('YYYY-MM-DD'))
        getHistoryOrder(initialDate, moment(item).format('YYYY-MM-DD'))
    }


    const downloadExcel = () => {
        console.log("entra");
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

    useEffect(() => {
        getHistoryOrder()
    }, [])
    
    return {
        getHistoryOrder,
        loader,
        HistoryOrders,
        EndDate,
        initialDate,
        changeInitialDate,
        changeEndDate,
        downloadExcel,
        setHistoryOrders

    }

}