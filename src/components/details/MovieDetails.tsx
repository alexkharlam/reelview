import { useQuery } from '@tanstack/react-query';
import { getMovieDetails } from '../../services/apiTmdb.ts';
import queryKeys from '../../data/queryKeys.ts';
import { getBackdropSrc, getGenresText, getPosterSrc } from '../../helpers/mediaItemHelpers.ts';
import parseTmdbDate from '../../helpers/parseTmdbDate.ts';
import HeadingTertiary from '../ui/headings/HeadingTertiary.tsx';
import MediaDetailedInfo from '../ui/MediaDetailedInfo.tsx';
import MediaDetailedImages from '../ui/MediaDetailedImages.tsx';
import MediaTitleSection from '../ui/MediaTitleSection.tsx';
import DetailedOverviewSection from '../ui/DetailedOverviewSection.tsx';

type Props = {
  id: number;
};

const MovieDetails = ({ id }: Props) => {
  const { data: movie, isError } = useQuery({
    queryFn: () => getMovieDetails(id),
    queryKey: [`${queryKeys.movieDetails}-${id}`],
  });

  if (isError || !movie) return <p>Error</p>;

  const posterImgSrc = getPosterSrc('w342', movie?.posterPath);
  const backdropImgSrc = getBackdropSrc('w1280', movie?.backdropPath);
  const releaseYear = parseTmdbDate(movie.releaseDate).year;
  const genresText = getGenresText(movie.genres);

  return (
    <div className="lg:mt-4.5 lg:px-4.5">
      <MediaDetailedImages
        posterSrc={posterImgSrc}
        posterAlt={movie.originalTitle}
        backdropSrc={backdropImgSrc}
        backdropAlt={movie.originalTitle}
      />
      <MediaTitleSection
        mainText={movie.originalTitle}
        additionalText={`${releaseYear}, ${genresText}, ${movie.runtime} mins`}
        tagline={movie.tagline}
      />
      <div className="mb-3 h-1 bg-primary" />
      {movie.overview && <DetailedOverviewSection text={movie.overview} />}
      <section className="flex flex-col gap-2 px-2">
        <HeadingTertiary>Details</HeadingTertiary>
        {movie.status && <MediaDetailedInfo title="Status" body={movie.status} />}
        {movie.budget && <MediaDetailedInfo title="Budget" body={`${movie.budget} $`} />}
        {movie.revenue && <MediaDetailedInfo title="Revenue" body={`${movie.revenue} $`} />}
        {movie.voteAverage && (
          <MediaDetailedInfo title="Average vote" body={`${movie.voteAverage} $`} />
        )}
      </section>
    </div>
  );
};

export default MovieDetails;
