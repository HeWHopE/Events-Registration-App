import type React from 'react';

type SortOptionsProps = {
  sortOption: string;
  onSortChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SortOptions: React.FC<SortOptionsProps> = ({ sortOption, onSortChange }) => {
  return (
    <select id='sort' value={sortOption} onChange={onSortChange} className='border rounded-md p-2 border-black'>
      <option value='date'>Date</option>
      <option value='title'>Title</option>
      <option value='organizer'>Organizer</option>
    </select>
  );
};

export default SortOptions;
