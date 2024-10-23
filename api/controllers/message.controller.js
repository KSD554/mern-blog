import Message from "../models/message.model.js";
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config(); // Charge les variables d'environnement

export const sendMessage = async (req, res, next) => {
    const { to, subject, message } = req.body;

    // Validation des données
    if (!to || !subject || !message) {
        return res.status(400).json({ message: 'Tous les champs sont requis.' });
    }

    // Configuration du transporteur Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'Gmail', // Utilisez votre service de messagerie ici
        auth: {
            user: process.env.GMAIL_USER, // Remplacez par votre email
            pass: process.env.GMAIL_PASS, // Remplacez par votre mot de passe
        },
    });

    const mailOptions = {
        from: process.env.GMAIL_USER, // Utilisez la variable d'environnement
        to: to,
        subject: subject,
        text: message,
    };

    try {
        // Enregistrement du message dans la base de données
        const newMessage = new Message({ to, subject, message });
        await newMessage.save();

        // Envoi du message
        await transporter.sendMail(mailOptions);

        return res.status(200).json({ message: 'Message envoyé avec succès !' });
    } catch (error) {
        console.error('Erreur:', error);
        return res.status(500).json({ message: 'Erreur lors de l\'envoi du message.', error: error.message });
    }
};
