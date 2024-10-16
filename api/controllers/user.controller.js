import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import User from '../models/user.model.js';


export const test = (req,res) => {
    res.json({
        message:'API is working'
    });
};


export const updateUser = async (req, res, next) => {
    if (req.user.id !== req.params.userId) {
      return next(errorHandler(403, "Vous n'êtes pas autorisé à mettre à jour cet utilisateur"));
    }
    if (req.body.password) {
      if (req.body.password.length < 6) {
        return next(errorHandler(400, 'Le mot de passe doit contenir au moins 6 caractères'));
      }
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }
    if (req.body.username) {
      if (req.body.username.length < 7 || req.body.username.length > 20) {
        return next(
          errorHandler(400, "Le nom d'utilisateur doit comporter entre 7 et 20 caractères")
        );
      }
      if (req.body.username.includes(' ')) {
        return next(errorHandler(400, "Le nom d'utilisateur ne peut pas contenir d'espaces"));
      }
      if (req.body.username !== req.body.username.toLowerCase()) {
        return next(errorHandler(400, "Le nom d'utilisateur doit être en minuscules"));
      }
      if (!req.body.username.match(/^[a-zA-Z0-9]+$/)) {
        return next(
          errorHandler(400, "Le nom d'utilisateur ne peut contenir que des lettres et des chiffres")
        );
      }
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.userId,
        {
          $set: {
            username: req.body.username,
            email: req.body.email,
            profilePicture: req.body.profilePicture,
            password: req.body.password,
          },
        },
        { new: true }
      );
      const { password, ...rest } = updatedUser._doc;
      res.status(200).json(rest);
    } catch (error) {
      next(error);
    }
  };

export const deleteUser = async (req, res, next) => {
    if (!req.user.id !== req.params.userId) {
      return next(errorHandler(403, "Vous n'êtes pas autorisé à supprimer cet utilisateur"));
    }
    try {
      await User.findByIdAndDelete(req.params.userId);
      res.status(200).json("L'utilisateur a été supprimé");
    } catch (error) {
      next(error);
    }
};