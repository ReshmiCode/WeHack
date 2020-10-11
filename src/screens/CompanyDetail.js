import React from "react";
import { Layout, PageHeader } from "antd";
const { Content } = Layout;

const CompanyDetail = () => {
  return (
    <Layout>
      <PageHeader
        title="Name of our Application"
        onBack={() => window.history.back()}
      />
      <Content className="mainContent">
        <h2>hi</h2>
      </Content>
    </Layout>
  );
};

export default CompanyDetail;
