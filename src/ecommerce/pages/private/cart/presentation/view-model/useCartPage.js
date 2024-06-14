import moment from "moment";
import { useEffect, useState } from "react";
import { useDataStore, useEcommerceStore } from "../../../../../common/infrastructure/store";
import { useAppStore } from "../../../../../../common/infrastructure/store/app.store" 
import {AuthNewOrder} from "../../../../../auth/order/AuthOrder"

export const useCartPage = () => {
  const cart = useEcommerceStore((state) => state.cart);
  const { user } = useAppStore();
  const { dataUser, updateFechaEntrega, fechaEntrega } = useDataStore();
  const [observation, setObservation] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [daysCalendar, setDaysCalendar] = useState([])
  const [prevStartDate, setPrevStarDate] = useState()


  const getDateDelivery = () => {
    let BaseDate = new Date()
    let resultDay = ''
    let dataOrigen = dataUser.delivery_area
    let dataOrigenFinish = dataOrigen + dataOrigen
    let actualDate = new Date()
    let diaActual = actualDate.getDay()
    if (actualDate.getHours() > 17) {
      for (let i = diaActual + 1; i < dataOrigenFinish.length; i++) {
        if (dataOrigenFinish[i] == 1) {
          resultDay = i
          break
        }
      }
    } else {
      for (let i = diaActual; i < dataOrigenFinish.length; i++) {
        if (dataOrigenFinish[i] == 1) {
          resultDay = i
          break
        }
      }
    }
    BaseDate.setDate(BaseDate.getDate() + resultDay - diaActual + 1)
    updateFechaEntrega(moment(BaseDate))
  }

  const filterDate = (date) => {
    const day = date.getDay()
    let data = daysCalendar
    if (data.length === 1) {
      return day !== data[0]
    } else if (data.length === 2) {
      return day !== data[0] && day !== data[1]
    } else if (data.length === 3) {
      return day !== data[0] && day !== data[1] && day !== data[2]
    } else if (data.length === 4) {
      return day !== data[0] && day !== data[1] && day !== data[2] && day !== data[3]
    } else if (data.length === 5) {
      return (
        day !== data[0] && day !== data[1] && day !== data[2] && day !== data[3] && day !== data[4]
      )
    } else if (data.length === 6) {
      return (
        day !== data[0] &&
        day !== data[1] &&
        day !== data[2] &&
        day !== data[3] &&
        day !== data[4] &&
        day !== data[5]
      )
    } else if (data.length === 7) {
      return (
        day !== data[0] &&
        day !== data[1] &&
        day !== data[2] &&
        day !== data[3] &&
        day !== data[4] &&
        day !== data[5] &&
        day !== data[6]
      )
    }
  }

  const prepareFilterDays = () => {
    let actualDate = new Date()
    let rute = dataUser.delivery_area.split('')
    let result = []
    let getLastDay = rute.pop()
    rute.unshift(getLastDay)
    let finisRute = rute.toString()
    let formatFinish = finisRute.replace(/,/g, '')
    if (actualDate.getHours() > 17) {
      for (let i = 0; i < formatFinish.length; i++) {
        // no cambiar el == por === porque es un valor numerico
        if (formatFinish[i] == 0 || formatFinish[i] == '0') {
          result.push(i)
        }
      }
    } else {
      for (let i = 0; i < formatFinish.length; i++) {
        // no cambiar el == por === porque es un valor numerico
        if (formatFinish[i] == 0 || formatFinish[i] == '0') {
          result.push(i)
        }
      }
    }
    setDaysCalendar(result)
    getDateDelivey()
  }

  const getDateDelivey = () => {
    let BaseDate = new Date()
    let resultDay = ''
    let dataOrigen = dataUser.delivery_area
    let dataorigenFinish = dataOrigen + dataOrigen
    let actualyDate = new Date()
    let diaActual = actualyDate.getDay()
    if (actualyDate.getHours() > 17) {
      for (let i = diaActual + 1; i < dataorigenFinish.length; i++) {
        if (dataorigenFinish[i] == 1) {
          resultDay = i
          break
        }
      }
    } else {
      for (let i = diaActual; i < dataorigenFinish.length; i++) {
        if (dataorigenFinish[i] == 1) {
          resultDay = i
          break
        }
      }
    }
    BaseDate.setDate(BaseDate.getDate() + resultDay - diaActual + 1)
    setPrevStarDate(moment(BaseDate).format('DD/MM/YYYY'))
    setStartDate(new Date(BaseDate))
  }

  const sendOrder = (total) => {
    console.log(user);
    console.log(cart);
    let detalle = []
    let orderDetalle = 0
    let datetime = new Date()
    let year = datetime.getFullYear()
    let month = datetime.getMonth()
    let day = datetime.getDay()
    let hour = datetime.getHours()
    let minutes = datetime.getMinutes()
    let segundos = datetime.getSeconds()
    let miliSegundos = datetime.getMilliseconds()
    let codigoPedido = user.application_type === 3 ? `C${year}${month}${day}${hour}${minutes}${segundos}${miliSegundos}${user.code}`
      : `E${year}${month}${day}${hour}${minutes}${segundos}${miliSegundos}${user.code}`
    cart.map((item, i) => {
      orderDetalle += 1
      detalle.push({
        document: codigoPedido,
        product_id: item.code,
        quantity: item.quantity,
        price: parseInt(item.price),
        total: item.quantity * item.price,
        subtotal: item.quantity * item.price,
        total_tax:
          ((parseFloat(item.tax) * parseFloat(item.price)) / 100) *
          item.quantity,
        total_disc: 0,
        created_at: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
        reason: 'ORDER',
        business_id: 1000,
        unit: '',
        unit2: '',
        product: JSON.stringify({ code: item.title }),
        type: 'Web',
        business_Unit: 1000,
        item: orderDetalle,
        total_tax2: ((item.price * parseFloat(item.tax2)) / 100) * item.quantity,
        tax2_percentage: parseFloat(item.tax2),
        total_tax3: parseFloat(item.tax3) * item.quantity,
        tax3_percentage: parseFloat(item.tax3)
      })
    })

    let finishOrder = {
      document: codigoPedido,
      transaction_type: "NEW",
      created_at: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
      owner_id: user.seller,
      client_id: user.code,
      express: '-1',
      type: '1',
      reason: 'ORDER',
      total: total,
      subtotal: total,
      total_tax: 0,
      total_disc: 0,
      delivery_date: fechaEntrega === '' ? moment(new Date()).format('YYYY-MM-DD HH:mm:ss') : moment(fechaEntrega).format('YYYY-MM-DD HH:mm:ss'),
      online: 1,
      details: detalle,
      application_type: user.application_type === 3 ? '3' : '1',
      platform_type: 'web',
      approved_web: '0'
    }
    let result = AuthNewOrder(finishOrder)
    console.log(result);
  }

  useEffect(() => {
    getDateDelivery()
    prepareFilterDays()
  }, [])

  return {
    cart,
    observation,
    setObservation,
    updateFechaEntrega,
    fechaEntrega,
    filterDate,
    startDate,
    dataUser,
    sendOrder
  };
};
