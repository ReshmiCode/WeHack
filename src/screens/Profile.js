import React, { useState } from "react";
import { Layout, Input, Button } from "antd";
import { useHistory } from "react-router-dom";
import NavBar from "../components/NavBar";
import db from "../components/firebase";
const { Content } = Layout;
const { TextArea } = Input;

const Profile = () => {
  const history = useHistory();

  let [enteredTitle, setEnteredTitle] = useState("");
  let [enteredImage, setEnteredImage] = useState("");
  let [enteredDescription, setEnteredDescription] = useState("");
  let [enteredContent, setEnteredContent] = useState("");
  let [enteredTags, setEnteredTags] = useState("");

  function AddCompany() {
    const company = {
      title: enteredTitle,
      avatar: enteredImage,
      description: enteredDescription,
      content: enteredContent,
      tags: enteredTags.split(", "),
    };
    db.collection("company")
      .add({
        company: company,
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
    history.push("/companies");
  }

  return (
    <Layout>
      <NavBar />
      <Content className="mainContent" style={{ textAlign: "center" }}>
        <h1>Enter Company Details</h1>
        <h3>Enter Company Title</h3>
        <Input
          type="text"
          style={{ width: "30%" }}
          value={enteredTitle}
          onChange={(event) => setEnteredTitle(event.target.value)}
        />
        <h3>Enter Link to Image</h3>
        <Input
          type="url"
          style={{ width: "50%" }}
          value={enteredImage}
          onChange={(event) => setEnteredImage(event.target.value)}
        />
        <h3>Enter Description</h3>
        <TextArea
          rows="10"
          style={{ width: "50%" }}
          value={enteredDescription}
          onChange={(event) => setEnteredDescription(event.target.value)}
        />
        <h3>Enter Content</h3>
        <TextArea
          rows="10"
          style={{ width: "50%" }}
          value={enteredContent}
          onChange={(event) => setEnteredContent(event.target.value)}
        />
        <h3>Enter Tags (seperated by commas)</h3>
        <TextArea
          rows="2"
          style={{ width: "50%" }}
          value={enteredTags}
          onChange={(event) => setEnteredTags(event.target.value)}
        />
        <br />
        <Button type="primary" onClick={AddCompany}>
          Submit Company
        </Button>
      </Content>
    </Layout>
  );
};

export default Profile;
