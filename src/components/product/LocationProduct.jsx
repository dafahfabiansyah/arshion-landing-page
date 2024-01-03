import React from 'react';
import { Store } from '../../assets/image/Data';
import { Storefront } from '@phosphor-icons/react';

const LocationProduct = () => {
  return (
    <section className="relative pt-8 pb-20 text-white">
      <div className="relative flex flex-col items-center">
        <div className="absolute top-0 right-5 md:right-20 p-4 sm:block hidden">
          <div className="flex items-center p-2">
            <Storefront size={32} className="z-10" />
            <span className="ml-2 text-xl uppercase z-10">arshion</span>
          </div>
        </div>
        <div className="relative w-full max-h-80 overflow-hidden">
          <img src={Store} alt="Hero Image" className="w-full h-auto object-cover brightness-50" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="underline text-2xl sm:text-4xl py-4 capitalize text-white">location store</h1>
          {/* <div className="sm:flex sm:justify-center sm:space-x-8"> */}
          <div className="sm:grid sm:justify-center flex">
            <div className="text-center pr-4 sm:pb-0 pb-6">
              <h2 className="font-bold text-lg md:text-xl lg:text-2xl capitalize pb-2">jakarta</h2>
              <p>Jakarta Selatan - Jl. Fatmawati No.07</p>
            </div>
            <div className="text-center px-2">
              <h2 className="font-bold text-lg md:text-xl lg:text-2xl capitalize pb-2">bandung</h2>
              <p>Bandung Selatan - Jl. Cibaduyut No.22</p>
            </div>
            <div className="text-center pb-7 px-4">
              <h2 className="font-bold text-lg md:text-xl lg:text-2xl capitalize pb-2">Yogyakarta</h2>
              <p>Kota Yogyakarta - Jl. Malioboro No.10</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationProduct;
