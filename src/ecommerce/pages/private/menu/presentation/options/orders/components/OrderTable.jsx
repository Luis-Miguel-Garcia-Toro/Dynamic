import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { styled } from '@mui/material/styles'
import moment from 'moment/moment'
import { MdShoppingCartCheckout } from 'react-icons/md'
import { UseOrdersPage } from "../view-model/UseOrdersPage"
import React, { useEffect, useState } from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#FFFF',
        color: '#e71939',
        fontWeight: 'bold',
        fontSize: 16
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        color: '#606093'
    }
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0
    }
}))

const OrderTable = () => {
    const { HistoryOrders, loader} = UseOrdersPage();
    const [editOrder, setEditOrder] = useState(false)
    const [detail, setDetail] = useState([])
    const [open, setOpen] = useState(-1)
    
    return (
        <div>
            {HistoryOrders.length > 0 ? (
                <TableContainer component={Paper} sx={{ borderRadius: '10px' }}>
                    <Table sx={{ minWidth: 600 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center" className="titulotablaHistory">
                                    Detalle
                                </StyledTableCell>
                                <StyledTableCell align="center" className="titulotablaHistory">
                                    #Pedido
                                </StyledTableCell>
                                <StyledTableCell align="center" className="titulotablaHistory">
                                    Fecha
                                </StyledTableCell>
                                <StyledTableCell align="center" className="titulotablaHistory">
                                    Estado de Pedido
                                </StyledTableCell>
                                <StyledTableCell align="center" className="titulotablaHistory">
                                    Valor Total con Iva
                                </StyledTableCell>
                                <StyledTableCell align="center" className="titulotablaHistory">
                                    Cargar Carrito
                                </StyledTableCell>
                                {/* {editOrder ? (
                <StyledTableCell align="center" className="titulotablaHistory">
                  Editar Pedido
                </StyledTableCell>
              ) : null} */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {loader ? (
                                <div>
                                    {/* <Spin size="large" style={{ width: '100%', marginLeft: '350%' }} /> */}
                                    <p>Cargando...</p>
                                </div>
                            ) : (
                                <>
                                    {HistoryOrders.map((row, index) => (
                                        <React.Fragment key={row.document}>
                                            <StyledTableRow key={row.document}>
                                                <StyledTableCell align="center">
                                                    <IconButton
                                                        onClick={() => (
                                                            setOpen(open === index ? -1 : index), setDetail(row.detail)
                                                        )}
                                                    >
                                                        {open === index ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                                    </IconButton>
                                                </StyledTableCell>
                                                <StyledTableCell align="center">{row.document}</StyledTableCell>
                                                <StyledTableCell align="center">
                                                    {moment(row.created_at).format('DD/MM/YYYY hh:mm')}
                                                </StyledTableCell>
                                                <StyledTableCell align="center">
                                                    {row.state === 0 ? 'Pendiente' : 'enviado ERP'}
                                                </StyledTableCell>
                                                <StyledTableCell align="center">
                                                    {' $' +
                                                        new Intl.NumberFormat('en', {
                                                            // @ts-ignore
                                                            numberingSystem: 'latn',
                                                            style: 'decimal',
                                                            currency: 'COP'
                                                        }).format(Math.round(row.total))}
                                                </StyledTableCell>
                                                <StyledTableCell align="center">
                                                    <MdShoppingCartCheckout
                                                        size={25}
                                                        className="icon-history"
                                                        onClick={() => cargarCarrito(row.detail, 1, row.document)}
                                                    />
                                                </StyledTableCell>
                                                {editOrder ? (
                                                    <StyledTableCell align="center">
                                                        <TbShoppingCartPlus
                                                            size={25}
                                                            className="icon-history"
                                                            onClick={() => cargarCarrito(row.detail, 0, row.document)}
                                                        />
                                                    </StyledTableCell>
                                                ) : null}
                                            </StyledTableRow>
                                            <StyledTableRow>
                                                <TableCell
                                                    colSpan={6}
                                                    sx={{ paddingBottom: 0, paddingTop: 0, border: '0px' }}
                                                >
                                                    <Collapse in={open === index} timeout="auto" unmountOnExit>
                                                        <Box>
                                                            <Table sx={{ minWidth: 650 }} aria-label="customized table">
                                                                <TableHead>
                                                                    <TableRow>
                                                                        <StyledTableCell align="center" className="titulotablaHistory">
                                                                            Código
                                                                        </StyledTableCell>
                                                                        <StyledTableCell align="center" className="titulotablaHistory">
                                                                            Descripción
                                                                        </StyledTableCell>
                                                                        <StyledTableCell align="center" className="titulotablaHistory">
                                                                            Descripción Presentación
                                                                        </StyledTableCell>
                                                                        <StyledTableCell align="center" className="titulotablaHistory">
                                                                            Kls
                                                                        </StyledTableCell>
                                                                        <StyledTableCell align="center" className="titulotablaHistory">
                                                                            Cantidad
                                                                        </StyledTableCell>
                                                                        <StyledTableCell align="center" className="titulotablaHistory">
                                                                            Valor Iva
                                                                        </StyledTableCell>
                                                                        <StyledTableCell align="center" className="titulotablaHistory">
                                                                            Imp.Ultraprocesados
                                                                        </StyledTableCell>
                                                                        <StyledTableCell align="center" className="titulotablaHistory">
                                                                            Imp.Azucarados
                                                                        </StyledTableCell>
                                                                        <StyledTableCell align="left" className="titulotablaHistory">
                                                                            Precio con Impuestos
                                                                        </StyledTableCell>
                                                                        <StyledTableCell align="center" className="titulotablaHistory">
                                                                            Valor Total
                                                                        </StyledTableCell>
                                                                    </TableRow>
                                                                </TableHead>
                                                                <TableBody>
                                                                    {detail.map((item, index) => (
                                                                        <StyledTableRow key={index}>
                                                                            <StyledTableCell align="center">
                                                                                {item.product_id}
                                                                            </StyledTableCell>
                                                                            <StyledTableCell align="center">{item.title}</StyledTableCell>
                                                                            <StyledTableCell align="center">
                                                                                {item.presentation.embalaje}
                                                                            </StyledTableCell>
                                                                            <StyledTableCell align="center">
                                                                                {item.weight} kls
                                                                            </StyledTableCell>
                                                                            <StyledTableCell align="center">
                                                                                {item.quantity}
                                                                            </StyledTableCell>

                                                                            <StyledTableCell align="center">
                                                                                {' $' +
                                                                                    new Intl.NumberFormat('en', {
                                                                                        // @ts-ignore
                                                                                        numberingSystem: 'latn',
                                                                                        style: 'decimal',
                                                                                        currency: 'COP'
                                                                                    }).format(item.total_tax)}
                                                                            </StyledTableCell>

                                                                            <StyledTableCell align="center">
                                                                                {' $' +
                                                                                    new Intl.NumberFormat('en', {
                                                                                        // @ts-ignore
                                                                                        numberingSystem: 'latn',
                                                                                        style: 'decimal',
                                                                                        currency: 'COP'
                                                                                    }).format(item.total_tax2)}
                                                                            </StyledTableCell>

                                                                            <StyledTableCell align="center">
                                                                                {' $' +
                                                                                    new Intl.NumberFormat('en', {
                                                                                        // @ts-ignore
                                                                                        numberingSystem: 'latn',
                                                                                        style: 'decimal',
                                                                                        currency: 'COP'
                                                                                    }).format(item.total_tax3)}
                                                                            </StyledTableCell>

                                                                            <StyledTableCell align="center">
                                                                                {' $' +
                                                                                    new Intl.NumberFormat('en', {
                                                                                        // @ts-ignore
                                                                                        numberingSystem: 'latn',
                                                                                        style: 'decimal',
                                                                                        currency: 'COP'
                                                                                    }).format(
                                                                                        item.price +
                                                                                        item.total_tax / item.quantity +
                                                                                        item.total_tax2 / item.quantity +
                                                                                        item.tax3_percentage
                                                                                    )}
                                                                            </StyledTableCell>
                                                                            <StyledTableCell align="center">
                                                                                {' $' +
                                                                                    new Intl.NumberFormat('en', {
                                                                                        // @ts-ignore
                                                                                        numberingSystem: 'latn',
                                                                                        style: 'decimal',
                                                                                        currency: 'COP'
                                                                                    }).format(
                                                                                        (item.price +
                                                                                            item.total_tax / item.quantity +
                                                                                            item.total_tax2 / item.quantity +
                                                                                            item.tax3_percentage) *
                                                                                        item.quantity
                                                                                    )}
                                                                            </StyledTableCell>
                                                                        </StyledTableRow>
                                                                    ))}
                                                                </TableBody>
                                                            </Table>
                                                        </Box>
                                                    </Collapse>
                                                </TableCell>
                                            </StyledTableRow>
                                        </React.Fragment>
                                    ))}
                                </>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : (
                <p>No hay pedidos</p>
            )}

        </div>
    )
}

export default OrderTable