const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const multer = require("multer");
const axios = require("axios");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const upload = multer({ dest: "./uploads/" });
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

uploadedImage = (req, name, occasion, email, message) => {
  let fileType = req.file.mimetype.split("/")[1];

  if (
    fileType == "png" ||
    fileType == "jpg" ||
    fileType == "jpeg" ||
    fileType == "gif"
  ) {
    // Creates a new name for the image file
    let newFileName = req.file.filename + "." + fileType;

    // Renaming the old file so it can be accessed later
    fs.rename(
      `./uploads/${req.file.filename}`,
      `./uploads/${newFileName}`,
      () => {
        // console.log('File Renamed');
      }
    );
    details = {
      from: `${name} <craftacard@gmail.com>`,
      to: email,
      subject: occasion,
      html: `<img src="cid:${req.file.filename}"/><br><h2>${message}</h2> <p style="margin-top:100px;">✉ Craft a Card </p>`,
      attachments: [
        {
          filename: newFileName,
          path: __dirname + `/uploads/${newFileName}`,
          cid: req.file.filename,
        },
      ],
    };
    return details;
  }
};
uploadURL = (name, occasion, email, image, message) => {
  let imageURL = image;

  // Compose details object
  details = {
    from: `${name} <craftacard@gmail.com>`,
    to: email,
    subject: occasion,
    html: `<img src="${imageURL}"/><br><h2>${message}</h2> <p style="margin-top:100px;">✉ Craft a Card </p>`,
  };
};

// For Deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
// Getting Image (getting quotes is done on front end because it dosen't requier a key)
app.get("/unsplashimage", (req, res) => {
  const options = {
    method: "GET",
    url: "https://api.unsplash.com/photos/random",
    headers: {
      Authorization: `Client-ID ${process.env.UNSPLASH_KEY}`,
    },
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

// Sending email
app.post("/post_data", upload.single("image"), async (req, res) => {
  res.send("response");

  let { name, occasion, email, image, message } = req.body;

  // Detects i the useer generated or uploaded an image
  if (typeof image == "undefined") {
    uploadedImage(req, name, occasion, email, message);
  } else {
    uploadURL(name, occasion, email, image, message);
  }

  // Define nodemailer transporter
  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  // Send email using the details object, via tha nodemailer transporter
  mailTransporter.sendMail(details, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("email sent");
    }
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
