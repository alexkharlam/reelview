import Input from './Input.tsx';
import ResultList from './ResultList.tsx';
import SmallLoader from '../ui/SmallLoader/index.tsx';
import useInput from '../../hooks/useInput.ts';
import useSearch from './useSearch.tsx';
import Popular from './Popular.tsx';

type Props = {
  onClose: () => void;
};

const SearchWindow = ({ onClose }: Props) => {
  const { value, handleInput } = useInput();
  const { isFetching, searchData } = useSearch(value);

  return (
    <div className="flex h-screen flex-col">
      <Input onInput={handleInput} value={value} />
      <div className="h-full overflow-y-scroll bg-white">
        {isFetching && <SmallLoader className="mt-3 bg-black" />}
        {searchData && searchData.results.length > 0 && (
          <ResultList onClose={onClose} searchData={searchData} />
        )}
        {!searchData && !isFetching && !value && <Popular onClose={onClose} />}
        {searchData && searchData.results.length === 0 && (
          <p className="my-3 text-center text-sm text-gray-800">
            Can&apos;t find anything. Try again!
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchWindow;
