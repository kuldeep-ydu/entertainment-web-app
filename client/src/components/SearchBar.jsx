import { IconSearch } from '../assets';

export default function SearchBar({ searchValue, setSearchValue }) {
  return (
    <div className="mb-6 ml-4 mt-6 flex items-center gap-5 pr-6 text-base sm:text-2xl">
      <label htmlFor="search-bar">
        <span className="sr-only">Search movies and tv shows</span>
        <IconSearch height="32" width="32" />
      </label>

      <input
        onChange={({ target }) => setSearchValue(target.value)}
        value={searchValue}
        id="search-bar"
        type="text"
        placeholder="Search for movies or TV series"
        className="w-full border-b-[1px] border-transparent bg-inherit py-3 caret-accent outline-0 transition focus-visible:border-secondary-light"
      />
    </div>
  );
}
