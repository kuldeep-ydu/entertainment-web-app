import { IconCategoryMovie, IconPlay } from '../assets';
import smallImage from '../assets/thumbnails/beyond-earth/trending/small.jpg';
import largeImage from '../assets/thumbnails/beyond-earth/trending/large.jpg';

export default function TrendingMediaCard() {
  return (
    <li className="grid grid-cols-1 grid-rows-1 align-content-end w-[470px] isolate min-w-[470px] snap-start">
      <picture className="row-start-1 col-start-1 -z-[1]">
        <source srcSet={largeImage} media="(min-width: 768px)" />

        <img
          src={smallImage}
          alt=""
          className="block w-full rounded-lg"
          height="230"
          width="470"
        />
      </picture>

      <div className="trending-card--content row-start-1 col-start-1 relative isolate before:absolute before:inset-0 before:bg-black before:opacity-0 hover:before:opacity-25 focus-within:before:opacity-25 before:transition before:-z-[1]">
        <button className="absolute top-4 right-4 p-2 bg-black bg-opacity-50 rounded-full [&_*]:hover:fill-white">
          <svg
            width="12"
            height="14"
            xmlns="http://www.w3.org/2000/svg"
            className="*:transition stroke-[1.5] stroke-white fill-transparent"
          >
            <path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" />
          </svg>
        </button>
        <button className="play-button p-[6px] pr-5 text-md font-normal flex items-center gap-5 opacity-0 hover:scale-[1.1] focus-visible:scale-[1.1] transition bg-white bg-opacity-25 rounded-full absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4">
          <IconPlay height="30" width="30" />
          Play
        </button>

        <div className="row-start-1 col-start-1 grid content-end p-6 h-full">
          <p className="flex items-center gap-2 opacity-75 text-base tracking-wide my-2">
            <span>2019</span>
            <span className="font-bold">&#183;</span>

            <span className="flex gap-2 items-center">
              <IconCategoryMovie />
              Movie
            </span>
            <span className="font-bold">&#183;</span>

            <span>PG</span>
          </p>

          <h3 className="font-medium text-2xl">The Great Lands</h3>
        </div>
      </div>
    </li>
  );
}
