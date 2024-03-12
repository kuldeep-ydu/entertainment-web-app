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
    <div className="grid md:grid-cols-[auto_1fr] pb-8">
      <Navbar avatar={user.avatar} />

      <main className="min-w-0">
        <SearchBar />
        <Outlet />
      </main>
    </div>
  );
}
