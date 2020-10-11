import React, { useState } from "react";
import { Layout, PageHeader } from "antd";
const { Content } = Layout;

const AddAdvice = () => {
  let [enteredAdvice, setEnteredAdvice] = useState("");
  function saveAdvice() {
    const advice = {
      advice: enteredAdvice,
    };
    console.log(advice);
  }

  return (
    <Layout>
      <PageHeader title="Name of our Application" />
      <Content className="mainContent">
        <h1 style={{ margin: 0, padding: 20 }}>
          Enter Advice for other Women Entrepreuners
        </h1>
        <div style={{ textAlign: "center" }}>
          <p>Enter your Advice</p>
          <textarea
            cols="60"
            rows="10"
            value={enteredAdvice}
            onChange={(event) => setEnteredAdvice(event.target.value)}
          />
          <br />
          <button onClick={saveAdvice}>Submit Advice</button>
        </div>
      </Content>
    </Layout>
  );
};

export default AddAdvice;
