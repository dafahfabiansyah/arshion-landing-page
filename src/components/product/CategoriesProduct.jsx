import React from 'react';
import { Tshirt, Shoes, Trouser, Hat, Jacket, Sandal, Cap, Eyeglass, Dress, Shirt } from '../../assets/image/Data';

const CategoriesProduct = () => {
  return (
    <section className="flex flex-col items-center py-10">
      <div className="pb-5 uppercase text-4xl">Categories</div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Tshirt */}
        <div className="bg-blue-500 rounded-lg relative">
          <img src={Tshirt} className="h-40 pl-14" alt="Tshirt" />
          <p className="text-center text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">tshirt</p>
        </div>

        {/* Shoes */}
        <div className="bg-red-200 rounded-lg relative">
          <img src={Shoes} className="h-40" alt="Shoes" />
          <p className="text-center text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">shoes</p>
        </div>

        {/* Trouser */}
        <div className="bg-gray-400 rounded-lg relative">
          <img src={Trouser} className="h-40 pl-14" alt="Trouser" />
          <p className="text-center text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">trousers</p>
        </div>

        {/* Glasses */}
        <div className="bg-cyan-200 rounded-lg relative">
          <img src={Eyeglass} className="h-40 pl-14" alt="Eyeglas" />
          <p className="text-center text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">glasses</p>
        </div>

        {/* Sandals */}
        <div className="bg-blue-200 rounded-lg relative">
          <img src={Sandal} className="h-40 pl-14" alt="Sandal" />
          <p className="text-center text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">sandals</p>
        </div>

        {/* Hat */}
        <div className="bg-yellow-100 rounded-lg relative">
          <img src={Cap} className="h-40 pl-16" alt="Cap" />
          <p className="text-center text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">hat</p>
        </div>

        {/* Jacket */}
        <div className="bg-orange-300 rounded-lg relative">
          <img src={Jacket} className="h-40 pl-14" alt="Jacket" />
          <p className="text-center text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">jacket</p>
        </div>

        {/* Dress */}
        <div className="bg-pink-500 rounded-lg relative">
          <img src={Dress} className="h-40 pl-24" alt="Dress" />
          <p className="text-center text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">dress</p>
        </div>

        {/* Shirt */}
        <div className="bg-gray-500 rounded-lg relative">
          <img src={Shirt} className="h-40 pl-14" alt="Shirt" />
          <p className="text-center text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">shirt</p>
        </div>
      </div>
    </section>
  );
};

export default CategoriesProduct;
