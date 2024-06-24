import { BsFillFileEarmarkExcelFill } from "react-icons/bs";
import { UseOrdersPage } from "../view-model/UseOrdersPage"
import React, { useState } from "react";
import OrderTable from './OrderTable';
import { LoadingFull } from '../../../../../../../../common/presentation/components';
import Styles from "./scss/order.module.scss";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { es } from 'date-fns/locale'
import OrderMovil from "./OrderMovil";



const FilterOrder = () => {
    const { downloadExcel, HistoryOrders, onChange, rangesPicker, dateOrder, loading } = UseOrdersPage();

    return (
        <div>
            <div className={Styles.downloadHistory}>
                <button onClick={() => downloadExcel()}>
                    <BsFillFileEarmarkExcelFill size={30} style={{ color: 'green' }} />
                </button>
            </div>
            <div className={Styles.filtroEmpresaCartera}>

                <div className={Styles.stylePicker}>
                    <DateRange
                        editableDateInputs={false}
                        onChange={item => onChange([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={rangesPicker}
                        locale={es}
                    />
                </div>
            </div>
            {loading ? (
                <LoadingFull show={loading} />
            ) : (
                <div>
                    <div className={Styles.orderMovil}>
                        <OrderMovil orders={HistoryOrders} />

                    </div>
                    <div className={Styles.orderWeb}>
                        {HistoryOrders.length > 0 ? <OrderTable orders={HistoryOrders} dateOrder={dateOrder} /> : (
                            <h3>No existen pedidos</h3>
                        )}
                    </div>
                </div>
            )}




        </div>
    )
}

export default FilterOrder