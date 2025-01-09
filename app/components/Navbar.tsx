"use client";  // Add this directive to mark the component as client-side

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  // Handle the logo click to scroll to the middle of the page
  const handleLogoClick = () => {
    const middleSection = document.getElementById('middle-section');
    if (middleSection) {
      middleSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the middle section
    }
  };

  return (
    <header className='w-full absolute z-10'>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
        {/* Add onClick to logo to trigger scroll */}
        <Link href='/' className='flex justify-center items-center' onClick={handleLogoClick}>
          <Image
            src='/logo.svg'
            alt='logo'
            width={118}
            height={18}
            className='object-contain'
          />
        </Link>

        {/* Wrap buttons in a container with reduced gap */}
        <div className='flex gap-2'>
          <Link
            href="/users/login"
            className="text-primary-blue rounded-full bg-white min-w-[130px] py-2 px-4 text-center hover:underline"
          >
            Login
          </Link>
          <Link
            href="/users/SignUp"
            className="text-primary-blue rounded-full bg-white min-w-[130px] py-2 px-4 text-center hover:underline"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
