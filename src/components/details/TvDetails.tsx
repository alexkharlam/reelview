import { useQuery } from '@tanstack/react-query';
import { getTvShowDetails } from '../../services/apiTmdb.ts';
import queryKeys from '../../data/queryKeys.ts';
import MediaDetailedImages from '../ui/MediaDetailedImages.tsx';
import MediaTitleSection from '../ui/MediaTitleSection.tsx';
import DetailedOverviewSection from '../ui/DetailedOverviewSection.tsx';
import MediaDetailedInfo from '../ui/MediaDetailedInfo.tsx';
import HeadingTertiary from '../ui/headings/HeadingTertiary.tsx';
import { getBackdropSrc, getGenresText, getPosterSrc } from '../../helpers/mediaItemHelpers.ts';
import parseTmdbDate from '../../helpers/parseTmdbDate.ts';

type Props = {
  id: number;
};

const TvDetails = ({ id }: Props) => {
  const { data: tv, isError } = useQuery({
    queryFn: () => getTvShowDetails(id),
    queryKey: [`${queryKeys.tvDetails}-${id}`],
  });

  if (isError || !tv) return <p>Error</p>;

  const posterImgSrc = getPosterSrc('w342', tv.posterPath);
  const backdropImgSrc = getBackdropSrc('w1280', tv.backdropPath);
  const releaseYear = parseTmdbDate(tv.firstAirDate).year;
  const genresText = getGenresText(tv.genres);

  return (
    <div className="lg:mt-4.5 lg:px-4.5">
      <MediaDetailedImages
        posterSrc={posterImgSrc}
        posterAlt={tv.originalName}
        backdropSrc={backdropImgSrc}
        backdropAlt={tv.originalName}
      />
      <MediaTitleSection
        mainText={tv.originalName}
        additionalText={`${releaseYear}, ${genresText}, ${tv.episodeRunTime} mins`}
        tagline={tv.tagline}
      />
      <div className="mb-3 h-1 bg-primary" />
      {tv.overview && <DetailedOverviewSection text={tv.overview} />}
      <section className="flex flex-col gap-2 px-2">
        <HeadingTertiary>Details</HeadingTertiary>
        {tv.status && <MediaDetailedInfo title="Status" body={tv.status} />}
        {tv.numberOfSeasons && <MediaDetailedInfo title="Seasons" body={tv.numberOfSeasons} />}
        {tv.voteAverage && <MediaDetailedInfo title="Average vote" body={tv.voteAverage} />}
      </section>
    </div>
  );
};

export default TvDetails;
