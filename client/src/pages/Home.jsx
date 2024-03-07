import Heading from '../components/Heading';
import MediaSection from '../components/MediaSection';

export default function Home() {
  return (
    <>
      <div>
        <Heading title="Trending" size="large" />
      </div>
      <MediaSection title="Recommended for you" />
    </>
  );
}
