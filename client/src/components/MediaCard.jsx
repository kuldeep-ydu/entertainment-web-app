import { IconCategoryMovie } from '../assets';
import image from '../assets/thumbnails/undiscovered-cities/regular/large.jpg';

export default function MediaCard() {
  return (
    <li>
      <div className="grid grid-cols-1 grid-rows-1 w-fit">
        <img
          src={image}
          alt=""
          className="rounded-lg row-start-1 col-start-1 z-10"
        />
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
      </div>
    </li>
  );
}
