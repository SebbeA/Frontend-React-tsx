import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IProduct } from '../models/ProductModel';

// * Added prop (product)

export interface ProductCardType {
    product: IProduct
}

const ProductCard: React.FC<ProductCardType> = ({ product }) => {
    const [rating, setRating] = useState(product.rating)
    // * Beginning of a function to add products for wishlist, compare and cart. Copy from Hans in Frontend assignment
    const addToWishList = (e: any) => {
        console.log("added to wish list")
    }

    const addToCompare = (e: any) => {
        console.log("added to compare")
    }

    const addToCart = (e: any) => {
        console.log("added to cart")
    }

    useEffect(() => {
        setRating(product.rating)
    },[product.rating])

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
                {[...Array(5)].map((_star, i) => {
                    let ratingValue = i + 1;
                    return (
                        <i
                        key={i}
                        className={`fa-sharp fa-solid fa-star ${ratingValue <= (product.rating || 0) ? 'checked' : ''}`}
                        />
                    );
                })}
                </p>
                <p className="card-price">${product.price}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard

