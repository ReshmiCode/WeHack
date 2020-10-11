import React from "react";
import { Layout, PageHeader } from "antd";
const { Content } = Layout;

const Advice = () => {
  return (
    <Layout>
      <PageHeader title="Name of our Application" />
      <Content className="mainContent">
        <h2>hi</h2>
      </Content>
    </Layout>
  );
};

export default Advice;
