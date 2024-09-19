import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import React, { useState } from "react";
import  {useContextWallet}  from '../../../../../context/ContextWallet'


const MenuOptionsBar = () => {
    const {updateOptionSeleted, updateIndexOption, indexoption } = useContextWallet()

    return (
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
                value={indexoption}
                onChange={(event, newValue) => {
                   updateIndexOption(newValue)
                }}
            >
                <BottomNavigationAction
                    label="Inicio"
                    icon={<RestoreIcon />}
                    onClick={() => updateOptionSeleted('home')} 
                />
                <BottomNavigationAction
                    label="Cartera"
                    icon={<FavoriteIcon />}
                    onClick={() => updateOptionSeleted('wallet')}
                />
                <BottomNavigationAction
                    label="Nearby"
                    icon={<LocationOnIcon />}
                    onClick={() => updateOptionSeleted('business')}
                />
            </BottomNavigation>
        </Box>
    )

}

export default MenuOptionsBar