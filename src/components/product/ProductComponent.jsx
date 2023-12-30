import React from 'react';
import { ProductImage } from '../../assets/image/Data';

const ProductComponent = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="text-center mb-4 p-10">
        <h1 className="text-3xl font-bold uppercase">New Arrival!!</h1>
        <p className="text-lg">Summer Special Edition</p>
      </div>
      <div className="flex justify-center items-center">
        <img src={ProductImage} alt="Product Image" className="mx-2" />
        <img src={ProductImage} alt="Product Image" className="mx-2" />
        <img src={ProductImage} alt="Product Image" className="mx-2" />
      </div>
    </div>
  );
};

export default ProductComponent;
