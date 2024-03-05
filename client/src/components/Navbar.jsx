import { Link } from 'react-router-dom';
import {
  IconNavBookmark,
  IconNavHome,
  IconNavMovies,
  IconNavTvSeries,
  ImageAvatar,
  Logo,
} from '../assets';

export default function Navbar() {
  return (
    <nav className="flex flex-col items-center py-8 px-6 bg-secondary-dark rounded-3xl sticky inset-y-8 nav-height">
      <img src={Logo} alt="Entertainment Logo" height="32" width="32" />

      <ul className="grid justify-items-center gap-6 mt-16">
        <li>
          <Link to="." className="p-2 block hover:opacity-50 transition">
            <span className="sr-only">Home</span>
            <IconNavHome role="presentation" />
          </Link>
        </li>
        <li>
          <Link to="movies" className="p-2 block hover:opacity-50 transition">
            <span className="sr-only">Movies</span>
            <IconNavMovies role="presentation" />
          </Link>
        </li>
        <li>
          <Link to="tv-shows" className="p-2 block hover:opacity-50 transition">
            <span className="sr-only">Tv Shows</span>
            <IconNavTvSeries role="presentation" />
          </Link>
        </li>
        <li>
          <Link
            to="bookmarks"
            className="p-2 block hover:opacity-50 transition"
          >
            <span className="sr-only">Bookmarks</span>
            <IconNavBookmark role="presentation" />
          </Link>
        </li>
      </ul>

      <img
        className="mt-auto border border-white rounded-full aspect-square object-cover"
        src={ImageAvatar}
        alt="profile picture"
        height="40"
        width="40"
      />
    </nav>
  );
}
