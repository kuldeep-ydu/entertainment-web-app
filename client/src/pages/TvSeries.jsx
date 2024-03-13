import GeneralMedia from '../components/GeneralMedia';
import { useLoaderData } from 'react-router-dom';
import mediaService from '../services/mediaService';

export async function loader() {
  const data = await mediaService.getTvSeries();
  return data;
}

export default function TvSeries() {
  const tvSeries = useLoaderData();
  return <GeneralMedia title="TV Series" data={tvSeries} />;
}
