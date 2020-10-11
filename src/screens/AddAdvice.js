import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { Layout, PageHeader } from "antd";
import db from "../components/firebase";
const { Content } = Layout;

const AddAdvice = () => {
  let [enteredAdvice, setEnteredAdvice] = useState("");
  function saveAdvice() {
    const advice = {
      advice: enteredAdvice,
    };
    db.collection("advice")
      .add({
        advice: enteredAdvice,
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
    console.log(advice);
  }

  return (
    <Layout>
      <NavBar />
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
