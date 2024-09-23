import nodemailer from "nodemailer";

export default async function handler(req, res) {
  try {
    const { email, phone, name, message } = req.body;

    const transporter = nodemailer.createTransport({
      // service: "gmail",
      host: "parallelisme.fr",
      port: 465,
      secure: true,
      auth: {
        user: "contact@parallelisme.fr",
        pass: "Noroc007//",
      },
    });

    const mailOptions = {
      from: email,
      to: "contact@parallelisme.fr",
      // to: "contact@sos-enlevement-epave.fr",
      subject: "Nouveau message de parallelisme.fr",
      text: `Un utilisateur a rempli le formulaire sur le site https://parallelisme.fr/ :\n\nEmail: ${email}\n\nTéléphone: ${phone}\n\nNom et prénom: ${name}\n\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    // Use the res object to send the response
    res.status(200).json({ message: "Email Sent Successfully" });
  } catch (error) {
    console.error("Error sending email:", error);

    // Use the res object to send the response
    res.status(500).json({ message: "Failed to Send Email" });
  }
}
