import { useEffect, useState } from "react";
import { useEcommerceStore, useDataStore } from "../../../../../common/infrastructure/store";
import moment from "moment"; 

export const useCartPage = () => {
  const cart = useEcommerceStore((state) => state.cart);
  const {dataUser, updateFechaEntrega} = useDataStore();
  const [dayDelivery, setDayDelivery] = useState('')
  const [observation, setObservation] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [daysCalendar, setDaysCalendar] = useState([])
  const [prevStartDate, setPrevStarDate] = useState()

  const handleObservacion = (value) => {
    let cliente = props.usuario
    cliente.observacion = value
    props.ActualizarUsuario(cliente)
  }

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
    setDayDelivery(moment(BaseDate).format('DD/MM/YYYY'))
  }

  const filterDate = (date) => {
    console.log(daysCalendar);
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

  useEffect(() => {
    getDateDelivery()
    prepareFilterDays()
  }, [])

  return {
    cart,
    dayDelivery,
    setDayDelivery,
    observation,
    setObservation,
    updateFechaEntrega,
    filterDate,
    startDate, 
    dataUser
  };
};
