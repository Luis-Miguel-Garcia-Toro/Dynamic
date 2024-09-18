import { ButtonNavigate } from "@/common/presentation/components";
import { Box, Checkbox, Modal } from "@mui/material";
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

export const BranchItemFactura = ({ branch, colorBusiness, orders }) => {
  const { code } = branch;

  return (
    <>
      {orders.map((fact) => {
        return (
          <div className={`${Styles.BranchItemContainer} fadeIn`} key={code}>
            <div className={Styles.BranchItemCode}>
              <figure>
                <img
                  src={
                    "https://usc1.contabostorage.com/d069ea98e2df4b0e9e99b1e7b2ca9a58:pruebasceluweb/%20company_logos/1000/logo.png"
                  }
                  style={{
                    width: "50px",
                  }}
                  alt={branch.name}
                />
              </figure>
              <h3>NumeroDoc: {fact.document}</h3>
              <h3>
                Valor: ${fact.total}
                {fact.pending_value ? <Checkbox>Seleccionar</Checkbox> : ""}
              </h3>
            </div>
          </div>
        );
      })}
    </>
  );
};

BranchItemFactura.propTypes = {
  branch: PropTypes.object.isRequired,
  colorBusiness: PropTypes.string.isRequired,
};
