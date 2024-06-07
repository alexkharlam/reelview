import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-2">
      <span>Something wrong. Maybe this page doesn&apos;t exist?</span>
      <Link className="text-white hover:underline" to="/">
        Home page
      </Link>
    </div>
  );
};

export default Error;
