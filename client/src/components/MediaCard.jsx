import { IconCategoryMovie, IconPlay } from '../assets';
import smallImage from '../assets/thumbnails/undiscovered-cities/regular/small.jpg';
import mediumImage from '../assets/thumbnails/undiscovered-cities/regular/medium.jpg';
import largeImage from '../assets/thumbnails/undiscovered-cities/regular/large.jpg';

export default function MediaCard() {
  return (
    <li className="grid grid-cols-1 grid-rows-1 w-fit isolate">
      <picture className="row-start-1 col-start-1 -z-[1] rounded-lg overflow-hidden">
        <source srcSet={mediumImage} media="(min-width: 640px)" />
        <source srcSet={largeImage} media="(min-width: 768px)" />

        <img src={smallImage} alt="" />
      </picture>

      <div className="row-start-1 col-start-1 bg-black bg-opacity-50 opacity-0 hover:opacity-100 focus-within:opacity-100 transition relative">
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
      </div>

      <p className="flex items-center gap-2 opacity-75 text-[13px] tracking-wide my-2">
        <span>2019</span>
        <span className="font-bold">&#183;</span>

        <span className="flex gap-2 items-center">
          <IconCategoryMovie />
          Movie
        </span>
        <span className="font-bold">&#183;</span>

        <span>PG</span>
      </p>

      <h3 className="font-medium text-lg">The Great Lands</h3>
    </li>
  );
}
