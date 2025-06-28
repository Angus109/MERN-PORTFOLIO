import nodeMailer from "nodemailer";

export const contactMail = async (options) => {

   // Email content based on form type
    const emailContent =
      options.date !== undefined
        ? `
        <h2>New Consultation Booking</h2>
        <p><strong>Name:</strong> ${options.senderName}</p>
        <p><strong>Email:</strong> ${options.email}</p>
        <p><strong>Service:</strong> ${options.service}</p>
        <p><strong>Preferred Date:</strong> ${options.date}</p>
        <p><strong>Preferred Time:</strong> ${options.time}</p>
        <p><strong>Notes:</strong> ${options.notes || "None"}</p>
      `
        : `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${options.senderName}</p>
        <p><strong>Email:</strong> ${options.email}</p>
        <p><strong>Subject:</strong> ${options.subject}</p>
        <p><strong>Message:</strong> ${options.message}</p>
      `




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
    subject: options.type === "booking" ? `New Consultation Booking - ${options.senderName}` : `Contact Form: ${options.subject}`,
    text: 'Email from your portfolio',
    html: emailContent,
  };
  await transporter.sendMail(mailOptions);
};
