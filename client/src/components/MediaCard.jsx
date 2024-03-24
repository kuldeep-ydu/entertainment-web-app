import { useCallback, useContext, useState } from 'react';
import { IconCategoryMovie, IconCategoryTv, IconPlay } from '../assets';
import { UserContext } from '../context/userProvider';
import Image from './Image';
import { toast } from 'react-hot-toast';
import userService from '../services/userService';
import { Link } from 'react-router-dom';

export default function MediaCard({ media, priority, variant = 'regular' }) {
  const { user, setUser } = useContext(UserContext);
  const [bookmarkStatus, setBookmarkStatus] = useState(
    user.bookmarks.includes(media.id),
  );

  const { id, title, year, rating, category, thumbnail } = media;

  const addBookmark = useCallback(async () => {
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
  }, [id, setUser]);

  const removeBookmark = useCallback(async () => {
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
        user.bookmarks = user.bookmarks.concat(id);
        return user;
      });
    }
  }, [id, setUser]);

  return (
    <li>
      <article
        className={`${variant === 'regular' ? 'align-content-end w-fit' : 'snap-start overflow-hidden sm:w-[470px] w-[240px]'} isolate grid grid-cols-1 grid-rows-1`}
      >
        <Image
          className={`${variant === 'regular' ? 'overflow-hidden rounded-lg' : ''} -z-[1] col-start-1 row-start-1`}
          data={variant === 'regular' ? thumbnail.regular : thumbnail.trending}
          title={`${title} thumbnail`}
          priority={priority}
          trending={variant === 'trending'}
        />

        <div
          className={`${
            variant === 'regular'
              ? 'rounded-lg bg-black bg-opacity-50 opacity-0 transition focus-within:opacity-100 hover:opacity-100'
              : 'trending-card--content isolate before:absolute before:inset-0 before:-z-[1] before:bg-black before:opacity-0 before:transition focus-within:before:opacity-25 hover:before:opacity-25'
          } 
          relative col-start-1 row-start-1`}
        >
          <BookmarkButton
            onClick={bookmarkStatus ? removeBookmark : addBookmark}
            filled={bookmarkStatus}
            label={bookmarkStatus ? 'remove bookmark' : 'add bookmark'}
          />
          <Link
            to={`/playing/${id}`}
            className={`${variant === 'regular' ? 'text-md flex xs:pr-5' : 'text-base hidden pr-5 opacity-0 sm:flex sm:text-lg'} play-button absolute left-[50%] top-[50%] -translate-x-2/4 -translate-y-2/4 items-center gap-5 rounded-full bg-white bg-opacity-25 p-[6px] font-normal transition hover:scale-[1.1] focus-visible:scale-[1.1]`}
          >
            <IconPlay height="30" width="30" />
            <span className={variant === 'regular' ? 'hidden xs:flex' : ''}>
              Play
            </span>
          </Link>
          {variant === 'trending' && (
            <CardDetails
              variant={variant}
              title={title}
              rating={rating}
              year={year}
              category={category}
            />
          )}
        </div>
        {variant === 'regular' && (
          <CardDetails
            variant={variant}
            title={title}
            rating={rating}
            year={year}
            category={category}
          />
        )}
      </article>
    </li>
  );
}

function BookmarkButton({ onClick, label, filled }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="absolute right-4 top-4 rounded-full bg-black bg-opacity-50 p-2"
    >
      <svg
        width="12"
        height="14"
        xmlns="http://www.w3.org/2000/svg"
        className={`stroke-white stroke-[1.5] *:transition ${filled ? 'fill-white' : 'fill-transparent'}`}
      >
        <path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" />
      </svg>
    </button>
  );
}

function CardDetails({ variant, title, year, category, rating }) {
  return (
    <div
      className={
        variant === 'trending'
          ? 'col-start-1 row-start-1 grid h-full content-end p-6'
          : ''
      }
    >
      <p
        className={`${variant === 'regular' ? 'text-[13px]' : 'text-xs sm:text-base'} my-2 flex items-center gap-2 tracking-wide opacity-75`}
      >
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
      <h3
        className={`${variant === 'regular' ? 'text-lg' : 'text-[15px] sm:text-2xl'} font-medium`}
      >
        {title}
      </h3>
    </div>
  );
}
