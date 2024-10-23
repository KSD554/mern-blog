import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
        <h1 className='text-3xl font-bold lg:text-6xl'>Bienvenue sur Plume Partagée</h1>
        <p className='text-gray-500 text-xs sm:text-sm'>
        Dans cet espace, nous célébrons la diversité des idées
        , des passions et des découvertes. Plume Partagée est
         un lieu où la curiosité n’a pas de limites. 
         Que vous soyez passionné de culture, de technologie,
          de voyages ou de cuisine, vous trouverez ici des 
          articles qui éveilleront votre esprit et enrichiront
           vos connaissances.
        </p>
        <Link
          to='/search'
          className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'
        >
          Voir tous les articles
        </Link>
      </div>
      <div className='p-4 bg-gradient-to-r from-teal-400 to-blue-600 text-white'>
        <CallToAction />
      </div>

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Articles récents</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              Voir tous les articles
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
