import {useEffect} from "react";
import Table from "@mui/material/Table";
import { UseOrdersPage } from "./view-model/UseOrdersPage"

export const Orders = () => {
  const {getHistoryOrder} = UseOrdersPage();

  useEffect(() => {

    getHistoryOrder()
  }, []);


  return <div>Orders</div>;




};
