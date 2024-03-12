import axios from '../axios';
import GeneralMedia from '../components/GeneralMedia';
import { useLoaderData } from 'react-router-dom';

export async function loader() {
  const response = await axios.get('/api/bookmarks');
  return response.data;
}

export default function Bookmarks() {
  const { movies, tvSeries } = useLoaderData();
  return (
    <>
      <GeneralMedia title="Bookmarked Movies" data={movies} />
      <GeneralMedia title="Bookmarked TV Shows" data={tvSeries} />
    </>
  );
}
