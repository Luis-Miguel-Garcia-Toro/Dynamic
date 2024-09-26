import React, { useState } from "react";
import { Box } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Button, Menu } from "antd";
import {
  AppstoreOutlined,
  ContainerOutlined,
  PieChartOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { useContextWallet } from "../../../../../context/ContextWallet";
import Styles from "../scss/menuOption.module.scss";
import StarBorderTwoToneIcon from "@mui/icons-material/StarBorderTwoTone";
import AddBusinessTwoToneIcon from "@mui/icons-material/AddBusinessTwoTone";

const MenuOptionsBar = () => {
  const { updateOptionSeleted, updateIndexOption, indexoption } =
    useContextWallet();
  const [collapsed, setCollapsed] = useState(true);
  const [selectedKey, setSelectedKey] = useState(null); // Estado para la opción seleccionada

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleMenuSelect = (key, option) => {
    setSelectedKey(key); // Actualizamos la opción seleccionada
    updateOptionSeleted(option);
    setCollapsed(true);
  };

  const items = [
    {
      key: "1",
      icon: <PieChartOutlined />,
      label: "Inicio",
      onClick: () => handleMenuSelect("1", "home"),
    },
    {
      key: "2",
      icon: <AppstoreOutlined />,
      label: "Cartera",
      onClick: () => handleMenuSelect("2", "wallet"),
    },
    {
      key: "3",
      icon: <ContainerOutlined />,
      label: "Nearby",
      onClick: () => handleMenuSelect("3", "business"),
    },
  ];

  return (
    <div className={Styles.containerMenuOption}>
      <div className={Styles.menuOptionMobile}>
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
              updateIndexOption(newValue);
            }}
          >
            <BottomNavigationAction
              label="Inicio"
              icon={<StarBorderTwoToneIcon />}
              onClick={() => updateOptionSeleted("home")}
            />
            <BottomNavigationAction
              label="Cartera"
              icon={<AddBusinessTwoToneIcon />}
              onClick={() => updateOptionSeleted("wallet")}
            />
            <BottomNavigationAction
              label="Nearby"
              icon={<LocationOnIcon />}
              onClick={() => updateOptionSeleted("business")}
            />
          </BottomNavigation>
        </Box>
      </div>

      <div className={Styles.menuOptionDesktop}>
        <div
          className={`${Styles.containerMenu} ${
            collapsed ? Styles.collapsed : Styles.expanded
          }`}
        >
          {!collapsed && (
            <Menu
              mode="inline"
              theme="dark"
              inlineCollapsed={collapsed}
              items={items.map((item) => ({
                ...item,
                className:
                  item.key === selectedKey ? Styles.selectedOption : "",
                onClick: () => item.onClick(),
              }))}
            />
          )}

          <Button
            type="primary"
            onClick={toggleCollapsed}
            className={Styles.buttonMenu}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MenuOptionsBar;
