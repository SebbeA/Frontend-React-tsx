import React from 'react';
import { NavLink } from 'react-router-dom';
import { IProduct } from '../models/ProductModel';

// * Added prop (product)
const ProductCard: React.FC <IProduct> = ({product}) => {
    // * Beginning of a function to add products for wishlist, compare and cart. Copy from Hans
    const addToWishList = (e: any) => {
        console.log("added to wish list")
    }

    const addToCompare = (e: any) => {
        console.log("added to compare")
    }

    const addToCart = (e: any) => {
        console.log("added to cart")
    }

    // * Structure for all product cards
  return (
    <div className="col">
        <div className="card">
            <div className="card-img">
                <img src={product.imageName} alt={product.name} />
                <div className="card-menu">
                    <button onClick={addToWishList} className="card-icon"><i className="fa-regular fa-heart"></i></button>
                    <button onClick={addToCompare} className="card-icon"><i className="fa-regular fa-code-compare"></i></button>
                    <button onClick={addToCart} className="card-icon"><i className="fa-regular fa-bag-shopping"></i></button>
                </div>
                <NavLink to={`/products/${product.articleNumber}`} className="button-theme">Quick View</NavLink>
            </div>
            <div className="card-body">
                <p className="card-category">{product.category}</p>
                <h5 className="card-title">{product.name}</h5>
                <p className="card-rating">
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                </p>
                <p className="card-price">${product.price}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard