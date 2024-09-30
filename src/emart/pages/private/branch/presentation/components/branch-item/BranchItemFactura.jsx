import { Box, Checkbox, Modal } from "@mui/material";
import PropTypes from "prop-types";
import Styles from "./scss/branch-item.module.scss";
import React, { useState, useEffect } from "react";
import PaymentWompi from "../payment/PaymentWompi";
import PaymentCwPay from "../payment/PaymentCwPay";
import { BsCreditCard } from "react-icons/bs";
import { MdSearchOff } from "react-icons/md";
import wompyLogo from "../../../../../../../assets/wompi-logo.png";
import cwpay from "../../../../../../../assets/cwpay.png";
//
import { Button, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

export const BranchItemFactura = ({ branch, orders }) => {
  const { code } = branch;
  const [valuePayment, setValuePayment] = useState(0);
  const [invoices, setInvoices] = useState([]);
  const { payWompi } = PaymentWompi();
  const { payCW } = PaymentCwPay();
  const [dataBill, setdataBill] = useState([]);
  // const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));

  const seletedBillPayment = (e, data) => {
    setValuePayment(valuePayment + data.valor);
    if (e.target.checked) {
      setValuePayment(valuePayment + data.valor);
      setInvoices([
        ...invoices,
        {
          value: data.valor,
          document: data.documento,
        },
      ]);
    } else {
      setValuePayment(valuePayment - data.valor);
      setInvoices(invoices.filter((item) => item.document !== data.documento));
    }
  };

  // console.log(orders.filter(bill=>
  //   bill.business_unit === branch
  // ),"orders")
  // console.log(branch,"bramch")
  // const billData  = orders.map(bill=>
  //   bill.business_unit === branch
  // )

  useEffect(() => {
    getDataBill();
    setValuePayment(0);
    setInvoices([]);
  }, [branch]);

  function getDataBill() {
    const billData = orders.filter((bill) => bill.business_unit == branch);
    setdataBill(billData);
  }
  //
  const StyledTextField = styled(TextField)(({ theme }) => ({
    margin: "10px",
    "> .MuiInputBase-root": {
      backgroundColor: "#ffffff", // Fondo blanco
      height: 42,
      borderRadius: 30,
      fontSize: "18px", // Aumenta el tamaño del texto
      fontWeight: "bold", // Aplica negrita al texto dentro del campo
    },
    "> .MuiInputLabel-root": {
      fontSize: "18px", // Aumenta el tamaño de la etiqueta
      fontWeight: "bold", // Aplica negrita a la etiqueta
    },
    "> .MuiTouchRipple-root": {
      backgroundColor: "#ffffff", // Fondo blanco para el efecto de toque
    },
  }));
  return (
    <>
      <div className={Styles.BranchItemBillFather}>
        {/* Filtros de Fecha */}
        <div className={Styles.filters}>
          <Stack component="form" noValidate spacing={3}>
            <StyledTextField
              id="date"
              label="Fecha Inicio"
              type="date"
              InputLabelProps={{ shrink: true }}
            />
          </Stack>

          <Stack component="form" noValidate spacing={3}>
            <StyledTextField
              id="date"
              label="Fecha Fin"
              type="date"
              InputLabelProps={{ shrink: true }}
            />
          </Stack>

          <div className={Styles.ContainerButton}>
            <Button variant="contained" color="primary">
              Aceptar
            </Button>
          </div>
        </div>

        {/* Facturas */}
        <div className={Styles.bills}>
          {dataBill && dataBill.length > 0 ? (
            dataBill.map((fact) => (
              <div
                className={`${Styles.BranchItemBillContainer} fadeIn`}
                key={code}
              >
                <div className={Styles.BranchItemBill}>
                  <figure>
                    <img
                      src="https://usc1.contabostorage.com/d069ea98e2df4b0e9e99b1e7b2ca9a58:pruebasceluweb/%20company_logos/1000/logo.png"
                      alt={branch.name}
                    />
                  </figure>
                  <h3>
                    Factura N°: <strong>{fact.documento}</strong>
                  </h3>
                  <h3>
                    Valor:
                    <label
                      className={
                        fact.state === 0
                          ? Styles.valuePending
                          : Styles.valueSold
                      }
                    >
                      {" $" +
                        new Intl.NumberFormat("en", {
                          style: "decimal",
                          currency: "COP",
                        }).format(Math.round(fact.valor))}
                    </label>
                  </h3>
                  <div className={Styles.BranchCheck}>
                    <input
                      type="checkbox"
                      onClick={(e) => seletedBillPayment(e, fact)}
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className={Styles.NoBranches}>
              <MdSearchOff color="var(--color-cancel)" size={50} />
              <h3>No se encontraron Facturas para este negocio</h3>
            </div>
          )}
        </div>

        {/* Botones de Pago */}
        
      </div>
      <div className={Styles.paymentContainer}>
          <div className={Styles.titleTotal}>
            <h2>Total:</h2>
            <label>
              {" $" +
                new Intl.NumberFormat("en", {
                  style: "decimal",
                  currency: "COP",
                }).format(Math.round(valuePayment))}
            </label>
          </div>
          <div className={Styles.paymentButtonsContainer}>
            <button
              className={Styles.paymentButton}
              onClick={() => payCW({ valuePayment, invoices })}
            >
              <img
                src={cwpay}
                alt="Pago con tarjeta"
                style={{ width: 118, height: 45 }}
              />
            </button>
            <button
              className={Styles.paymentButton}
              onClick={() => payWompi({ valuePayment, invoices })}
            >
              <img
                src={wompyLogo}
                alt="Pago con tarjeta"
                style={{ width: 118, height: 45 }}
              />
            </button>
          </div>
        </div>
    </>
  );
};

BranchItemFactura.propTypes = {
  branch: PropTypes.object.isRequired,
  orders: PropTypes.array.isRequired,
};
