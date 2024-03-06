import Heading from '../components/Heading';
import MediaSection from '../components/MediaSection';
import largeImage from '../assets/thumbnails/beyond-earth/trending/large.jpg';
export default function Home() {
  return (
    <>
      <div>
        <Heading title="Trending" size="large" />

        <div className="relative">
          <div className="flex gap-5 *:flex-1 overflow-x-scroll border-4 border-green-700">
            <picture className="w-[470px]">
              <img src={largeImage} alt="" width="470" />
            </picture>
            <picture className="w-[470px]">
              <img src={largeImage} alt="" width="470" />
            </picture>
            <picture className="w-[470px]">
              <img src={largeImage} alt="" width="470" />
            </picture>
            <picture className="w-[470px]">
              <img src={largeImage} alt="" width="470" />
            </picture>
            <picture className="w-[470px]">
              <img src={largeImage} alt="" width="470" />
            </picture>
          </div>
        </div>
      </div>
      <MediaSection title="Recommended for you" />
    </>
  );
}
