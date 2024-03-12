import Heading from './Heading';
import MediaCard from './MediaCard';

export default function GeneralMedia({ title, data }) {
  return (
    <div className="mx-6">
      <Heading title={title} size="large" />
      <ul className="grid gap-y-8 gap-x-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {data.map((media) => (
          <MediaCard key={media.title} media={media} />
        ))}
      </ul>
    </div>
  );
}
