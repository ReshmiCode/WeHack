import React from "react";
import { Layout, PageHeader } from "antd";
import "./App.css";
const { Content } = Layout;

function App() {
  return (
    <Layout>
      <PageHeader title="Name of our Application" />
      <Content className="mainContent">
        <h2>hi</h2>
      </Content>
    </Layout>
  );
}

export default App;
