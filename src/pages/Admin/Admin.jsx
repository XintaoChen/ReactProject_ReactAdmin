import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Layout } from "antd";

import memory from "../../utils/memoryUtils";
import LeftNav from "../../components/LeftNav/LeftNav";
import TopNav from "../../components/TopNav/TopNav";

const { Footer, Sider, Content } = Layout;

function Admin() {
  // if not login yet, navigate to login page
  var user = memory.user;
  if (!user || !user._id) {
    return <Navigate to={"/login"}></Navigate>;
  }

  return (
    <Layout style={{ height: "100%" }}>
      <Sider>
        <LeftNav></LeftNav>
      </Sider>
      <Layout>
        <TopNav></TopNav>
        <Content style={{ margin: "20px", backgroundColor: "#fff" }}>
          <Outlet></Outlet>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            color: "#ccc",
          }}
        >
          Footer
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Admin;
