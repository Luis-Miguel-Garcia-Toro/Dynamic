import { ButtonNavigate } from "@/common/presentation/components";
import { Box, Modal } from "@mui/material";
import PropTypes from "prop-types";
import { IoStorefrontOutline } from "react-icons/io5";
import Styles from "./scss/branch-item.module.scss";
import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import moment from "moment/moment";
import { styled } from "@mui/material/styles";

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#FFFF",
    color: "var(--color-primary)",
    fontWeight: "bold",
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: "#606093",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const BranchItem = ({ branch, colorBusiness }) => {
  const { code, url_redirect } = branch;
  const [open, setOpen] = useState(false);
  const [totalEnd, setTotalEnd] = useState(0);
  let totalPay = new Array();

  const orders = [
    {
      document: 1234678,
      created_at: "2022-01-01",
      end_date: "2022-05-01",
      total: 150000,
      pending_value: 100000,
    },
    {
      document: 5678940,
      created_at: "2023-01-01",
      end_date: "2023-05-01",
      total: 180000,
      pending_value: 130000,
    },
  ];

  const handleChange = (value, documentId) => {
    const newValue = parseFloat(value) || 0;
    let findValue = totalPay.find((doc) => doc.documentId === documentId);
    if (findValue) {
      findValue.value = newValue;
    } else {
      totalPay.push({ documentId, value: newValue });
    }
    totalPay.map((item) => {
      console.log(item);
      setTotalEnd(...totalEnd, item.value);
    });
    console.log(totalPay);
    console.log(totalEnd);
  };

  return (
    <>
      <div
        className={`${Styles.BranchItemContainer} fadeIn`}
        key={code}
        onClick={() => setOpen(true)}
      >
        <div className={Styles.BranchItemCode}>
          <IoStorefrontOutline size={20} />
          <h3>Código - {1000}</h3>
        </div>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <div style={{ display: "flex" }}>
            <h3 style={{ flex: 1 }}>Cartera</h3>
            <ButtonNavigate
              color={colorBusiness}
              navigateTo={() =>
                (window.location.href = `${url_redirect}${code}`)
              }
              text="Ir al comercio"
              iconPosition="right"
            />
          </div>
          <div>
            <TableContainer component={Paper} sx={{ borderRadius: "10px" }}>
              <Table sx={{ minWidth: 600 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell
                      align="center"
                      className="titulotablaHistory"
                    >
                      #Factura
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      className="titulotablaHistory"
                    >
                      Fecha
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      className="titulotablaHistory"
                    >
                      Vencimiento
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      className="titulotablaHistory"
                    >
                      Valor de compra
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      className="titulotablaHistory"
                    >
                      Saldo Pendiente
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      className="titulotablaHistory"
                    >
                      Valor a pagar
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.map((row, index) => (
                    <React.Fragment key={row.document}>
                      <StyledTableRow key={row.document}>
                        <StyledTableCell align="center">
                          {row.document}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {moment(row.created_at).format("DD/MM/YYYY hh:mm")}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {moment(row.end_date).format("DD/MM/YYYY hh:mm")}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {" $" +
                            new Intl.NumberFormat("en", {
                              // @ts-ignore
                              numberingSystem: "latn",
                              style: "decimal",
                              currency: "COP",
                            }).format(Math.round(row.total))}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {" $" +
                            new Intl.NumberFormat("en", {
                              // @ts-ignore
                              numberingSystem: "latn",
                              style: "decimal",
                              currency: "COP",
                            }).format(Math.round(row.pending_value))}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <input
                            className={Styles.inputPay}
                            type="number"
                            min={0}
                            onChange={(e) =>
                              handleChange(e.target.value, row.document)
                            }
                            placeholder="0"
                          />
                        </StyledTableCell>
                      </StyledTableRow>
                    </React.Fragment>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>

          <div className={Styles.card}>
            <div className={Styles.contentCard}>
              <label>
                <h4>Total a pagar :</h4>
              </label>
              <label>{totalEnd}</label>
              <button className={Styles.buttonPay}>Pagar en linea</button>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

BranchItem.propTypes = {
  branch: PropTypes.object.isRequired,
  colorBusiness: PropTypes.string.isRequired,
};
