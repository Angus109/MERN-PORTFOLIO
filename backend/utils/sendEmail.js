import nodeMailer from "nodemailer";

export const sendEmail = async (options) => {



  const transporter = nodeMailer.createTransport({
    host: process.env.SMT_HOST,
    port: process.env.SMT_PORT,
    service: process.env.SMT_SERVICE,
    auth: {
      user: process.env.SERVICE,
      pass: process.env.SMT_PASSWORD,
    },
  });

  const mailOptions = {
    from: "",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  await transporter.sendMail(mailOptions);
};
