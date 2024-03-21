import { useEffect, useState } from 'react';
import mediaService from '../services/mediaService';
import { useSearchParams } from 'react-router-dom';

function useMediaSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(searchParams.get('search'));
  const [media, setMedia] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await mediaService.searchMedia(searchValue);
      setMedia(data);
    }

    setSearchParams(searchValue ? { search: searchValue } : {});

    const id = setTimeout(() => {
      getData();
    }, 500);

    return () => {
      clearTimeout(id);
    };
  }, [searchValue, setSearchParams]);

  return { searchParams, setSearchParams, searchValue, setSearchValue, media };
}

export default useMediaSearch;
