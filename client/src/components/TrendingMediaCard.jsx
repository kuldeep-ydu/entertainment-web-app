import { IconCategoryMovie, IconPlay } from '../assets';
import smallImage from '../assets/thumbnails/beyond-earth/trending/small.jpg';
import largeImage from '../assets/thumbnails/beyond-earth/trending/large.jpg';

export default function TrendingMediaCard() {
  return (
    <li className="grid grid-cols-1 grid-rows-1 align-content-end w-[470px] isolate">
      <picture className="row-start-1 col-start-1 -z-[1] rounded-lg">
        <source srcSet={largeImage} media="(min-width: 768px)" />

        <img
          src={smallImage}
          alt=""
          className="block w-full"
          height="230"
          width="470"
        />
      </picture>

      <div className="row-start-1 col-start-1 bg-black bg-opacity-50 opacity-0 hover:opacity-100 focus-within:opacity-100 transition relative z-10">
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
        <button className="p-[6px] pr-5 text-md font-normal flex items-center gap-5 bg-white bg-opacity-25 rounded-full absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4">
          <IconPlay height="30" width="30" />
          Play
        </button>

        <div className="row-start-1 col-start-1 grid content-end p-6">
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
