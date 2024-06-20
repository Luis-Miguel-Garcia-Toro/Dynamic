import React, { useEffect } from "react";
import { UseOrdersPage } from "./view-model/UseOrdersPage"
import OrderTable from "./components/OrderTable.jsx";
import FilterOrder from "./components/FilterOrder.jsx";

export const Orders = () => {
  const { getHistoryOrder, HistoryOrders, loader,setHistoryOrders,initialDate } = UseOrdersPage();


  return (
  <div>
    <FilterOrder />

  </div>
  );
};
