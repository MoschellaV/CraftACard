import React, { useState } from "react";
import "../assets/css/CreateCard.css";
import { Row, Col, Form, FormGroup } from "react-bootstrap";
import { Button } from "@mantine/core";
import axios from "axios";
import { showNotification, updateNotification } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons";

const CreateCard = () => {
  const [name, setName] = useState("");
  const [occasion, setOccasion] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState({ preview: "", data: "", extension: "" });
  const [message, setMessage] = useState("");

  let data = {
    name,
    occasion,
    email,
    image: image.data,
    message,
  };

  async function postInfo(e) {
    showNotification({
      id: "load-data",
      loading: true,
      title: "Hold tight!",
      message: "Were sending your eCard",
      autoClose: false,
      disallowClose: true,
    });
    e.preventDefault();
    e.target.reset();

    setImage({ preview: null });

    try {
      if (
        image.extension === "gif" ||
        image.extension === "png" ||
        image.extension === "jpg" ||
        image.extension === "jpeg" ||
        image.extension === "url"
      ) {
        await axios
          .post("/post_data", data, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then(() => {
            updateNotification({
              id: "load-data",
              color: "green",
              title: "Yay!",
              message: "Your eCard has been sent",
              icon: <IconCheck size={16} />,
              autoClose: 4000,
            });
            setMessage("");
          });
      } else {
        // eslint-disable-next-line
        //throw "invalid file type";
        updateNotification({
          id: "load-data",
          color: "red",
          title: "Uh oh!",
          message: "We need an image to send! Ensure it's a .jpg .png or .gif",
          icon: <IconX size={16} />,
          autoClose: 5000,
        });
      }
    } catch (error) {
      console.log(error);
      updateNotification({
        id: "load-data",
        color: "red",
        title: "Uh oh!",
        message: "Your eCard could not be sent",
        icon: <IconX size={16} />,
        autoClose: 5000,
      });
    }
  }

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      const tempImage = {
        preview: URL.createObjectURL(img),
        data: img,
        extension: img.type.split("/")[1],
      };
      setImage(tempImage);
    }
  };

  const getImage = async () => {
    // try {
    const response = await axios.get("/unsplashimage");
    let randomImage = {
      preview: response.data.urls.regular,
      data: response.data.urls.regular,
      extension: "url",
    };
    setImage(randomImage);
    // }
    // catch {
    //   console.log("Exceeded api request limit: ");
    // }
  };

  let quote = "";
  const getQuote = async () => {
    const response = await axios.get("https://api.quotable.io/random", {});
    quote = response.data.content;
    setMessage(`${message} ${quote}`);
  };

  return (
    <div id="create-card" className="create-card-bg">
      <div className="create-card-section">
        <h1 className="header pb-3">Create and Send your eCard!</h1>
        <h3 className="subheader">Upload Image</h3>
        <Form onSubmit={postInfo}>
          <Row>
            <Col md>
              <FormGroup>
                <Form.Label className="description">
                  Select an image or drag and drop!
                </Form.Label>
                <Form.Control
                  type="file"
                  name="myImage"
                  onChange={onImageChange}
                  size="lg"
                />

                <Button
                  className="generate-buttons"
                  variant="outline"
                  size="sm"
                  onClick={getImage}
                >
                  Generate Random Image
                </Button>
                <img className="resize-on-upload" src={image.preview} alt="" />
              </FormGroup>
            </Col>
            <Col md>
              <Form.Group>
                <div className="fields">
                  <Form.Label className="description">Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    required
                    autoComplete="dont-autocomplete-this"
                  />
                </div>
                <br />
                <div className="fields">
                  <Form.Label className="description">Occasion</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ex. Happy Birthday"
                    onChange={(e) => setOccasion(e.target.value)}
                    required
                    autoComplete="dont-autocomplete-this"
                  />
                </div>
                <br />
                <div className="fields">
                  <Form.Label className="description">
                    Recipient Email Address
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="example@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <br />
                <div className="fields" style={{ paddingBottom: "0px" }}>
                  <Form.Label className="description">
                    Put your message here!
                  </Form.Label>
                  <Form.Control
                    placeholder="Your message"
                    as="textarea"
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              </Form.Group>
              <Button
                className="generate-buttons"
                variant="outline"
                size="sm"
                onClick={getQuote}
              >
                Generate Random Quote
              </Button>

              <Button
                color="cyan"
                radius="xl"
                size="lg"
                className="grow"
                type="Submit"
                style={{
                  marginTop: "15px",
                  float: "right",
                }}
              >
                Send
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default CreateCard;
