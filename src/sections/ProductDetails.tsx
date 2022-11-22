import React from 'react'
import { IProduct } from '../models/ProductModel'
// * Copy from Hans
const ProductDetails: React.FC <IProduct> = ({product}) => {
  return (
    <div>
        <h1>{product.name}</h1>
        <p>${product.price}</p>
        <img src={product.imageName} />
    </div>
  )
}

export default ProductDetails