import GeneralMedia from '../components/GeneralMedia';
import { useLoaderData } from 'react-router-dom';
import bookmarkService from '../services/bookmarkService';

export async function loader() {
  const data = await bookmarkService.getBookmarks();
  return data;
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
