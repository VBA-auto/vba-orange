import nodemailer from "nodemailer";

export default async function handler(req, res) {
  try {
    const { email, phone, name, message, immatriculation } = req.body;

    // Validate form fields
    if (!email || !phone || !name || !message || !immatriculation) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "mail.laboiteauto.com",
      port: 465,
      secure: true,
      auth: {
        user: "contact@laboiteauto.com",
        pass: "Test008//@@",
      },
      tls: {
        rejectUnauthorized: false, // Ignore certificate errors
      },
    });

    // Email options
    const mailOptions = {
      from: `${email}`,
      to: "contact@laboiteauto.com",
      replyTo: email, // Allow replying to the user's email
      subject: "Nouveau message de contact@laboiteauto.com",
      text: `Un utilisateur a rempli le formulaire sur le site:\n\n
      Email: ${email}\n
      Téléphone: ${phone}\n
      Nom et prénom: ${name}\n
      Message: ${message}\n
      Immatriculation: ${immatriculation}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email Sent Successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ message: "Failed to Send Email", error: error.message });
  }
}
