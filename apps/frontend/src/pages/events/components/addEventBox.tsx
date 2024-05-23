import { BsPlus } from 'react-icons/bs';

const AddEventBox = () => {
  return (
    <div
      className='hover:bg-slate-100 cursor-pointer rounded-sm h-full min-h-24
    border-dashed border-2 border-gray-400 p-3 max-w-full sm:max-w-sm lg:max-w-md xl:max-w-lg flex items-center justify-center'
    >
      <BsPlus className='text-4xl text-gray-500' />
    </div>
  );
};

export default AddEventBox;
