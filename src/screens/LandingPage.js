import React from "react";
import NavBar from "../components/NavBar";
import { Layout } from "antd";
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
      <Content className="mainContent">
        <h1>Medha exists</h1>
        <h2>hi</h2>

      <div>
      <p> {" "} Made with 💖 by Medha Jonnada, Megan Tran, Reshmi Ranjith, and Saloni Shivdasani{" "} </p> 
      </div>
        

      </Content>     
    </Layout>    
  );
};

export default LandingPage;
