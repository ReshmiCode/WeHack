import logo from "../logo.png";
import React from "react";
import NavBar from "../components/NavBar";
import { Layout } from "antd";
import { NavLink } from "react-router-dom";
const { Content } = Layout;

const Lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus finibus tortor eget tempus. Curabitur consequat mi quis massa lobortis, a varius ipsum suscipit. Etiam placerat lobortis lacus, a varius turpis luctus quis. Cras augue turpis, vestibulum sed erat nec, vulputate varius enim. Donec pretium, leo nec mollis egestas, nunc tellus sagittis urna, sit amet commodo risus enim tincidunt urna. Vivamus scelerisque lacinia est id venenatis. Maecenas tristique lectus nunc, et rutrum neque mollis vitae. Cras sit amet pulvinar sapien. Vestibulum vel pretium ante, at scelerisque nisl. Mauris feugiat urna id ipsum placerat sollicitudin.";
const button = {
  width: 120,
  height: 45,
  margin: 10,
  borderRadius: 15,
  backgroundColor: "#ffa090",
  border: "none",
};

const LandingPage = () => {
  return (
    <Layout>
      <NavBar />
      <Content className="mainContent" style={{ justifyContent: "center" }}>
        <img width="100%" src={logo}></img>
        <div style={{ textAlign: "center", padding: "30px 30px 0px 30px" }}>
          <h3 style={{ marginBottom: "35px" }}>
            It can be hard for women to be entrepreneurs and small business
            owners. We wanted to create an application which would encourage,
            guide, and create a community of women entrepreneurs. We wanted to
            connect women to the right resources they would need. Startups in
            robotics may need funding or parts but the people in charge may not
            know where to get these or need connections. Startups for mobile
            applications may not need capital, just a starting user base. We
            wanted to solve all these challenges with one solution: Empower.
          </h3>
          <NavLink exact className="btn btn-1" to="/companies">
            Log In
          </NavLink>
          <p style={{ marginTop: "35px", fontSize: "25px" }}>
            Made with 💖 by Medha Jonnada, Megan Tran, Reshmi Ranjith, and
            Saloni Shivdasani
          </p>
        </div>
      </Content>
    </Layout>
  );
};

export default LandingPage;
