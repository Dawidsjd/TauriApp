import React from 'react';
import { FloatingNav } from './FloatingNav'; // Popraw ścieżkę do komponentu FloatingNav
import { IconUser, IconUserFilled } from '@tabler/icons-react';
import Logo from '../../assets/logo.png';
import '../../App.css';
import StaggeredDropDown from '../../assets/dropdown/StaggeredDropDown';


const Navbar = () => {
  const navItems = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Contact',
      link: '/contact',
    },
  ];

  return (
    <div className="flex justify-between items-center ">
      
      <img src={Logo} alt="Logo" className="logo absolute top-1" draggable="false" />

      
      <FloatingNav navItems={navItems} className="top-4 z-50" />

      <StaggeredDropDown />
      
      {/* <IconUserFilled className="text-neutral-500 dark:text-white absolute right-8 top-8 cursor-pointer hover:text-yellow-300" /> */}
    </div>
  );
};

export default Navbar;
