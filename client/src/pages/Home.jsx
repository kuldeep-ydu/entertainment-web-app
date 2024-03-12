import { useLoaderData } from 'react-router-dom';
import GeneralMedia from '../components/GeneralMedia';
import TrendingMedia from '../components/TrendingMedia';
import axios from 'axios';
import { useContext } from 'react';
import { UserContext } from '../context/userProvider';
import { toast } from 'react-hot-toast';

export async function loader() {
  const response = await Promise.all([
    axios.get('/api/recommended-media'),
    axios.get('/api/trending-media'),
  ]);

  return {
    recommendedMedia: response[0].data,
    trendingMedia: response[1].data,
  };
}

export default function Home() {
  const { recommendedMedia, trendingMedia } = useLoaderData();
  const { setUser } = useContext(UserContext);

  const logout = async () => {
    const toastId = toast.loading('Logging out ...');

    try {
      await axios.get('/api/logout');
      localStorage.removeItem('entertainmentAppUser');
      setUser(null);
      toast.dismiss(toastId);
      toast.success('Logged out successfully');
    } catch (error) {
      toast.error(error.message);
      toast.dismiss(toastId);
    }
  };

  return (
    <>
      <button onClick={logout} className="hidden">
        logout
      </button>
      <TrendingMedia trendingMedia={trendingMedia} />
      <GeneralMedia title="Recommended for you" data={recommendedMedia} />
    </>
  );
}
