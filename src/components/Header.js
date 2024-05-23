import React, { useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import logoImage from './hey1.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  let Links = [
    { name: "ABOUT AICTE", sectionId: "about" },
    { name: "FAQs", sectionId: "FAQs" },
    { name: "RESOURCES", sectionId: "resources" },
  ];

  let [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/loginPage');
  };

  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-50'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7' style={{ backgroundColor: '#f1efed' }}>
        {/* logo section */}
        <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
          <img src={logoImage} alt="Logo" className='w-55 h-16' />
        </div>
        
        {/* Menu icon */}
        <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        
        {/* link items */}
        <ul style={{ backgroundColor: '#f1efed' }} className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'} ` }>
          {
            Links.map((link) => (
              <li key={link.name} className='md:ml-8 md:my-0 my-7 font-semibold'>
                <a href={`#${link.sectionId}`} className='text-gray-800 hover:text-blue-400 duration-500 transition-transform transform hover:scale-150'>{link.name}</a>
              </li>
            ))
          }
          <button className='btn text-white md:ml-16 font-semibold px-3 py-2 rounded duration-500 md:static' onClick={handleClick} style={{ backgroundColor: "#0F6FFF" }}>GET STARTED</button>
        </ul>
        {/* button */}
      </div>
    </div>
  );
};

export default Header;
