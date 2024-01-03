import React from 'react';
import { BundleImage } from '../../assets/image/Data';

const SpecialProduct = () => {
  return (
    <section className="flex justify-center items-center py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full h-auto text-6xl">
        <div className="bg-[#babdde] flex justify-center items-center ">
          <img src={BundleImage} alt="Product 1" className="mt-8" />
        </div>
        <div className="bg-white flex justify-center items-center">
          <div className="text-center text-6xl">
            <h1 className="text-red-500 text-[64px] capitalize pb-2">special edition</h1>
            <p className="capitalize text-[37px] pb-2">Bundle: Grey Jean ,White Shirt, & Brown Boots </p>
            <p className="font-bold text-[40px] capitalize pb-4">Rp 1.300.000.00</p>
            <button className="bg-[#404040] p-4 px-4 rounded-lg text-xl text-white hover:bg-gray-700 transition-all capitalize">buy now</button>
          </div>
        </div>
        <div className="bg-white flex justify-center items-center pb-3">
          <div className="text-center text-6xl">
            <h1 className="text-red-500 text-[64px] capitalize pb-2">special edition</h1>
            <p className="capitalize text-[37px] pb-2">Bundle: Grey Jean ,White Shirt, & Brown Boots </p>
            <p className="font-bold text-[40px] capitalize pb-4">Rp 1.300.000.00</p>
            <button className="bg-[#404040] p-4 px-4 rounded-lg text-xl text-white hover:bg-gray-700 transition-all capitalize">buy now</button>
          </div>
        </div>
        <div className="bg-[#babdde] flex justify-center items-center">
          <img src={BundleImage} alt="Product 4" />
        </div>
      </div>
    </section>
  );
};

export default SpecialProduct;
