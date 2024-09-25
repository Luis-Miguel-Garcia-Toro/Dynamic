import React, { useState } from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import { useContextWallet } from '../../../../../context/ContextWallet';

const MenuOptions = () => {
  // Llama a useContextWallet dentro del cuerpo del componente
  const { updateOptionSeleted, updateIndexOption } = useContextWallet();
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const items = [
    {
      key: '1',
      icon: <PieChartOutlined />,
      label: 'Inicio',
      onClick: () => updateOptionSeleted("home"),
    },
    {
      key: '2',
      icon: <AppstoreOutlined />,
      label: 'Cartera',
      onClick: () => updateOptionSeleted("wallet"),
    },
    {
      key: '3',
      icon: <ContainerOutlined />,
      label: 'Nearby',
      onClick: () => updateOptionSeleted("business"),
    }
  ];

  return (
    <div style={{ width: 128 }}>
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{ marginBottom: 16 }}    
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items} // Pasa el array de ítems
      />
    </div>
  );
};

export default MenuOptions;
