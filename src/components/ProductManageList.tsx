import React, { useEffect } from 'react';
import { IManageContext, manageContext } from '../contexts/manageContext';
import { ProductItem } from '../models/ProductModel';
import ProductCard from './ProductCard';

const ProductManageList = () => {
  const { products, getAll } = React.useContext(manageContext) as IManageContext

  useEffect(() => {
    getAll()
  }, [getAll])

  return (
    <>
      <h5 className="d-flex justify-content-center align-items-center mb-4">
        List of Products
      </h5>
      <div className="product-list container">
        {
            products.map((product: ProductItem) => (
                <ProductCard key={product.id} product={product}/>
            )) 
        }
      </div>
    </>
  );
};

export default ProductManageList
