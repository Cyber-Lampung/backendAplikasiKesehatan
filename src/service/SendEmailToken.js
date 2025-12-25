import nodemailer from "nodemailer";

const SendEmailToken = (res, email) => {
  // create tranport

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "radohidayatulloh43@gmail.com",
      password: "asdsdsdsdsd", // bukan password asli email
    },
  });

  //   untuk send email ke email pengguna

  transport.sendMail({
    from: "radohidayatulloh@gmail.com",
    to: "acountbloger@gmail.com",
    subject: "token",
    text: "addadad",
  });
};

export default SendEmailToken;
