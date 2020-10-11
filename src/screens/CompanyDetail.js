import React from "react";
import { Layout, PageHeader } from "antd";
const { Content } = Layout;

const CompanyDetail = () => {
  return (
    <Layout>
      <PageHeader title="EMPOWER" onBack={() => window.history.back()} />
      <Content className="mainContent">
        <h2>hi</h2>
      </Content>
    </Layout>
  );
};

export default CompanyDetail;
