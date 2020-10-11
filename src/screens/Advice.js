import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { Layout, Button, List } from "antd";
import { Link } from "react-router-dom";
import db from "../components/firebase";
import ContentViewer from "../components/ContentViewer";
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
        <h1 style={{ margin: 0, padding: 20, textAlign: "center" }}>
          Advice from Women Entrepreuners
        </h1>
        <Button>
          <Link to="/add-advice" style={{ padding: 20, margin: 20 }}>
            Add Advice Here
          </Link>
        </Button>

        <List
          bordered
          dataSource={advice}
          renderItem={(item) => <List.Item>{item}</List.Item>}
          style={{ padding: 20, margin: 20 }}
        />

        {/* <div>
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
        </div> */}
        <h1 style={{ marginTop: 20, textAlign: "center" }}>
          Exclusive Tips and Talks
        </h1>
        <p style={{ marginBottom: 10, textAlign: "center" }}>
          Hear from some of our very successful members! Including workshops
          such as how to go from idea to business or inspiring stories.
        </p>
        <ContentViewer />
      </Content>
    </Layout>
  );
};

export default Advice;
