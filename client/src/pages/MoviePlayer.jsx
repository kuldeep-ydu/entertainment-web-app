import MediaService from '../services/mediaService';
import { useLoaderData } from 'react-router-dom';

export async function loader({ params }) {
  const media = await MediaService.getOne(params.movieId);
  return media;
}

export default function MoviePlayer() {
  const media = useLoaderData();

  return (
    <div className="grid place-items-center bg-primary p-10">
      <h1 className="text-4xl mb-10">
        Watch{' '}
        <span className="font-bold">
          {media.title} ({media.year})
        </span>
      </h1>
      <video
        controls
        className="block aspect-video max-w-full w-[500px]"
        src={media.url}
      />
    </div>
  );
}
