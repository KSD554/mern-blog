import mongoose from 'mongoose';

const emailValidator = (value) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expression régulière pour valider les e-mails
  return regex.test(value);
};

const messageSchema = new mongoose.Schema(
  {
    to: { 
      type: String, 
      required: true, 
      validate: [emailValidator, 'Adresse e-mail invalide.'] // Validation de l'adresse e-mail
    },
    subject: { 
      type: String, 
      required: true,
      maxlength: 100 // Limite de 100 caractères
    },
    message: { 
      type: String,
      required: true,
      maxlength: 500 // Limite de 500 caractères
    },
  },
  { timestamps: true }
);

const Message = mongoose.model('Message', messageSchema);

export default Message;
