import React from 'react';
import { DeviceMobile, Storefront, MagnifyingGlass, Heart, ShoppingCart, Question, User, Globe } from '@phosphor-icons/react';

const Header = () => {
  return (
    <header className="px-12 py-8">
      <div className="items-center text-md capitalize pb-2 hidden sm:flex">
        <div className="flex items-center">
          <DeviceMobile size={32} /> <span className="ml-2 ">Download Arshion app</span>
        </div>
        <div className="flex ml-auto gap-4 capitalize">
          <Question size={32} /> <span className="hidden sm:flex">help</span>
          <Globe size={32} /> <span className="hidden sm:flex">language english</span>
          <span className="ml-4 hidden sm:flex">Sign in</span>
          <span className="hidden sm:flex">|</span>
          <span className="hidden sm:flex">Sign up</span>
        </div>
      </div>
      <div className="flex items-center mt-4 text-md font-bold ">
        <div className="flex items-center">
          <Storefront size={32} />
          <span className="ml-2 uppercase hidden text-xl sm:flex">Arshion</span>
        </div>
        <div className="flex ml-24 uppercase">
          <p className="mr-6 hidden sm:flex hover:bg-black p-1 hover:text-white rounded-md">men</p>
          <p className="mr-6 hidden sm:flex hover:bg-black p-1 hover:text-white rounded-md">women</p>
          <p className="hidden sm:flex hover:bg-black p-1 hover:text-white rounded-md">kids</p>
        </div>
        <div className="flex ml-auto gap-6">
          <MagnifyingGlass size={32} /> <Heart size={32} /> <ShoppingCart size={32} /> <User size={32} />
        </div>
      </div>
    </header>
  );
};

export default Header;
