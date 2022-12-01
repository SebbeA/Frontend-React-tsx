import React, { useEffect } from 'react'
// * importing productcard component
import ProductCard from '../components/ProductCard';
import { IProduct } from '../models/ProductModel';

export interface FlashSale {
  title?: string
  product?: IProduct
  products: IProduct[]
}

// * Added prop (products from app.js)
const FlashSaleSection: React.FC <FlashSale> = ({products = []}) => {

  return (
    <section className="flash-grid">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 g-2">
            {/* importing ProductCard component here */}
              {
                products.map(product => <ProductCard key={product.articleNumber} product={product} />)
              }
          </div>
          <div className="flashsale">
            <div className="flashsale-body">
              <h1 className="flashsale-title">2 FOR USD $29</h1>
              <button className="button-theme-white">FLASH SALE</button>
            </div>
          </div>
        </div>
    </section>
  )
}

export default FlashSaleSection

function getFeaturedProducts(arg0: number) {
  throw new Error('Function not implemented.');
}
