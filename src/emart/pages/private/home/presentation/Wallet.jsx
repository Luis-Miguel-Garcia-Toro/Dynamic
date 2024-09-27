import Styles from "./scss/home.module.scss";
import { useHomePage } from "./view-model";
import { ButtonNavigate } from "@/common/presentation/components";
import { BsBuildingCheck } from "react-icons/bs";
import { BusinessCardFactura } from "./components/business-card/BusinessCardFactura";
import { BranchItemFactura } from "../../branch/presentation/components/branch-item/BranchItemFactura";
import { useContextWallet } from "../../../../context/ContextWallet";
import { useEffect, useState } from "react";
import { getWallet } from "../../../../authServices/authWallet/walletAuth";
import { Divider } from "antd";
import { MdSearchOff } from "react-icons/md";
//
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const Wallet = () => {
  const {
    businessSelected,
    updateDatabusiness,
    businessData,
    updateOptionSeleted,
  } = useContextWallet();
  const { businessList, nit, onNavigateToBranch } = useHomePage();
  const [orders, setOrders] = useState([]);
  // const [businessData, setbusinessData] = useState([]);

  const getWalletClient = async () => {
    let res = await getWallet(nit);
    if (res.data.data.length > 0) {
      updateDatabusiness(res.data.data);
      console.log(res.data.data);
    } else {
      updateDatabusiness([]);
    }
  };

  useEffect(() => {
    getWalletClient();
  }, [businessSelected]);

  return (
    <>
      <main className={Styles.HomePageContainer}>
        <div className={Styles.HomeBackground} />

        <div className={Styles.HomePageHeader}>
          <button
            color="var(--color-label)"
            onClick={() => updateOptionSeleted("home")}
          >
            <label style={{ cursor: "pointer", color: "#fffffff" }}>
              <p>◄- Regresar</p>
            </label>
          </button>
          <br />
          <div className={`${Styles.HomePageHeaderOptions} fadeIn`}>
            <h1>Tu Cartera</h1>
          </div>
          <h2>Nit - {nit}</h2>
        </div>
        <section className={Styles.BusinessListContainer}>
          {businessList.map((business) => (
            <BusinessCardFactura business={business} key={business.business} />
          ))}
        </section>
        <Divider style={{ borderColor: "whitesmoke" }} />
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker label="Fecha Inicial" />
            </DemoContainer>
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker label="Fecha Final" />
            </DemoContainer>
          </LocalizationProvider>
          <div className={Styles.containerButton}>
          <button>
            Continuar
          </button>
        </div>
        </div>
      </main>

      <div className={Styles.HomeWalletList}>
        {businessData.length > 0 ? (
          <BranchItemFactura orders={businessData} branch={businessSelected} />
        ) : (
          <div className={Styles.NoBranches}>
            <MdSearchOff color="var(--color-cancel)" size={50} />
            <h3> negocio</h3>
          </div>
        )}
      </div>
    </>
  );
};

export default Wallet;
