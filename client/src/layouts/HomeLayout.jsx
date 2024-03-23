import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import { useContext } from 'react';
import { UserContext } from '../context/userProvider';
import Search from '../components/Search';
import useMediaSearch from '../hooks/useMediaSearch';

export default function HomeLayout() {
  const { searchParams, setSearchParams, searchValue, setSearchValue, media } =
    useMediaSearch();
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (searchParams) {
    <Navigate to="/search-media" />;
  }

  return (
    <div className="grid pb-8 content-start md:grid-cols-[auto_1fr]">
      <Navbar />

      <main className="min-w-0 relative">
        <SearchBar
          searchParams={searchParams}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

        {searchValue ? (
          <Search
            searchValue={searchValue}
            setSearchParams={setSearchParams}
            media={media}
          />
        ) : (
          <Outlet />
        )}
      </main>
    </div>
  );
}
