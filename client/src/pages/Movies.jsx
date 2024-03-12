import { useLoaderData } from 'react-router-dom';
import GeneralMedia from '../components/GeneralMedia';
import axios from '../axios';

export async function loader() {
  const response = await axios.get('/api/movies');
  return response.data;
}

export default function Movies() {
  const movies = useLoaderData();
  console.log(movies);
  return <GeneralMedia title="Movies" data={movies} />;
}
