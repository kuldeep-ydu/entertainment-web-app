import { NavLink } from 'react-router-dom';
import { Logo } from '../assets';
import { navLinks } from '../constants';
import UserMenu from './UserMenu';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 mt-0 flex items-center justify-between bg-secondary-dark px-6 py-4 sm:top-8 sm:mx-6 sm:mt-6 sm:rounded-lg md:h-[90vh] md:flex-col md:rounded-3xl md:py-8">
      <img src={Logo} alt="Entertainment Logo" height="32" width="32" />

      <ul className="grid grid-flow-col justify-items-center gap-4 sm:gap-6 md:mt-16 md:grid-flow-row">
        {navLinks.map(({ title, to, Icon }, index) => (
          <NavLink
            key={title}
            to={to}
            end={index === 0}
            className={({ isActive }) =>
              `block p-2 ${isActive ? '' : 'text-secondary-light hover:text-accent'} transition`
            }
          >
            <span className="sr-only">{title}</span>
            <Icon role="presentation" />
          </NavLink>
        ))}
      </ul>

      <UserMenu />
    </nav>
  );
}
