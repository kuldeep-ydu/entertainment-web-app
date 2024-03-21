import { useContext, useEffect, useRef, useState } from 'react';
import { UserContext } from '../context/userProvider';
import { toast } from 'react-hot-toast';
import authService from '../services/authService';

export default function UserMenu() {
  const { user } = useContext(UserContext);
  const [menuHidden, setMenuHidden] = useState(true);
  const menuRef = useRef();
  const { setUser } = useContext(UserContext);
  const [loaded, setLoaded] = useState(false);

  const logout = async () => {
    const toastId = toast.loading('Logging out ...');

    try {
      await authService.logout();
      setUser(null);
      toast.dismiss(toastId);
      toast.success('Logged out successfully');
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    function handleClick(event) {
      if (!menuRef.current.contains(event.target)) {
        setMenuHidden(true);
      }
    }
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <div className="relative mt-auto" ref={menuRef}>
      <button
        aria-label="toggle user menu"
        aria-controls="user-menu"
        aria-expanded={!menuHidden}
        onClick={() => setMenuHidden((prev) => !prev)}
        className={`aspect-square overflow-hidden rounded-full border relative before:absolute before:inset-0 before:bg-secondary-dark before:z-50 before:transition before:${loaded ? 'opacity-0' : 'opacity-100'} transition ${menuHidden ? 'border-white' : 'border-accent'} hover:border-accent focus-visible:border-accent`}
      >
        <img
          className="h-full object-cover"
          src={user.avatar}
          alt="profile picture"
          height="40"
          width="40"
          onLoad={() => setLoaded(true)}
        />
      </button>

      <ul
        role="list"
        id="user-menu"
        aria-hidden={menuHidden}
        className="aria-hidden:opacity-0 opacity-100 w-44 absolute right-0 sm:-right-6 md:right-0 md:top-auto md:left-0 md:-translate-y-12 md:translate-x-24 aria-hidden:scale-90 scale-100 translate-y-10 rounded-lg bg-secondary-dark p-1 text-accent transition ease-in-out"
      >
        <li>
          <button
            onClick={logout}
            className="w-full rounded-[4px] py-2 transition hover:bg-primary focus-visible:bg-primary"
          >
            Log out
          </button>
        </li>
      </ul>
    </div>
  );
}
