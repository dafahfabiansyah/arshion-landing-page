import React from 'react';
import products from './ProductData';

const NewestProduct = () => {
  return (
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
  );
};

export default NewestProduct;
