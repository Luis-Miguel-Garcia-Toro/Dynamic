import React, { useEffect } from "react";
import { BusinessCard } from "./components";
import Styles from "./scss/home.module.scss";
import { useHomePage } from "./view-model";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useNavigate } from "react-router-dom";
import Wallet from "./Wallet";

export const HomePage = () => {
  const { businessList, nit, onNavigateToBranch } = useHomePage();
  const [value, setValue] = React.useState(0);
  const [option, setOption] = React.useState(0);

  const navigate = useNavigate();
  const handlePagar = () => {
    setOption(1);
  };

  useEffect(() => {
    setOption(0);
  }, []);

  return (
    <>
      {option === 0 ? (
        <main className={Styles.HomePageContainer}>
          <div className={Styles.HomeBackground} />
          <div className={Styles.HomePageHeader}>
            <div className={`${Styles.HomePageHeaderOptions} fadeIn`}>
              <h1>Tus negocios disponibles</h1>
            </div>
            <h2>Nit - {nit}</h2>
          </div>
          <div className={Styles.HomePageHeaderButton} />
          {/* <div className={Styles.HomePageHeaderpay} /> */}

          <Card
            sx={{
              maxWidth: 345,
              margin: "0 auto",
              boxShadow: 3,
              borderRadius: "15px",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
            }}
            className={Styles.HomePageHeader}
          >
            {/*  */}
            <CardActionArea>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ color: "#0074D9", textAlign: "center" }}
                >
                  Bienvenido, Tu Cuota hoy!
                </Typography>
                <Typography
                  component="div"
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      marginRight: "20px", // Espacio entre los bloques
                    }}
                  >
                    <b style={{ fontSize: "1rem", color: "#2ECC40" }}>
                      Disponible
                    </b>
                    <p style={{ fontSize: "1rem", fontWeight: "bold" }}>
                      $ 2.738.295
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <b style={{ fontSize: "1rem", color: "#FF4136" }}>
                      Total que debes
                    </b>
                    <p style={{ fontSize: "1rem", fontWeight: "bold" }}>
                      $ 261.704
                    </p>
                  </div>
                </Typography>
              </CardContent>
            </CardActionArea>

            {/*  */}
            <Divider />
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div style={{ textAlign: "left" }}>
                <b style={{ fontSize: "1rem", color: "#001f3f" }}>
                  Próximo pago
                </b>
                <p style={{ fontSize: "1.2rem" }}>Oct. 4 | $219.071</p>
              </div>
              <Button
                variant="contained"
                color="primary"
                sx={{ borderRadius: "50px" }}
                onClick={() => handlePagar()}
              >
                Pagar
              </Button>
            </CardActions>
          </Card>

          {/*  */}
          <section className={Styles.BusinessListContainer}>
            {businessList.map((business) => (
              <BusinessCard
                navigateTo={() => onNavigateToBranch(business)}
                business={business}
                key={business.business}
              />
            ))}
          </section>
          <Box
            sx={{
              width: "100%",
              position: "fixed",
              bottom: 0,
              left: 0,
              zIndex: 1000,
            }}
          >
            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            >
              <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
              <BottomNavigationAction
                label="Favorites"
                icon={<FavoriteIcon />}
              />
              <BottomNavigationAction
                label="Nearby"
                icon={<LocationOnIcon />}
              />
            </BottomNavigation>
          </Box>
        </main>
      ) : (
        <Wallet />
      )}
    </>
  );
};

export default HomePage;
