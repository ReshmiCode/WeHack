import React from "react";
import { Layout } from "antd";
import NavBar from "../components/NavBar";
const { Content } = Layout;

const Profile = () => {
  return (
    <Layout>
      <NavBar />
      <Content className="mainContent">
        <h2>hi</h2>
      </Content>
    </Layout>
  );
};

export default Profile;
