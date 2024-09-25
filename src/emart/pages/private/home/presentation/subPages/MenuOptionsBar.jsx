import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import React, { useState } from "react";
import { useContextWallet } from '../../../../../context/ContextWallet'
import Styles from '../scss/menuOption.module.scss'
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
  } from '@ant-design/icons';
  import { Button, Menu } from 'antd';

const items = [
  
    { key: '1', icon: <PieChartOutlined />,  label: 'Option 1'  },
    { key: '2', icon: <DesktopOutlined />, label: 'Option 2' },
    { key: '3', icon: <ContainerOutlined />, label: 'Option 3' },
    // {
    //   key: 'sub1',
    //   label: 'Navigation One',
    //   icon: <MailOutlined />,
    //   children: [
    //     { key: '5', label: 'Option 5' },
    //     { key: '6', label: 'Option 6' },
    //     { key: '7', label: 'Option 7' },
    //     { key: '8', label: 'Option 8' },
    //   ],
    // },
    // {
    //   key: 'sub2',
    //   label: 'Navigation Two',
    //   icon: <AppstoreOutlined />,
    //   children: [
    //     { key: '9', label: 'Option 9' },
    //     { key: '10', label: 'Option 10' },
    //     {
    //       key: 'sub3',
    //       label: 'Submenu',
    //       children: [
    //         { key: '11', label: 'Option 11' },
    //         { key: '12', label: 'Option 12' },
    //       ],
    //     },
    //   ],
    // },
  ];

const MenuOptionsBar = () => {
    const { updateOptionSeleted, updateIndexOption, indexoption } = useContextWallet()
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };
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

            </div>
            <div className={Styles.menuOptionDesktop}>
                <div className={Styles.containerMenu}>
                    <Button type="primary" onClick={toggleCollapsed} className={Styles.buttonMenu} >
                        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    </Button>
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={collapsed}
                        items={items}
                    />
                </div>
            </div>
        </div>
    )

}

export default MenuOptionsBar

