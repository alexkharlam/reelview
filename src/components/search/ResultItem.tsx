import { SearchMultiResult } from '../../types/apiTmdb.ts';
import parseTmdbDate from '../../helpers/parseTmdbDate.ts';
import { getPosterSrc, getLinkPath } from '../../helpers/mediaItemHelpers.ts';
import SmallColMediaItem from '../ui/smallColMediaList/SmallColMediaItem.tsx';

type Props = {
  searchResult: SearchMultiResult;
  onClose: () => void;
};

const ResultItem = ({ searchResult, onClose }: Props) => {
  const {
    posterPath,
    originalName,
    originalTitle,
    voteAverage,
    mediaType,
    firstAirDate,
    releaseDate,
    id,
  } = searchResult;

  const imgSrc = getPosterSrc('w185', posterPath);
  const title = originalName || originalTitle || '';
  const releaseYear = parseTmdbDate(firstAirDate || releaseDate).year;
  const linkPath = getLinkPath(id, mediaType, title);

  return (
    <SmallColMediaItem
      linkPath={linkPath}
      mediaType={mediaType}
      onClick={onClose}
      posterImgSrc={imgSrc}
      releaseYear={releaseYear}
      title={title}
      voteAverage={voteAverage || 0}
    />
  );
};

export default ResultItem;
