import { useParams, useLocation } from 'react-router-dom';
import MovieDetails from '../components/details/MovieDetails.tsx';
import TvDetails from '../components/details/TvDetails.tsx';

const Details = () => {
  const { idSlug } = useParams();
  const location = useLocation();
  const mediaType = location.pathname.split('/')[1];
  const id = Number(idSlug?.split('-')[0]);

  if (mediaType === 'movie') return <MovieDetails id={id} />;

  if (mediaType === 'tv') return <TvDetails id={id} />;

  return <div>Unknown media type</div>;
};

export default Details;
