import { useQuery } from '@tanstack/react-query';
import { getPopularMovies } from '../services/apiTmdb.ts';
import queryKeys from '../data/queryKeys.ts';
import SmallLoader from './ui/SmallLoader/index.tsx';
import { getLinkPath, getPosterSrc } from '../helpers/mediaItemHelpers.ts';
import SliderMediaItem from './ui/sliderMediaList/SliderMediaItem.tsx';
import SliderMediaList from './ui/sliderMediaList/SliderMediaList.tsx';
import parseTmdbDate from '../helpers/parseTmdbDate.ts';

type Props = {
  className?: string;
};

const PopularMovies = ({ className = '' }: Props) => {
  const {
    data: popularMovies,
    isFetching,
    isError,
  } = useQuery({
    queryFn: getPopularMovies,
    queryKey: [queryKeys.popularMoviesList],
  });

  if (isFetching) return <SmallLoader />;
  if (isError) return <p>error loading data</p>;

  if (!popularMovies) return <p>No popular movies found</p>;

  const itemsJsx = popularMovies.results.map((result) => {
    const posterSrc = getPosterSrc('w500', result.posterPath);
    const linkPath = getLinkPath(result.id, 'movie', result.title);
    const releaseYear = parseTmdbDate(result.releaseDate).year;

    return (
      <SliderMediaItem
        year={releaseYear}
        linkPath={linkPath}
        title={result.title}
        voteAverage={result.voteAverage}
        key={result.id}
        posterImgSrc={posterSrc}
      />
    );
  });

  return <SliderMediaList className={className}>{itemsJsx}</SliderMediaList>;
};

export default PopularMovies;
