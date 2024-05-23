import React, {useEffect} from 'react'
import { HiOutlineChatAlt, HiOutlineBell } from 'react-icons/hi';
import { Popover, Transition, Menu } from '@headlessui/react';
import { Fragment } from 'react';
import classNames from 'classnames';
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';


const Header = () => {

  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  //   script.async = true;
  //   document.head.appendChild(script);

  //   window.googleTranslateElementInit = () => {
  //     new window.google.translate.TranslateElement(
  //       {
  //         pageLanguage: 'en',
  //         autoDisplay: false,
  //       },
  //       'google_translate_element'
  //     );
  //   };

  //   return () => {
  //     document.head.removeChild(script);
  //     delete window.googleTranslateElementInit;
  //   };
  // }, []);

    const navigate = useNavigate();

  return (
    <div className='bg-white h-16 px-4 flex justify-between items-center'>
    {/* <div id="google_translate_element"></div> */}
    <div></div>
    <div className='flex flex-cols gap-5 mr-2 items-center'>
    <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={classNames(open && 'bg-gray-100','p-4 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100')}
            >
                <HiOutlineChatAlt fontSize={24}/>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className='absolute right-0 z-10 mt-2.5 w-85'>
                <div className='bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5'>
                    <strong className='text-gray-700 font-medium'>Messages</strong>
                    <div className='mt-2 py-1 text-sm'>
                    
                    </div>
                </div>
              </Popover.Panel>
              </Transition>
            </> )}
    </Popover>
    <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={classNames(open && 'bg-gray-100','p-4 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100')}
            >
                <HiOutlineBell fontSize={24} />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className='absolute right-0 z-10 mt-2.5 w-85'>
                <div className='bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5'>
                    <strong className='text-gray-700 font-medium'>Notification</strong>
                    <div className='mt-2 py-1 text-sm'>
                    
                    </div>
                </div>
              </Popover.Panel>
              </Transition>
            </> )}
    </Popover>

    <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="ml-2 bg-white flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
            <div>
                <CgProfile fontSize={24}/>
                <span className='sr-only'>Nyasha</span>
            </div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <div 
                  onClick={() => navigate('/profile')}
                  className={classNames(active && 'bg-white-200', 'active:bg-white rounded-sm px-4 py-2 cursor pointer focus:bg-gray-100')}
                  >
                    Your Profile
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div 
                  onClick={() => navigate('/settings')}
                  className={classNames(active && 'bg-white-200', 'active:bg-white rounded-sm px-4 py-2 cursor pointer focus:bg-gray-100')}
                  >
                    Settings
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div 
                  onClick={() => navigate('/logout')}
                  className={classNames(active && 'bg-white-200', 'active:bg-white rounded-sm px-4 py-2 cursor pointer focus:bg-gray-100')}
                  >
                    Logout
                  </div>
                )}
              </Menu.Item>
              </div>
              </Menu.Items>
            </Transition>
    </Menu>
  
      </div>
    </div>
  )
}

export default Header;
