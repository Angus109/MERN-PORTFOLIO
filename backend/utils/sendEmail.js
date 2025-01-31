import nodeMailer from "nodemailer";

export const sendEmail = async (options) => {



  const transporter = nodeMailer.createTransport({
    host: process.env.SMT_HOST,
    port: process.env.SMT_PORT,
    auth: {
      user: process.env.SMT_USER,
      pass: process.env.SMT_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMT_USER,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  await transporter.sendMail(mailOptions);
};
