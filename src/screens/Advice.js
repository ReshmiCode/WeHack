import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { Layout, Button, List, Collapse } from "antd";
import { Link } from "react-router-dom";
import db from "../components/firebase";
const { Panel } = Collapse;
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
        <Collapse accordion>
          <Panel header="Boss Habits Every Entrepreneur Should Have" key="1">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/HcmWONC42I4"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p>
              Getting in the right mindset can make all the difference. Learn
              about some habits to help you stay productive!
            </p>
          </Panel>
          <Panel header="How To Go From Idea to Product to Business" key="2">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/6yi20I-AcUg"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p>The key takeaways from this video are:</p>
            <ul>
              <li>Write down all the ideas you have</li>
              <li>Identify market needs</li>
              <li>Create a product</li>
              <li>Find Distributors</li>
            </ul>
            <p>Click here for the slides from the presentation:</p>
            <a>
              <img src="https://image.slidesharecdn.com/womenentrepreneurs2010-131028120718-phpapp02/95/women-entrepreneurs-7-638.jpg?cb=1382962508" />
            </a>
          </Panel>
          <Panel header="Women Entrepreneurs Share Their Stories" key="3">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/JzHLIXbqlOU"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p>
              In this video, five women share their stories. Reflect on some of
              their origins and see if you notice any similaries.
            </p>
          </Panel>
        </Collapse>
      </Content>
    </Layout>
  );
};

export default Advice;
