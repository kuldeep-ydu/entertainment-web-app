import { Navigate, Outlet } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { useContext } from 'react';
import { UserContext } from '../context/userProvider';

export default function AuthLayout() {
  const { user } = useContext(UserContext);

  return !user ? (
    <div className="grid content-start justify-items-center py-1 pt-8">
      <img src={logo} alt="app logo" className="mb-16 mt-8 block max-w-full" />
      <Outlet />
    </div>
  ) : (
    <Navigate to="/" replace />
  );
}
