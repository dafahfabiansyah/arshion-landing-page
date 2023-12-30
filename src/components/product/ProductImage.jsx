// ProductImage.js
import React from 'react';

const ProductImage = ({ src, alt, description }) => {
  return (
    <>
      <img src={src} alt={alt} className="mx-2" />
      <p>{description}</p>
    </>
  );
};

export default ProductImage;
