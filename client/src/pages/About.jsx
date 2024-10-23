import { Button, Card } from 'flowbite-react';
import { FaBookOpen, FaPenFancy } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
            À propos de <span className="text-indigo-500">Plume Partagée</span>
          </h1>
          <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 mt-4">
            Un espace de lecture, de partage et d&apos;exploration où chaque plume compte.
          </p>
        </div>

        {/* Section: Ce que nous proposons */}
        <Card className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            Ce que nous proposons
          </h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
            Plume Partagée offre une grande diversité de contenus pour satisfaire toutes les curiosités.
          </p>
          <ul className="mt-4 list-disc list-inside text-base md:text-lg text-gray-700 dark:text-gray-300">
            <li>Articles et essais sur la littérature, la technologie, et plus encore.</li>
            <li>Tutoriels pratiques en programmation et développement web.</li>
            <li>Des espaces d’échange pour débattre et discuter avec une communauté active.</li>
          </ul>
        </Card>

        {/* Section: Rejoignez la communauté */}
        <Card className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            Rejoignez notre communauté
          </h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
            Chez Plume Partagée, nous croyons que le partage des connaissances et des idées nous permet de grandir ensemble. Connectez-vous avec des esprits créatifs, laissez des commentaires, et participez aux discussions.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center mt-6 space-y-4 md:space-y-0 md:space-x-4">
            <Link to="/sign-up">
              <Button size="lg" gradientDuoTone="purpleToBlue">
                <FaPenFancy className="mr-2 h-5 w-5" />
                S&apos;inscrire
              </Button>
            </Link>
            <Link to="/sign-in">
              <Button size="lg" gradientDuoTone="cyanToGreen">
                <FaBookOpen className="mr-2 h-5 w-5" />
                Se connecter
              </Button>
            </Link>
          </div>
        </Card>

        {/* Section: Notre mission */}
        <Card>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            Notre mission
          </h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
            Nous croyons que chaque personne a quelque chose à partager. Que vous soyez un écrivain en herbe, un développeur passionné ou simplement un lecteur curieux, 
            Plume Partagée est un endroit pour vous. Nous voulons inspirer, éduquer et engager nos lecteurs à travers des contenus variés et interactifs.
          </p>
        </Card>
      </div>
    </div>
  );
}
