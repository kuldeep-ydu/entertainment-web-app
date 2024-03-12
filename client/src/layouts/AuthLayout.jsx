import { Navigate, Outlet } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { useContext } from 'react';
import { UserContext } from '../context/userProvider';

export default function AuthLayout() {
  const { user } = useContext(UserContext);

  return !user ? (
    <div className="grid justify-items-center content-start py-1 pt-8">
      <img src={logo} alt="app logo" className="block max-w-full mt-8 mb-16" />
      <Outlet />
    </div>
  ) : (
    <Navigate to="/" replace />
  );
}
