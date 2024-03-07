import { IconSearch } from '../assets';

export default function SearchBar() {
  return (
    <div className="mb-6 pr-6 flex gap-5 text-2xl items-center">
      <label htmlFor="search-bar">
        <span className="sr-only">Search movies and tv shows</span>
        <IconSearch height="32" width="32" />
      </label>
      <input
        id="search-bar"
        type="text"
        placeholder="Search for movies or TV series"
        className="w-full bg-inherit outline-0 py-3 caret-accent border-b-[1px] border-transparent focus-visible:border-secondary-light transition"
      />
    </div>
  );
}
