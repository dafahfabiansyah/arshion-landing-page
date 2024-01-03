import React from 'react';
import { ProductImage } from '../../assets/image/Data';

const SpecialProduct = () => {
  return (
    <section className="flex justify-center items-center py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full h-auto text-6xl">
        <div className="bg-gray-300 flex justify-center items-center ">
          <img src={ProductImage} alt="Product 1" className="mt-8" />
        </div>
        <div className="bg-white flex justify-center items-center">
          <div className="text-center text-6xl">
            <h1 className="text-red-500 capitalize pb-2">special edition</h1>
            <p className="capitalize pb-2">bundle grey</p>
            <p className="font-bold capitalize pb-4">rp.10000</p>
            <button className="bg-gray-500 p-4 px-4 rounded-lg text-xl text-white hover:bg-gray-700 transition-all capitalize">buy now</button>
          </div>
        </div>
        <div className="bg-white flex justify-center items-center pb-3">
          <div className="text-center text-6xl">
            <h1 className="text-red-500 capitalize pb-2">special edition</h1>
            <p className="capitalize pb-2">bundle grey</p>
            <p className="font-bold capitalize pb-4">rp.10000</p>
            <button className="bg-gray-500 p-4 px-4 rounded-lg text-xl text-white hover:bg-gray-700 transition-all capitalize">buy now</button>
          </div>
        </div>
        <div className="bg-gray-300 flex justify-center items-center">
          <img src={ProductImage} alt="Product 4" />
        </div>
      </div>
    </section>
  );
};

export default SpecialProduct;
