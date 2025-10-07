import React from "react";
import { Menu } from "antd";
import { DashboardOutlined, CarOutlined, SettingOutlined, LogoutOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

const OwnerSidebar = () => {
  const location = useLocation();

  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={[location.pathname]}
      style={{ height: "100%", borderRight: 0 }}
    >
      <Menu.Item key="/owner/dashboard" icon={<DashboardOutlined />}>
        <Link to="/owner/dashboard">Dashboard</Link>
      </Menu.Item>
      <Menu.Item key="/owner/mycars" icon={<CarOutlined />}>
        <Link to="/owner/mycars">My Cars</Link>
      </Menu.Item>
      <Menu.Item key="/owner/settings" icon={<SettingOutlined />}>
        <Link to="/owner/settings">Settings</Link>
      </Menu.Item>
      <Menu.Item key="/logout" icon={<LogoutOutlined />}>
        <Link to="/logout">Logout</Link>
      </Menu.Item>
    </Menu>
  );
};

export default OwnerSidebar;
