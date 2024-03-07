import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import SearchBar from './SearchBar';

export default function HomeLayout() {
  return (
    <div className="grid grid-cols-[auto_1fr] pb-8 pl-6">
      <Navbar />
      <main className="pl-9 min-w-0">
        <SearchBar />
        <Outlet />
      </main>
    </div>
  );
}
