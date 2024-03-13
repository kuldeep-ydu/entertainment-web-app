import { useLoaderData } from 'react-router-dom';
import GeneralMedia from '../components/GeneralMedia';
import TrendingMedia from '../components/TrendingMedia';
import { useContext } from 'react';
import { UserContext } from '../context/userProvider';
import { toast } from 'react-hot-toast';
import authService from '../services/authService';
import mediaService from '../services/mediaService';

export async function loader() {
  const data = await Promise.all([
    mediaService.getRecommended(),
    mediaService.getTrending(),
  ]);

  return {
    recommendedMedia: data[0],
    trendingMedia: data[1],
  };
}

export default function Home() {
  const { recommendedMedia, trendingMedia } = useLoaderData();
  const { setUser } = useContext(UserContext);

  const logout = async () => {
    const toastId = toast.loading('Logging out ...');

    try {
      await authService.logout();
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
