import { BsFillFileEarmarkExcelFill } from "react-icons/bs";
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import { UseOrdersPage } from "../view-model/UseOrdersPage"
import React from "react";
import OrderTable from './OrderTable';
import { LoadingFull } from '../../../../../../../../common/presentation/components';
import Styles from "./scss/order.module.scss";

const FilterOrder = () => {
    const { EndDate, initialDate, changeInitialDate, changeEndDate, downloadExcel, HistoryOrders, loader } = UseOrdersPage();

    return (
        <div>
            <div className={Styles.filtroEmpresaCartera}>
                
                <div className="input-date">
                    <Stack component="form" noValidate spacing={3} style={{ marginRight: '10px' }}>
                        <TextField
                            id="date"
                            label="Inicio"
                            type="date"
                            defaultValue={initialDate}
                            sx={{ width: 220 }}
                            InputLabelProps={{
                                shrink: true
                            }}
                            onChange={(e) => changeInitialDate(e.target.value)}
                        />
                    </Stack>
                </div>
                <div className="input-date">
                    <Stack component="form" noValidate spacing={3} style={{ display: 'flex' }}>
                        <TextField
                            id="date"
                            label="Fin"
                            type="date"
                            defaultValue={EndDate}
                            sx={{ width: 220 }}
                            InputLabelProps={{
                                shrink: true
                            }}
                            onChange={(e) => changeEndDate(e.target.value)}
                        />
                    </Stack>
                </div>
                <div className={Styles.downloadHistory}>
                    <button onClick={() => downloadExcel()}>
                        <BsFillFileEarmarkExcelFill size={30} style={{ color: 'green' }} />
                    </button>
                </div>
            </div>
            {loader ? (
                <LoadingFull show={loader} />
            ) : (
                <>
                    {HistoryOrders.length > 0 ? <OrderTable /> : (
                        <h3>No existen pedidos</h3>
                    )}
                </>
            )}
        </div>
    )
}

export default FilterOrder