import { useContext, useState } from 'react';
import { IconCategoryMovie, IconCategoryTv, IconPlay } from '../assets';
import userService from '../services/userService';
import Image from './Image';
import { UserContext } from '../context/userProvider';
import { toast } from 'react-hot-toast';

export default function TrendingMediaCard({ media, priority }) {
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
    thumbnail: { trending },
  } = media;

  async function addBookmark() {
    try {
      setUser((user) => {
        user.bookmarks = user.bookmarks.concat(media);
        return user;
      });

      toast.success('Bookmarked!');
      setBookmarkStatus(true);
      await userService.bookmarkMedia({ mediaId: id });
    } catch (error) {
      toast.error('Something went wrong!');

      setUser((user) => {
        user.bookmarks = user.bookmarks.filter((media) => media.id !== id);
        return user;
      });
      setBookmarkStatus(false);
    }
  }

  async function removeBookmark() {
    try {
      setUser((user) => {
        user.bookmarks = user.bookmarks.filter((media) => media.id !== id);
        return user;
      });
      setBookmarkStatus(false);

      toast.success('Unbookmarked!');
      await userService.unBookmarkMedia({ mediaId: id });
    } catch (error) {
      toast.error('Something went wrong!');

      setUser((user) => {
        user.bookmarks = user.bookmarks.concat(media);
        return user;
      });
      setBookmarkStatus(true);
    }
  }

  return (
    <li className="align-content-end isolate grid w-[240px] snap-start grid-cols-1 grid-rows-1 overflow-hidden sm:w-[470px]">
      <Image
        className="-z-[1] col-start-1 row-start-1"
        title={`${title} thumbnail`}
        data={trending}
        priority={priority}
        trending
      />

      <div className="trending-card--content relative isolate col-start-1 row-start-1 before:absolute before:inset-0 before:-z-[1] before:bg-black before:opacity-0 before:transition focus-within:before:opacity-25 hover:before:opacity-25">
        <button
          onClick={bookmarkStatus ? removeBookmark : addBookmark}
          aria-label="bookmark this"
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
        <button className="play-button absolute left-[50%] top-[50%] hidden -translate-x-2/4 -translate-y-2/4 items-center gap-5 rounded-full bg-white bg-opacity-25 p-[6px] pr-5 text-base font-normal opacity-0 transition hover:scale-[1.1] focus-visible:scale-[1.1] sm:flex sm:text-lg">
          <IconPlay height="30" width="30" />
          Play
        </button>

        <div className="col-start-1 row-start-1 grid h-full content-end p-6">
          <p className="my-2 flex items-center gap-2 text-xs tracking-wide opacity-75 sm:text-base">
            <span aria-label="Year of Release">{year}</span>
            <span className="font-bold">&#183;</span>

            <span
              aria-label="Media Category"
              className="flex items-center gap-2"
            >
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

          <h3 className="text-[15px] font-medium sm:text-2xl">{title}</h3>
        </div>
      </div>
    </li>
  );
}
