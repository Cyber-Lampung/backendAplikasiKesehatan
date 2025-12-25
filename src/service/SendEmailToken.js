import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer-smtp-transport";
// const SMTPTransport = require("nodemailer-smtp-");
import * as dotenv from "dotenv";
dotenv.config();

const SendEmailToken = async (res, email) => {
  // create tranport
  const transport = nodemailer.createTransport(
    SMTPTransport({
      service: "gmail",
      auth: {
        user: process.env.username,
        pass: process.env.password, // bukan password asli email
      },
    })
  );

  //   untuk send email ke email pengguna

  await transport.sendMail({
    from: process.env.username,
    to: "acountbloger@gmail.com",
    subject: "token",
    text: "addadad",
  });

  res.send({ message: "pesan berhasil terkirim" });
};

export default SendEmailToken;
