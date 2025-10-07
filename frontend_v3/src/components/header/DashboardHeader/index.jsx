import React from "react";
import { Layout, Avatar, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Header } = Layout;
const { Text } = Typography;

const HeaderBar = ({ title = "Owner Dashboard" }) => {
  return (
    <Header
      style={{
        background: "#fff",
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <Text strong style={{ fontSize: 18 }}>
        {title}
      </Text>

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Text>Xin chào, Owner</Text>
        <Avatar icon={<UserOutlined />} />
      </div>
    </Header>
  );
};

export default HeaderBar;
