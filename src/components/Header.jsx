import React from 'react';
import { DeviceMobile, Storefront, MagnifyingGlass, Heart, ShoppingCart, Question, User, Globe } from '@phosphor-icons/react';

const Header = () => {
  return (
    <header className="px-12 py-8">
      <div className="flex items-center text-md capitalize pb-2">
        <div className="flex items-center">
          <DeviceMobile size={32} /> <span className="ml-2">Download Arshion app</span>
        </div>
        <div className="flex ml-auto gap-4 capitalize">
          <Question size={32} /> <span>help</span> <Globe size={32} /> <span>language english</span> <span className="ml-4">Sign in</span> <span>|</span> <span>Sign up</span>
        </div>
      </div>
      <div className="flex items-center mt-4 text-md font-bold">
        <div className="flex items-center">
          <Storefront size={32} /> <span className="ml-2 uppercase">Arshion</span>
        </div>
        <div className="flex ml-24 uppercase">
          <p className="mr-6">men</p> <p className="mr-6">women</p> <p>kids</p>
        </div>
        <div className="flex ml-auto gap-6">
          <MagnifyingGlass size={32} /> <Heart size={32} /> <ShoppingCart size={32} /> <User size={32} />
        </div>
      </div>
    </header>
  );
};

export default Header;
