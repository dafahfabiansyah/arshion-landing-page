import React from 'react';
import products from './ProductData';
import { ProductImage } from '../../assets/image/Data';

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
    </>
  );
};

export default ProductComponent;
