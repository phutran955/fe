import React from "react";
import { Layout } from "antd";
import { CarOutlined } from "@ant-design/icons"; 
import OwnerSidebar from "../sidebar"; 
import HeaderBar from "../header/DashboardHeader"; 

const { Sider, Content } = Layout;

const DashboardLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sider collapsible>
        <div
          style={{
            color: "white",
            fontSize: 20,
            textAlign: "center",
            margin: "16px 0",
            fontWeight: "bold",
          }}
        >
           <CarOutlined />
        </div>
        <OwnerSidebar />
      </Sider>

      {/* Nội dung chính */}
      <Layout>
        <HeaderBar />
        <Content style={{ margin: "24px", background: "#fff", padding: "24px" }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
