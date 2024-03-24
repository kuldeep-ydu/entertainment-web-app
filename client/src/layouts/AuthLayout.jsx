import { Navigate, Outlet } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { useContext } from 'react';
import { UserContext } from '../context/userProvider';

export default function AuthLayout() {
  const { user } = useContext(UserContext);

  return !user ? (
    <div className="grid place-items-center content-center gap-16 p-3">
      <img src={logo} alt="app logo" className="block max-w-full" />
      <Outlet />
    </div>
  ) : (
    <Navigate to="/" replace />
  );
}
