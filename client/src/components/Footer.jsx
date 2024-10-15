import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsEnvelope, BsInstagram, BsGithub, BsWhatsapp,BsTelegram } from 'react-icons/bs';
export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
            >
              <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                Plume
              </span>
              Partagée
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='A propos' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://www.100jsprojects.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Moi
                </Footer.Link>
                <Footer.Link
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Plume Partagée
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Suivez-nous' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://www.github.com/KSD554'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </Footer.Link>
                <Footer.Link href='#'>Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Privacy Policy</Footer.Link>
                <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="KSD"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href="https://wa.me/2250704306642" target="_blank" icon={BsWhatsapp}/>
            <Footer.Icon href="mailto:kouassisadok3@gmail.com" icon={BsEnvelope}/>
            <Footer.Icon href="https://www.instagram.com/ksd6013/" target="_blank" icon={BsInstagram}/>
            <Footer.Icon href="https://t.me/sadok2254" target="_blank" icon={BsTelegram}/>
            <Footer.Icon href='https://www.github.com/KSD554' icon={BsGithub}/>
            

          </div>
        </div>
      </div>
    </Footer>
  );
}