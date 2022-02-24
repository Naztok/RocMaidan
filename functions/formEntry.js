const nodemailer = require("nodemailer");
import querystring from "querystring";

/* let transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "d9c4addc64e3c7",
    pass: "0d5ef028ce4c25"
  }
});
const message = {
  from: "elonmusk@tesla.com", // Sender address
  to: "to@email.com", // List of recipients
  subject: "Design Your Model S | Tesla", // Subject line
  text: "Have the most fun you can in a car. Get your Tesla today!" // Plain text body
};
transport.sendMail(message, function(err, info) {
  if (err) {
    console.log(err);
  } else {
    console.log(info);
  }
}); */

exports.handler = async (event, context) => {
  const bodyParser = require("body-parser");
  let params;
  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  );

  app.use(bodyParser.json());

  app.post("/endpoint", (req, res) => {
    params = req.body;
    console.log(req.body);
  });
  return {
    statusCode: 200,
    body: `${params}`
  };
};
