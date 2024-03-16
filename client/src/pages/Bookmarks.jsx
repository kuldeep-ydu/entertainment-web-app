import GeneralMedia from '../components/GeneralMedia';
import { useLoaderData } from 'react-router-dom';

export async function loader() {
  return null;
}

export default function Bookmarks() {
  const { movies, tvSeries } = useLoaderData();
  return (
    <div className="grid gap-10">
      <GeneralMedia title="Bookmarked Movies" data={movies} />
      <GeneralMedia title="Bookmarked TV Shows" data={tvSeries} />
    </div>
  );
}
