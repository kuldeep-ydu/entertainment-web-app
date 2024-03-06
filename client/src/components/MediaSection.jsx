import Heading from './Heading';
import MediaCard from './MediaCard';

export default function MediaSection({ title }) {
  return (
    <div>
      <Heading title={title} size="large" />
      <ul className="grid gap-y-8 gap-x-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
      </ul>
    </div>
  );
}
