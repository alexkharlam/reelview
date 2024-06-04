import { SearchMulti } from '../../types/apiTmdb.ts';
import SmallColMediaList from '../ui/smallColMediaList/SmallColMediaList.tsx';
import ResultItem from './ResultItem.tsx';

type Props = {
  searchData: SearchMulti;
  onClose: () => void;
};

const ResultList = ({ searchData, onClose }: Props) => {
  const filteredSearchResults = searchData.results.filter(
    (res) => res.mediaType === 'tv' || res.mediaType === 'movie',
  );

  return (
    <SmallColMediaList>
      {filteredSearchResults.map((item) => (
        <ResultItem onClose={onClose} key={item.id} searchResult={item} />
      ))}
    </SmallColMediaList>
  );
};

export default ResultList;
