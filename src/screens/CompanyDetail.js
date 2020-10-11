import React from "react";
import { Layout, PageHeader, List, Tag, Button } from "antd";
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

const CompanyDetail = () => {
  return (
    <Layout>
      <PageHeader title="EMPOWER" onBack={() => window.history.back()} />
      <Content className="mainContent" style={{ height: "969px" }}>
        <img
          src="https://vignette.wikia.nocookie.net/disney/images/d/d2/Profile_-_Vanessa_Doofenshmirtz.jpg/revision/latest?cb=20200812210556"
          height="100"
          alt="Startup"
          style={{ borderRadius: 50 }}
        />
        <h2>Doofenshmirtz's Science Academy</h2>
        <h4>Transform young minds into curious and innovative thinkers!</h4>
        <List.Item actions={[Tags(["materials", "money", "distribution"])]} />
        <Button
          style={{ margin: 5 }}
          href="https://Doofenshmirtzscienceacademy4kids.com"
        >
          Website
        </Button>
        <Button style={{ margin: 5 }}>
          <a href="mailto:contact@test.com"> Email</a>
        </Button>
        <p>
          I started this company to help children for all ages learn about the
          STEM community! We want the children to build a fun environment by
          teaching them ways that could lead to innovative thinking. We are
          currently in the need for supplies for robotic parts (motors, Arduino,
          resistors, etc...), some laboratory equipment (Graduated Cylinders,
          Beakers, etc...) and few microscopes! We can collaborate if needed!
          Please visit our website: Doofenshmirtzscienceacademy4kids.com
        </p>
        <p>
          Cupcake ipsum dolor sit amet lollipop pastry danish oat cake. Halvah
          marzipan dessert wafer liquorice cotton candy ice cream. I love apple
          pie chocolate bar macaroon jujubes I love. Danish I love soufflé
          cotton candy soufflé biscuit. Dessert liquorice cheesecake halvah.
          Lollipop halvah biscuit chocolate cake. Sesame snaps oat cake tiramisu
          cotton candy jelly chocolate cake dragée croissant gummi bears.
          Gummies chocolate tiramisu bonbon donut. Soufflé cheesecake biscuit
          powder toffee dragée lemon drops candy canes muffin. Danish cake oat
          cake candy apple pie cotton candy oat cake apple pie.
        </p>
        <p>
          Sweet tootsie roll chocolate cake gingerbread marzipan I love.
          Gingerbread carrot cake jelly beans danish croissant muffin. Sweet
          dragée sweet roll soufflé. Pastry cake brownie marshmallow bonbon.
          Wafer topping tiramisu. Apple pie caramels sugar plum chocolate bar
          gingerbread. Danish cake brownie jujubes jelly gummi bears sweet roll
          ice cream pudding. Cake jujubes muffin chocolate cookie I love cake.
          Muffin gingerbread I love halvah. Fruitcake lemon drops caramels candy
          canes.
        </p>
      </Content>
    </Layout>
  );
};

export default CompanyDetail;
