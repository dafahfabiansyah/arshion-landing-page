import React from 'react';
import { ProductImage, Tshirt, Shoes, Trouser, Hat, Store, HeroImage } from '../../assets/image/Data';

const CategoriesProduct = () => {
  return (
    <section className="flex flex-col items-center py-10">
      <div className="pb-5 uppercase text-4xl">Categories</div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Tshirt */}
        <div className="bg-blue-500 rounded-lg relative">
          <img src={Tshirt} className="h-40 pl-14" alt="Tshirt" />
          <p className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black">tshirt</p>
        </div>

        {/* Shoes */}
        <div className="bg-red-200 rounded-lg relative">
          <img src={Shoes} className="h-40" alt="Shoes" />
          <p className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black">shoes</p>
        </div>

        {/* Trouser */}
        <div className="bg-gray-400 rounded-lg relative">
          <img src={Trouser} className="h-40 pl-20" alt="Trouser" />
          <p className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black">trousers</p>
        </div>

        {/* Glasses */}
        <div className="bg-cyan-200 rounded-lg relative">
          <img src={Shoes} className="h-40" alt="Shoes" />
          <p className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black">glasses</p>
        </div>

        {/* Sandals */}
        <div className="bg-blue-200 rounded-lg relative">
          <img src={Shoes} className="h-40" alt="Shoes" />
          <p className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black">sandals</p>
        </div>

        {/* Hat */}
        <div className="bg-yellow-100 rounded-lg relative">
          <img src={Hat} className="h-40 pl-10" alt="Hat" />
          <p className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black">hat</p>
        </div>

        {/* Jacket */}
        <div className="bg-orange-300 rounded-lg relative">
          <img src={Shoes} className="h-40" alt="Shoes" />
          <p className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black">jacket</p>
        </div>

        {/* Dress */}
        <div className="bg-pink-500 rounded-lg relative">
          <img src={Shoes} className="h-40" alt="Shoes" />
          <p className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black">dress</p>
        </div>

        {/* Shirt */}
        <div className="bg-gray-500 rounded-lg relative">
          <img src={Shoes} className="h-40" alt="Shoes" />
          <p className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black">shirt</p>
        </div>
      </div>
    </section>
  );
};

export default CategoriesProduct;
