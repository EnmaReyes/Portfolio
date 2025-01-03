const express = require("express");
const router = express.Router();
const path = require("path");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const PORT = process.env.PORT || 4002;
// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "src/build")));

app.use("/", router);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "src/build", "index.html"));
});

app.listen(PORT, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "enmareco.arg@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
