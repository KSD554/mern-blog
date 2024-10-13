import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left */}
        <div className='flex-1'>
        <Link to="/" className='font-bold dark:text-white text-4xl'>
         <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white '>Plume</span> 
         Partagée
        </Link>
        <p className='text-sm mt-5'>
        Inscrivez-vous dès maintenant et devenez un acteur
        de notre communauté en ligne dynamique et diversifiée
        !</p>
        </div>

        {/* right */}

        <div className='flex-1'>
        <form className='flex flex-col gap-4'>
            <div>
              <Label value="Votre nom d'utilisateur" />
              <TextInput
                type='text'
                placeholder="nom d'utilisateur"
                id='username'
              />
            </div>
            <div>
              <Label value='Votre email' />
              <TextInput
                type='email'
                placeholder='name@company.com'
                id='email'
              />
            </div>
            <div>
              <Label value='Votre mot de passe' />
              <TextInput
                type='password'
                placeholder='mot de passe'
                id='password'
                
              />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit'>S'inscrire</Button>
          </form>

          <div className='flex gap-2 text-sm mt-5'>
             <span>Vous avez un compte ?</span>
             <Link to='/sign-in' className='text-blue-500'>
             Se connecter
             </Link>
          </div>


        </div>

        
      </div>
    </div>
  )
}
