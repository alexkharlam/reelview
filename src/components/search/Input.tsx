import { ChangeEvent } from 'react';
import { Search } from 'react-feather';

type Props = {
  onInput: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const Input = ({ onInput, value }: Props) => {
  return (
    <div className="relative">
      <Search className="absolute left-1.5 top-1/2 -translate-y-1/2" size={28} />
      <input
        onChange={onInput}
        value={value}
        placeholder="Search movies and tv shows..."
        className="w-full bg-gray-1400 py-2 pl-3.5 pr-3.5 font-[Roboto] text-md font-medium text-gray-500 placeholder:text-gray-700"
      />
    </div>
  );
};

export default Input;
