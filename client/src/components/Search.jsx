import GeneralMedia from './GeneralMedia';

export default function Search({ media }) {
  return (
    <>
      <GeneralMedia title="results" data={media} />
    </>
  );
}
