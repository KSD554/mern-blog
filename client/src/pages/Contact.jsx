import { Alert, Button, Label, Spinner, Textarea, TextInput } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Contact({ userId }) {
  const [landlord, setLandlord] = useState(null);
  const [formData, setFormData] = useState({ name: '', subject: '', message: '' });
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  useEffect(() => {
    if (!userId) {
      setErrorMessage("L'identifiant de l'utilisateur est manquant.");
      return;
    }

    const fetchLandlord = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/user/${userId}`);
        if (!res.ok) throw new Error("Erreur lors du chargement de l'utilisateur.");
        const data = await res.json();
        setLandlord(data);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLandlord();
  }, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.subject || !formData.message) {
      return setErrorMessage('Veuillez remplir tous les champs.');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
  
      const res = await fetch('/api/send-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: 'kouassisadok3@gmail.com',
          subject: formData.subject,
          message: `${formData.name}: ${formData.message}`,
        }),
      });
  
      const responseText = await res.text();
      console.log('Response Text:', responseText);
  
      try {
        const data = JSON.parse(responseText);
        if (!res.ok || data.success === false) {
          return setErrorMessage(data.message || 'Une erreur est survenue lors de l\'envoi du message.');
        }
        navigate('/');
      } catch (error) {
        throw new Error("Le serveur a renvoyé une réponse inattendue : " + responseText);
      }
  
    } catch (error) {
      setErrorMessage(error.message);
      console.error('Erreur :', error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        <div className='flex-1'>
          <Link to='/' className='font-bold dark:text-white text-4xl'>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Contact
          </h1>
          </Link>
          <p className='text-sm mt-5'>
            Vous souhaitez nous contacter ? Nous sommes là pour vous aider !
          </p>
          {landlord && (
            <div className='mt-5'>
              <p><strong>Contact d&apos;utilisateur :</strong> {landlord.name}</p>
              <p><strong>Email :</strong> {landlord.email}</p>
            </div>
          )}
        </div>

        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="name" value="Votre nom" />
              <TextInput
                id="name"
                type="text"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="subject" value="Sujet" />
              <TextInput
                id="subject"
                type="text"
                placeholder="Sujet"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="message" value="Votre message" />
              <Textarea
                id='message'
                rows="4"
                placeholder="Entrez votre message ici..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <Button
              gradientDuoTone='purpleToPink'
              type='submit'
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Envoi...</span>
                </>
              ) : (
                'Envoyer'
              )}
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <Link to='/' className='text-blue-500'>
              Retour à la page d&apos;accueil
            </Link>
          </div>
          {errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
