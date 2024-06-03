import { ChangeEvent, useState } from 'react';

const useInput = () => {
  const [value, setValue] = useState('');

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return { handleInput, value };
};

export default useInput;
