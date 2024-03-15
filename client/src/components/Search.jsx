import { useEffect, useState } from 'react';
import api from '../services/api';
import GeneralMedia from './GeneralMedia';

export default function Search({ searchValue, setSearchParams }) {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    async function getData() {
      const { data } = await api.get(`/api/media?title=${searchValue}`);
      setMedia(data);
    }

    console.log('www');

    setSearchParams('search', searchValue);

    const id = setTimeout(() => {
      getData();
    }, 500);

    return () => {
      clearTimeout(id);
    };
  }, [searchValue, setSearchParams]);

  return (
    <>
      <GeneralMedia title="results" data={media} />
    </>
  );
}
