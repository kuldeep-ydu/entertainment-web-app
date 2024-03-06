import { Outlet } from 'react-router-dom';
import logo from '../assets/logo.svg';

export default function AuthLayout() {
  return (
    <div className="grid justify-items-center content-start py-1">
      <img src={logo} alt="app logo" className="block max-w-full mt-8 mb-16" />
      <Outlet />
    </div>
  );
}
