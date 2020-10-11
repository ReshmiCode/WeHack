import React from "react";
import NavBar from "../components/NavBar";
import { Layout } from "antd";
import { Link } from "react-router-dom";
const { Content } = Layout;

const Advice = () => {
  const advice = [
    "Cupcake ipsum dolor sit amet. Cookie icing I love bear claw bonbon. Oat cake gummies I love ice cream candy chocolate.",
    "Cheesecake chupa chups gingerbread. I love wafer marshmallow biscuit I love sweet roll candy pastry. Tart pie toffee dragée. Ice cream ice cream tiramisu gingerbread.",
    "Bear claw tootsie roll cake. I love candy fruitcake candy canes gingerbread I love soufflé. Icing candy cheesecake muffin I love sweet toffee croissant wafer.",
    "Muffin apple pie liquorice chocolate bar toffee donut jelly-o. Carrot cake I love chocolate bar icing cupcake apple pie I love. Wafer I love icing marzipan croissant chocolate muffin dessert tootsie roll. Sugar plum carrot cake I love marshmallow.",
    "Dragée fruitcake jelly-o sweet cheesecake powder chocolate dragée. Jelly-o candy canes pudding bear claw cotton candy donut oat cake dessert apple pie. Bear claw lollipop sugar plum lollipop pie jelly-o. Cake candy canes sesame snaps danish chupa chups sweet roll dragée I love.",
    "Halvah pie tiramisu dragée chupa chups bear claw. Candy canes apple pie jelly beans carrot cake lemon drops. Pie caramels lollipop cake sesame snaps croissant.",
  ];
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
