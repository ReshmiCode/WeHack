import React, { useState } from "react";
import { Layout, Input, Button, Steps, message } from "antd";
import { useHistory } from "react-router-dom";
import NavBar from "../components/NavBar";
import db from "../components/firebase";
const { Step } = Steps;
const { Content } = Layout;
const { TextArea } = Input;

const Profile = () => {
  const history = useHistory();

  let [enteredTitle, setEnteredTitle] = useState("");
  let [enteredImage, setEnteredImage] = useState("");
  let [enteredDescription, setEnteredDescription] = useState("");
  let [enteredContent, setEnteredContent] = useState("");
  let [enteredTags, setEnteredTags] = useState("");
  const [number, setNumber] = useState(0);

  const next = () => {
    setNumber(number + 1);
  };

  const prev = () => {
    setNumber(number - 1);
  };

  function AddCompany() {
    const company = {
      title: enteredTitle,
      avatar: enteredImage,
      description: enteredDescription,
      content: enteredContent,
      tags: enteredTags.split(", "),
      id: Math.floor(Math.random() * 1000),
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
    //history.push("/companies");
    message.success("Saved company details!");
  }

  const steps = [
    {
      title: "Company Details",
      content: "First-content",
    },
    {
      title: "Product Details",
      content: "Second-content",
    },
    {
      title: "Find Peers",
      content: "Third-content",
    },
    {
      title: "Share Advice",
      content: "Last-content",
    },
  ];

  const Form = () => {
    return (
      <>
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
      </>
    );
  };

  const genContent = () => {
    switch (number) {
      case 0:
        return Form();
      default:
        return steps[number].content;
    }
  };

  return (
    <Layout>
      <NavBar />
      <Content className="mainContent" style={{ textAlign: "center" }}>
        <>
          <Steps current={number}>
            {steps.map((item) => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <div className="steps-content">{genContent()}</div>
          <div className="steps-action">
            {number < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )}
            {number === steps.length - 1 && (
              <Button
                type="primary"
                onClick={() => message.success("Processing complete!")}
              >
                Done
              </Button>
            )}
            {number > 0 && (
              <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                Previous
              </Button>
            )}
          </div>
        </>
      </Content>
    </Layout>
  );
};

export default Profile;
