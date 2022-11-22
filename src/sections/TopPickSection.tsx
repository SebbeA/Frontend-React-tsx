import React from 'react'
// * importing productcard as a component
import ProductCard from '../components/ProductCard'
import { IProduct } from '../models/ProductModel'

// ! Kolla på { articleNumber: React.Key }

// *added prop (products) and structure for toppick section
const TopPickSection: React.FC <IProduct> = ({products = []}) => {
  return (
    <section className="top-grid">
        <div className="container">
          <div className="top-pick">
            <div className="top-pick-body">
              <h1 className="top-pick-title">2 FOR USD $29</h1>
              <button className="button-theme-white">FLASH SALE</button>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-2">
            {/* importing ProductCard component here */}
              {
                products.map((product: { articleNumber: React.Key | null | undefined }) => <ProductCard key={product.articleNumber} product={product} />)
              }
          </div>
        </div>
    </section>
  )
}

export default TopPickSection