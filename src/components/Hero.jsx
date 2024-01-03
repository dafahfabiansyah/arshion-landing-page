import React from 'react';
import { HeroImage } from '../assets/image/Data';

const Hero = () => {
  return (
    <div className="relative">
      <img src={HeroImage} alt="Hero Image" className="w-full h-auto max-h-80 object-cover brightness-50" />
      <div className="absolute top-0 left-0 w-full h-80 flex items-center justify-center ">
        <div className="text-white hover:text-black transition-all text-center mx-auto">
          <h1 className="text-2xl sm:text-4xl font-bold uppercase">Discount up to 50%</h1>
          <p className="sm:text-sm text-xs font-bold text-center capitalize">from september 30, 2023 - october 25, 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
