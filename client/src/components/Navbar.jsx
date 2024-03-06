import { NavLink } from 'react-router-dom';
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
    <nav className="flex flex-col items-center py-8 px-6 bg-secondary-dark rounded-3xl md:h-[90vh] sticky top-[5vh]">
      <img src={Logo} alt="Entertainment Logo" height="32" width="32" />

      <ul className="grid justify-items-center gap-6 mt-16">
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
        src={ImageAvatar}
        alt="profile picture"
        height="40"
        width="40"
      />
    </nav>
  );
}
