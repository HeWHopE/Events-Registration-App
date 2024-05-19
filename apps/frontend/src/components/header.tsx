import type React from 'react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const returnClick = () => {
    navigate('/');
  };
  const navigate = useNavigate();

  return (
    <header className='flex items-center justify-between bg-black p-4 text-white'>
      <div onClick={returnClick} className='flex w-full items-center justify-center cursor-pointer'>
        Event register App
      </div>
    </header>
  );
};

export default Header;
