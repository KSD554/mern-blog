import { Button, Card } from 'flowbite-react';
import { FaUserPlus, FaSignInAlt } from 'react-icons/fa';

export default function CallToAction() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8">
      <Card className="w-full max-w-md bg-white shadow-lg rounded-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Rejoignez <span className="text-indigo-600">Plume Partagée</span>
          </h2>
          <p className="text-gray-500 mb-6">
            Créez un compte pour partager vos idées avec une communauté passionnée.
          </p>

          {/* Bouton d'inscription */}
          <Button
            color="purple"
            size="lg"
            className="w-full mb-4 flex items-center justify-center"
            href="/sign-up"
          >
            <FaUserPlus className="mr-2" />
            S&apos;inscrire
          </Button>

          {/* Texte d'incitation à la connexion */}
          <p className="text-gray-700">Déjà membre ?</p>

          {/* Bouton de connexion */}
          <Button
            outline={true}
            gradientDuoTone="purpleToBlue"
            size="lg"
            className="w-full mt-2 flex items-center justify-center"
            href="/sign-in"
          >
            <FaSignInAlt className="mr-2" />
            Connexion
          </Button>
        </div>
      </Card>
    </div>
  );
}
