// routes/messageRoutes.js
import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { sendMessage } from '../controllers/message.controller.js';

const router = express.Router();

// Middleware pour gérer les erreurs
const handleError = (err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Erreur interne du serveur.' });
};

// Route pour envoyer un message
router.post('/send-message', verifyToken, sendMessage, handleError);

export default router;
