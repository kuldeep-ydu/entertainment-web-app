import axios from '../axios';
import GeneralMedia from '../components/GeneralMedia';
import { useLoaderData } from 'react-router-dom';

export async function loader() {
  const response = await axios.get('/api/tv-series');
  return response.data;
}

export default function TvShows() {
  const tvShows = useLoaderData();
  return <GeneralMedia title="TV Shows" data={tvShows} />;
}
