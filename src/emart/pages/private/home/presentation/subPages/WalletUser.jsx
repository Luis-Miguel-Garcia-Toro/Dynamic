import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Divider from "@mui/material/Divider";
import Styles from "../scss/home.module.scss";
import { useHomePage } from "../view-model";
import React, { useState } from "react";
import {useContextWallet} from '../../../../../context/ContextWallet'

const WalletUser = () => {
    const {updateOptionSeleted, updateIndexOption} = useContextWallet()

    return (
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
                    onClick={() => (updateOptionSeleted("wallet"),updateIndexOption(1))}
                >
                    Pagar
                </Button>
            </CardActions>
        </Card>
    )
}

export default WalletUser