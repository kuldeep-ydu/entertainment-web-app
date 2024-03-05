import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function HomeLayout() {
  return (
    <div className="grid grid-cols-[auto_1fr] relative items-start pb-8">
      <Navbar />
      <div className="pl-9">
        <Outlet />
      </div>
    </div>
  );
}
