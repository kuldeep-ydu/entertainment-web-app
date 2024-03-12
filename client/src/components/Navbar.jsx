import { NavLink } from 'react-router-dom';
import {
  IconNavBookmark,
  IconNavHome,
  IconNavMovies,
  IconNavTvSeries,
  Logo,
} from '../assets';

export default function Navbar({ avatar }) {
  return (
    <nav className="flex md:flex-col justify-between items-center py-4 md:py-8 px-6 sm:mx-6 mt-0 sm:mt-6 bg-secondary-dark sm:rounded-lg md:rounded-3xl md:h-[90vh] sticky top-0 sm:top-6 z-50">
      <img src={Logo} alt="Entertainment Logo" height="32" width="32" />

      <ul className="grid grid-flow-col md:grid-flow-row justify-items-center gap-6 md:mt-16">
        <li>
          <NavLink
            to="."
            end
            className={({ isActive }) =>
              `p-2 block ${isActive ? '' : 'text-secondary-light hover:text-accent'} transition`
            }
          >
            <span className="sr-only">Home</span>
            <IconNavHome role="presentation" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="movies"
            className={({ isActive }) =>
              `p-2 block ${isActive ? '' : 'text-secondary-light hover:text-accent'} transition`
            }
          >
            <span className="sr-only">Movies</span>
            <IconNavMovies role="presentation" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="tv-shows"
            className={({ isActive }) =>
              `p-2 block ${isActive ? '' : 'text-secondary-light hover:text-accent'} transition`
            }
          >
            <span className="sr-only">Tv Shows</span>
            <IconNavTvSeries role="presentation" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="bookmarks"
            className={({ isActive }) =>
              `p-2 block ${isActive ? '' : 'text-secondary-light hover:text-accent'} transition`
            }
          >
            <span className="sr-only">Bookmarks</span>
            <IconNavBookmark role="presentation" />
          </NavLink>
        </li>
      </ul>

      <img
        className="mt-auto border border-white rounded-full aspect-square object-cover"
        src={avatar}
        alt="profile picture"
        height="40"
        width="40"
      />
    </nav>
  );
}
