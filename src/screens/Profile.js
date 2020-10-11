import React from "react";
import { Layout, Input, Button } from "antd";
import NavBar from "../components/NavBar";
const { Content } = Layout;
const { TextArea } = Input;

const Profile = () => {
  return (
    <Layout>
      <NavBar />
      <Content className="mainContent" style={{ textAlign: "center" }}>
        <h1>Enter Company Details</h1>
        <h3>Enter Company Title</h3>
        <Input type="text" style={{ width: "30%" }} />
        <h3>Enter Link to Image</h3>
        <Input type="url" style={{ width: "50%" }} />
        <h3>Enter Description</h3>
        <TextArea rows="10" style={{ width: "50%" }} />
        <h3>Enter Content</h3>
        <TextArea rows="10" style={{ width: "50%" }} />
        <h3>Enter Tags (seperated by commas)</h3>
        <TextArea rows="2" style={{ width: "50%" }} />
        <br />
        <Button type="primary">Submit Company</Button>
      </Content>
    </Layout>
  );
};

export default Profile;
