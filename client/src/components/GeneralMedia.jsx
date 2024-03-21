import Heading from './Heading';
import MediaCard from './MediaCard';

export default function GeneralMedia({ title, data }) {
  return (
    <div className="mx-6">
      <Heading title={title} size="large" />
      <ul className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
        {data.map((media, index) => (
          <MediaCard key={media.title} media={media} priority={index < 8} />
        ))}
      </ul>
    </div>
  );
}
