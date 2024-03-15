import { IconCategoryMovie, IconCategoryTv, IconPlay } from '../assets';
import Image from './Image';

export default function MediaCard({ media, priority }) {
  const {
    title,
    year,
    rating,
    category,
    thumbnail: { regular },
    isBookmarked,
  } = media;

  return (
    <li>
      <article className="isolate grid w-fit grid-cols-1 grid-rows-1">
        <Image
          className="-z-[1] col-start-1 row-start-1 overflow-hidden rounded-lg"
          data={regular}
          title={`${title} thumbnail`}
          priority={priority}
        />
        {/* <picture className="row-start-1 col-start-1 -z-[1] rounded-lg overflow-hidden">
          <source
            srcSet={regular.medium + '.jpg'}
            type="image/jpg"
            media="(min-width: 640px)"
          />
          <source
            srcSet={regular.medium + '.webp'}
            type="image/webp"
            media="(min-width: 640px)"
          />
          <source
            srcSet={regular.medium + '.avif'}
            type="image/avif"
            media="(min-width: 640px)"
          />
          <source
            srcSet={regular.medium + '.png'}
            type="image/png"
            media="(min-width: 640px)"
          />

          <source
            srcSet={regular.large + '.jpg'}
            type="image/jpg"
            media="(min-width: 768px)"
          />
          <source
            srcSet={regular.large + '.webp'}
            type="image/webp"
            media="(min-width: 768px)"
          />
          <source
            srcSet={regular.large + '.avif'}
            type="image/avif"
            media="(min-width: 768px)"
          />
          <source
            srcSet={regular.large + '.png'}
            type="image/png"
            media="(min-width: 768px)"
          />

          <source srcSet={regular.small + '.png'} type="image/png" />
          <source srcSet={regular.small + '.avif'} type="image/avif" />
          <source srcSet={regular.small + '.jpg'} type="image/jpg" />

          <img src={regular.small + '.webp'} alt={`${title} thumbnail`} />
        </picture> */}
        <div className="relative col-start-1 row-start-1 rounded-lg bg-black bg-opacity-50 opacity-0 transition focus-within:opacity-100 hover:opacity-100">
          <button className="absolute right-4 top-4 rounded-full bg-black bg-opacity-50 p-2 [&_*]:hover:fill-white">
            <svg
              width="12"
              height="14"
              xmlns="http://www.w3.org/2000/svg"
              className={`stroke-white stroke-[1.5] *:transition ${isBookmarked ? 'fill-white' : 'fill-transparent'}`}
            >
              <path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" />
            </svg>
          </button>
          <button className="text-md absolute left-[50%] top-[50%] flex -translate-x-2/4 -translate-y-2/4 items-center gap-5 rounded-full bg-white bg-opacity-25 p-[6px] pr-5 font-normal transition hover:scale-[1.1] focus-visible:scale-[1.1]">
            <IconPlay height="30" width="30" />
            Play
          </button>
        </div>
        <p className="my-2 flex items-center gap-2 text-[13px] tracking-wide opacity-75">
          <span aria-label="Year of Release">{year}</span>
          <span className="font-bold">&#183;</span>
          <span className="flex items-center gap-2" aria-label="Media Category">
            {category === 'Movie' ? (
              <>
                <IconCategoryMovie />
                Movie
              </>
            ) : (
              <>
                <IconCategoryTv />
                Tv Series
              </>
            )}
          </span>
          <span className="font-bold">&#183;</span>
          <span aria-label="Rating">{rating}</span>
        </p>
        <h3 className="text-lg font-medium">{title}</h3>
      </article>
    </li>
  );
}
