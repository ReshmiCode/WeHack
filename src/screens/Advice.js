import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import db from "../components/firebase";
const { Content } = Layout;

const Advice = () => {
  let [advice, setAdvice] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let adviceArray = [];
      await db
        .collection("advice")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            adviceArray.push(doc.data().advice);
          });
        });
      setAdvice(adviceArray);
    }
    fetchData();
  }, []);

  return (
    <Layout>
      <NavBar />
      <Content className="mainContent">
        <h1 style={{ margin: 0, padding: 20 }}>
          Advice from Women Entrepreuners
        </h1>
        <Link to="/add-advice" style={{ padding: 20 }}>
          Add Advice Here
        </Link>
        <div>
          {advice.map((value, index) => {
            return (
              <div
                style={{
                  padding: 25,
                  margin: 10,
                  border: "5px solid green",
                }}
              >
                <p>{value}</p>
              </div>
            );
          })}
        </div>
      </Content>
    </Layout>
  );
};

export default Advice;
