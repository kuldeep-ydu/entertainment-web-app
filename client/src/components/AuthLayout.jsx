import { Outlet } from 'react-router-dom';
import logo from '../assets/logo.svg';

export default function AuthLayout() {
  return (
    <div className="grid justify-items-center content-start">
      <img src={logo} alt="app logo" className="block max-w-full my-16" />
      <Outlet />
    </div>
  );
}
