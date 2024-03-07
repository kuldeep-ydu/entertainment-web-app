import GeneralMedia from '../components/GeneralMedia';
import TrendingMedia from '../components/TrendingMedia';

export default function Home() {
  return (
    <>
      <TrendingMedia />
      <GeneralMedia title="Recommended for you" />
    </>
  );
}
