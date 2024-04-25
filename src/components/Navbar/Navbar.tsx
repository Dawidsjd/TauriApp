import React from 'react';
import { FloatingNav } from './FloatingNav'; // Popraw ścieżkę do komponentu FloatingNav
import { IconUser } from '@tabler/icons-react';
import Logo from '../../assets/logo.png';
import '../../App.css';

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

      
      <IconUser className="text-neutral-500 dark:text-white absolute right-8 top-8" />
    </div>
  );
};

export default Navbar;
