import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import SearchBar from './SearchBar';

export default function HomeLayout() {
  return (
    <div className="grid grid-cols-[auto_1fr] relative items-start pb-8">
      <Navbar />
      <main className="pl-9">
        <SearchBar />
        <Outlet />
      </main>
    </div>
  );
}
