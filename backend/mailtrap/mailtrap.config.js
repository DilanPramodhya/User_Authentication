import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

export const mailtrapClient = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.com",
  name: "Mailtrap Test",
};

// const recipients = ["dilanpramodhya44@gmail.com"];

// transport
//   .sendMail({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     // text: "Congrats for sending test email with Mailtrap!",
//     html: "<h1>Congrats</h1>",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);





// This is another way of sending gmail

// // const transporter = nodemailer.createTransport({
// //   service: "gmail",
// //   auth: {
// //     user: "k8275.dilan@gmail.com",
// //     pass: "vkon pnnx itho xzci",
// //   },
// // });

// // const mailOptions = {
// //   from: "k8275.dilan@gmail.com",
// //   to: "dilanpramodhya44@gmail.com",
// //   subject: "Email testing",
// //   text: "This is a testing",
// //   html: "This is a <button>Button</button> testing",
// // };

// // transporter.sendMail(mailOptions, function (error, info) {
// //   if (error) {
// //     console.log(error);
// //   } else {
// //     console.log("Email sent: " + info.response);
// //   }
// // });
