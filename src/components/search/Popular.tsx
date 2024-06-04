import { useQuery } from '@tanstack/react-query';
import { getPopularMovies } from '../../services/apiTmdb.ts';
import SmallColMediaList from '../ui/smallColMediaList/SmallColMediaList.tsx';
import SmallColMediaItem from '../ui/smallColMediaList/SmallColMediaItem.tsx';
import SmallLoader from '../ui/SmallLoader/index.tsx';
import { getLinkPath, getPosterSrc } from '../../helpers/mediaItemHelpers.ts';
import parseTmdbDate from '../../helpers/parseTmdbDate.ts';
import queryKeys from '../../data/queryKeys.ts';

type Props = {
  onClose: () => void;
};

const Popular = ({ onClose }: Props) => {
  const { data: popularMovies, isFetching } = useQuery({
    queryFn: getPopularMovies,
    queryKey: [queryKeys.popularMoviesList],
  });

  if (isFetching) return <SmallLoader className="bg-black" />;

  if (popularMovies) {
    const jsxItems = popularMovies.results.map((result) => {
      const posterSrc = getPosterSrc('w185', result.posterPath);
      const linkPath = getLinkPath(result.id, 'movie', result.title);
      const releaseYear = parseTmdbDate(result.releaseDate).year;

      return (
        <SmallColMediaItem
          onClick={onClose}
          posterImgSrc={posterSrc}
          title={result.title}
          key={result.id}
          linkPath={linkPath}
          mediaType="movie"
          voteAverage={result.voteAverage}
          releaseYear={releaseYear}
        />
      );
    });

    return (
      <>
        <h3 className="mt-3 px-2 text-md font-medium text-gray-800">Popular movies</h3>
        <SmallColMediaList>{jsxItems}</SmallColMediaList>
      </>
    );
  }

  return <p>Search for movies</p>;
};

export default Popular;
