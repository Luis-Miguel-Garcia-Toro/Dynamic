import { Box, Checkbox, Modal } from "@mui/material";
import PropTypes from "prop-types";
import Styles from "./scss/branch-item.module.scss";
import React, { useState, useEffect } from "react";
import PaymentWompi from "../payment/PaymentWompi";
import { BsCreditCard } from "react-icons/bs";
import { MdSearchOff } from "react-icons/md";

export const BranchItemFactura = ({ branch, orders }) => {
  const { code } = branch;
  const [valuePayment, setValuePayment] = useState(0);
  const [invoices, setInvoices] = useState([]);
  const { payWompi } = PaymentWompi();
  const [dataBill, setdataBill] = useState([]);

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
  }, [branch]);

  function getDataBill() {
    const billData = orders.filter((bill) => bill.business_unit == branch);
    setdataBill(billData);
  }

  return (
    <>
      <div className={Styles.BranchItemBillFather}>
        <div className={Styles.bills}>
          {dataBill && dataBill.length > 0 ? (
            dataBill?.map((fact) => {
              return (
                <div
                  className={`${Styles.BranchItemBillContainer} fadeIn`}
                  key={code}
                >
                  <div className={Styles.BranchItemBill}>
                    <figure>
                      <img
                        src={
                          "https://usc1.contabostorage.com/d069ea98e2df4b0e9e99b1e7b2ca9a58:pruebasceluweb/%20company_logos/1000/logo.png"
                        }
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
                            // @ts-ignore
                            numberingSystem: "latn",
                            style: "decimal",
                            currency: "COP",
                          }).format(Math.round(fact.valor))}
                      </label>
                      {fact.pending_value ? (
                        <Checkbox>Seleccionar</Checkbox>
                      ) : (
                        ""
                      )}
                    </h3>
                    <div className={Styles.BranchCheck}>
                      <input
                        type="checkbox"
                        onClick={(e) => seletedBillPayment(e, fact)}
                      />
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className={Styles.NoBranches}>
              <MdSearchOff color="var(--color-cancel)" size={50} />
              <h3>No se encontraron sucursales para este negocio</h3>
            </div>
          )}
        </div>

        {/* Pagar Wompi */}
        <div className={Styles.paymentContainer}>
          <div className={Styles.HomePagetitles}></div>
          <div className={Styles.titleTotal}>
            <h2>Total:</h2>
            <label>
              {" $" +
                new Intl.NumberFormat("en", {
                  // @ts-ignores
                  numberingSystem: "latn",
                  style: "decimal",
                  currency: "COP",
                }).format(Math.round(valuePayment))}
            </label>
          </div>
          <div className={Styles.paymentButton}>
            <button
              className={Styles.paymentButton}
              onClick={() => payWompi({ valuePayment, invoices })}
            >
              <img
                src="src/assets/wompi-logo.png"
                alt="Pago con tarjeta"
                style={{ width: 118, height: 45 }}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

BranchItemFactura.propTypes = {
  branch: PropTypes.object.isRequired,
  orders: PropTypes.array.isRequired,
};
