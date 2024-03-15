import { useLoaderData } from 'react-router-dom';
import GeneralMedia from '../components/GeneralMedia';
import mediaService from '../services/mediaService';

export async function loader() {
  const data = await mediaService.getMovies();
  return data;
}

export default function Movies() {
  const movies = useLoaderData();

  return <GeneralMedia title="Movies" data={movies} />;
}
