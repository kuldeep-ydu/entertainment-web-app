import { Link } from 'react-router-dom';
import { NotFoundSvg } from '../assets';

export default function NotFound() {
  return (
    <div className="min-h-screen grid gap-3 place-items-center">
      <article className="grid place-items-center">
        <img
          src={NotFoundSvg}
          alt="404 error illustration"
          height="100"
          width="500"
        />
        <p className="text-2xl mt-1">Page not found</p>

        <Link
          to=".."
          className="text-md bg-accent rounded-lg px-5 py-2 mt-5 block"
        >
          Go Back
        </Link>
      </article>
    </div>
  );
}
