import { useLoaderData } from 'react-router-dom';
import GeneralMedia from '../components/GeneralMedia';
import TrendingMedia from '../components/TrendingMedia';
import axios from 'axios';

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

  return (
    <>
      <TrendingMedia trendingMedia={trendingMedia} />
      <GeneralMedia title="Recommended for you" data={recommendedMedia} />
    </>
  );
}
