import GeneralMedia from '../components/GeneralMedia';
import { useLoaderData } from 'react-router-dom';
import mediaService from '../services/mediaService';

export async function loader() {
  const data = await mediaService.bookmarkedMedia();
  return {
    movies: data.filter((media) => media.category === 'Movie'),
    tvSeries: data.filter((media) => media.category === 'TV Series'),
  };
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
