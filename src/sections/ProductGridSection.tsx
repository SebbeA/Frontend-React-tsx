import React from 'react'
// * importing productcard as a component
import ProductCard from '../components/ProductCard'
import { IProduct } from '../models/ProductModel'

export interface ProductGrid {
  title: string
  product?: IProduct
  products: IProduct[]
}

// * Added and using prop (title and products)
const ProductGridSection: React.FC<ProductGrid> = ({title, products = []}) => {
// * Structure for featured products
  return (
    <section className="product-grid">
        <div className="container">
          <h1 className="title">{title}</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
              {/* using product card here */}
                {
                  products.map(product => <ProductCard key={product.articleNumber} product={product} />)
                }

            </div>
        </div>
    </section>
  )
}

export default ProductGridSection