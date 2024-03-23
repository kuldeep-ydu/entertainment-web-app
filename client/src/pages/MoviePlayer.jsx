import MediaService from '../services/mediaService';
import { useLoaderData } from 'react-router-dom';

export async function loader({ params }) {
  const media = await MediaService.getOne(params.movieId);
  return media;
}

export default function MoviePlayer() {
  const media = useLoaderData();

  return (
    <div className="grid place-items-center bg-primary p-10 pb-0">
      <h1 className="text-4xl mb-10">
        Watch{' '}
        <span className="font-bold">
          {media.title} ({media.year})
        </span>
      </h1>
      <video
        controls
        poster={media.thumbnail.regular.large + '.png'}
        className="block aspect-video max-w-full w-[1000px]"
        src={media.url}
      />
    </div>
  );
}
