import { useLoaderData } from 'react-router-dom';
import GeneralMedia from '../components/GeneralMedia';
import TrendingMedia from '../components/TrendingMedia';
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

  return (
    <>
      <TrendingMedia trendingMedia={trendingMedia} />
      <GeneralMedia title="Recommended for you" data={recommendedMedia} />
    </>
  );
}
