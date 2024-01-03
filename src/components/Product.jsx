import React from 'react';
// import ProductComponent from './product/ProductComponent';
import NewestProduct from '../components/product/NewestProduct';
import SpecialProduct from '../components/product/SpecialProduct';
import CategoriesProduct from '../components/product/CategoriesProduct';
import LocationProduct from '../components/product/LocationProduct';
const Product = () => {
  // return <ProductComponent />;
  return (
    <>
      <NewestProduct />
      <SpecialProduct />
      <CategoriesProduct />
      <LocationProduct />
    </>
  );
};

export default Product;
