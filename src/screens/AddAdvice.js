import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { Layout, Input, Button } from "antd";
import db from "../components/firebase";
const { Content } = Layout;
const { TextArea } = Input;

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
        <h1 style={{ margin: 0, padding: 20, textAlign: "center" }}>
          Enter Advice for other Women Entrepreuners
        </h1>
        <div style={{ textAlign: "center" }}>
          <TextArea
            cols="2"
            rows="10"
            value={enteredAdvice}
            onChange={(event) => setEnteredAdvice(event.target.value)}
          />
          <br />
          <Button type="primary" onClick={saveAdvice}>
            Submit Advice
          </Button>
        </div>
      </Content>
    </Layout>
  );
};

export default AddAdvice;
