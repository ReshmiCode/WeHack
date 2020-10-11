import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Layout, List, Avatar, Tag } from "antd";
import NavBar from "../components/NavBar";
import db from "../components/firebase";
const { Content } = Layout;

const Tags = (tags) => {
  return tags.map((val) => {
    if (val === "money") return <Tag color="green">Funding</Tag>;
    if (val === "mentorship") return <Tag color="purple">Mentorship</Tag>;
    if (val === "users") return <Tag color="cyan">Users</Tag>;
    if (val === "distribution") return <Tag color="volcano">Distribution</Tag>;
    if (val === "materials") return <Tag color="magenta">Materials</Tag>;
    if (val === "ideas") return <Tag color="gold">Ideas</Tag>;
  });
};

const CompanyList = () => {
  let [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let companyArray = [];
      await db
        .collection("company")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            companyArray.push(doc.data().company);
          });
        });
      console.log(companyArray);
      setCompanies(companyArray);
    }
    fetchData();
  }, []);

  return (
    <Layout>
      <NavBar />
      <Content className="mainContent" style={{ textAlign: "center" }}>
        <h2>List of User Companies: </h2>
        <List
          grid={{ gutter: 16, column: 2 }}
          itemLayout="vertical"
          dataSource={companies}
          renderItem={(item) => (
            <List.Item
              style={{
                margin: "20px",
                border: "1px solid #000",
                borderRadius: "19px",
                padding: "15px",
                minHeight: "245px",
              }}
              key={item.title}
              actions={[Tags(item.tags)]}
            >
              <List.Item.Meta
                avatar={<Avatar size={64} src={item.avatar} />}
                title={
                  <NavLink
                    exact
                    to={`/companies/${item.id}`}
                    style={{ fontSize: 17 }}
                  >
                    {item.title}
                  </NavLink>
                }
                description={item.description}
              />
              {item.content}
            </List.Item>
          )}
        />
      </Content>
    </Layout>
  );
};

export default CompanyList;
