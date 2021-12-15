const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const multer = require("multer");

const app = express();
const upload = multer();

const hostname = "127.0.0.1";
const port = 4400;
const max_files_per_request = 12;
const max_file_size = 20 * 1024 * 1024; // 20 mb
const max_email_size = 49 * 1024 * 1024; // ~50 mb

const mailerConfig = {
  service: "Gmail",
  auth: {
    user: "info@hardwarehouses.com",
    pass: "tempwolf1234",
  },
};

const transporter = nodemailer.createTransport(mailerConfig);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

app.set("trust proxy", true);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post(
  "/contact-us",
  upload.array("files", max_files_per_request),
  (req, res) => {
    const { email, message } = req.body;
    let attachmentError = false;
    let attachmentTotalSize = 0;

    const attachments = req.files.map((file) => {
      const { buffer, originalname, size } = file;
      attachmentTotalSize += size;
      if (size > max_file_size) attachmentError = true;

      return {
        filename: originalname,
        content: buffer,
      };
    });

    if (attachmentTotalSize > max_email_size) attachmentError = true;

    if (attachmentError) {
      res.status(400);
      res.send({
        status: 400,
        msg: "Email attachment error. Attachment should not exceed 20mb. Email should not exceed 50mb.",
      });
    }

    const mailOptions = {
      from: mailerConfig.auth.user,
      to: "info@hardwarehouses.com",
      subject: email,
      text: message,
    };

    if (attachments.length) mailOptions.attachments = attachments;

    transporter.sendMail(mailOptions, (err) => {
      if (err) {
        res.status(400);
        res.send({
          status: 400,
          msg: "Email sending error.",
        });
      } else {
        res.status(200);
        res.send({
          status: 200,
          msg: "Email successfully sent.",
        });
      }
    });
  }
);

app.listen(port, hostname, () => {
  console.log(`App listening at http://${hostname}:${port}`);
});
