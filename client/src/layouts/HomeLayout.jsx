import { Navigate, Outlet, useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import { useContext, useState } from 'react';
import { UserContext } from '../context/userProvider';
import Search from '../components/Search';

export default function HomeLayout() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    searchParams.get('search') || '',
  );
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (searchParams) {
    <Navigate to="/search-media" />;
  }

  return (
    <div className="grid pb-8 md:grid-cols-[auto_1fr]">
      <Navbar />

      <main className="min-w-0">
        <SearchBar
          searchParams={searchParams}
          setSearchValue={setSearchValue}
        />

        {searchValue ? (
          <Search searchValue={searchValue} setSearchParams={setSearchParams} />
        ) : (
          <Outlet />
        )}
      </main>
    </div>
  );
}
