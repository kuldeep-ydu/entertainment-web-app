import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import { useContext } from 'react';
import { UserContext } from '../context/userProvider';

export default function HomeLayout() {
  const { user } = useContext(UserContext);

  return !user ? (
    <Navigate to="/login" replace />
  ) : (
    <div className="grid grid-cols-[auto_1fr] pb-8 pl-6">
      <Navbar avatar={user.avatar} />

      <main className="pl-9 min-w-0">
        <SearchBar />
        <Outlet />
      </main>
    </div>
  );
}
