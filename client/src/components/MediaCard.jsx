import { useContext, useState } from 'react';
import { IconCategoryMovie, IconCategoryTv, IconPlay } from '../assets';
import { UserContext } from '../context/userProvider';
import Image from './Image';
import { toast } from 'react-hot-toast';
import userService from '../services/userService';

export default function MediaCard({ media, priority }) {
  const { user, setUser } = useContext(UserContext);
  const [bookmarkStatus, setBookmarkStatus] = useState(
    user.bookmarks.includes(media.id),
  );

  const {
    id,
    title,
    year,
    rating,
    category,
    thumbnail: { regular },
  } = media;

  async function addBookmark() {
    try {
      setBookmarkStatus(true);
      setUser((user) => {
        user.bookmarks = user.bookmarks.concat(id);
        return user;
      });

      toast.success('Bookmarked!');
      await userService.bookmarkMedia({ mediaId: id });
    } catch (error) {
      toast.error('Something went wrong!');
      setBookmarkStatus(false);

      setUser((user) => {
        user.bookmarks = user.bookmarks.filter((mediaId) => mediaId !== id);
        return user;
      });
    }
  }

  async function removeBookmark() {
    try {
      setBookmarkStatus(false);
      setUser((user) => {
        user.bookmarks = user.bookmarks.filter((mediaId) => mediaId !== id);
        return user;
      });

      toast.success('Unbookmarked!');
      await userService.unBookmarkMedia({ mediaId: id });
    } catch (error) {
      toast.error('Something went wrong!');
      setBookmarkStatus(true);

      setUser((user) => {
        user.bookmarks = user.bookmarks.concat(media);
        return user;
      });
    }
  }

  return (
    <li>
      <article className="isolate grid w-fit grid-cols-1 grid-rows-1">
        <Image
          className="-z-[1] col-start-1 row-start-1 overflow-hidden rounded-lg"
          data={regular}
          title={`${title} thumbnail`}
          priority={priority}
        />

        <div className="relative col-start-1 row-start-1 rounded-lg bg-black bg-opacity-50 opacity-0 transition focus-within:opacity-100 hover:opacity-100">
          <button
            onClick={bookmarkStatus ? removeBookmark : addBookmark}
            className="absolute right-4 top-4 rounded-full bg-black bg-opacity-50 p-2"
          >
            <svg
              width="12"
              height="14"
              xmlns="http://www.w3.org/2000/svg"
              className={`stroke-white stroke-[1.5] *:transition ${bookmarkStatus ? 'fill-white' : 'fill-transparent'}`}
            >
              <path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" />
            </svg>
          </button>
          <button className="text-md absolute left-[50%] top-[50%] flex -translate-x-2/4 -translate-y-2/4 items-center gap-5 rounded-full bg-white bg-opacity-25 p-[6px] xs:pr-5 font-normal transition hover:scale-[1.1] focus-visible:scale-[1.1]">
            <IconPlay height="30" width="30" />
            <span className="hidden xs:flex">Play</span>
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
