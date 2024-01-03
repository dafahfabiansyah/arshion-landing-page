import React from 'react';
import products from './ProductData';
import { ProductImage, Tshirt, Shoes, Trouser, Hat, Store, HeroImage } from '../../assets/image/Data';
import { Storefront } from '@phosphor-icons/react';

const ProductComponent = () => {
  return (
    <>
      {/* new arrival */}
      <section className="flex justify-center items-center flex-col">
        <div className="text-center mb-4 p-10">
          <h1 className="text-3xl font-bold uppercase">New Arrival!!</h1>
          <p className="text-lg">Summer Special Edition</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <div key={index} className="justify-center items-center text-center">
              <img src={product.image} alt={`Product ${index + 1}`} />
              <p className="text-lg mt-2">{product.name}</p>
              <p className="text-sm font-bold pb-2">{product.price}</p>
            </div>
          ))}
        </div>
      </section>
      {/* special edition */}
      <section className="flex justify-center items-center pt-6">
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
          <div className="bg-white flex justify-center items-center">
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
      {/* Categories */}
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

      {/* location store */}
      <section className="relative py-8 text-white ">
        <div className="relative">
          <div className="absolute top-0 right-20 p-4 ">
            <div className="flex items-center p-2">
              <Storefront size={32} className="z-10" />
              <span className="ml-2 text-xl uppercase z-10">arshion</span>
            </div>
          </div>
          <img src={Store} alt="Hero Image" className="w-full h-auto max-h-80 object-cover brightness-50" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white ">
          <h1 className="underline text-5xl py-4 capitalize">location store</h1>
          <div className="text-center">
            <h2 className="font-bold text-lg capitalize pb-2">jakarta</h2>
            <p>Jakarta Selatan - Jl. Fatmawati No.07</p>
          </div>
          <div className="text-center">
            <h2 className="font-bold text-lg capitalize pb-2">bandung</h2>
            <p>Bandung Selatan - Jl. Cibaduyut No.22</p>
          </div>
          <div className="text-center pb-7">
            <h2 className="font-bold text-lg capitalize pb-2">Yogyakarta</h2>
            <p>Kota Yogyakarta - Jl. Malioboro No.10</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductComponent;
