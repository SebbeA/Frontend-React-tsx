// * importing useState and useEffect
import React, { useEffect } from 'react'
// * importing useParams
import { useParams } from 'react-router-dom'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import FooterSection from '../sections/FooterSection'
import ProductDetails from '../sections/ProductDetails'
import { ProductContextType, useProductContext } from '../contexts/contexts'

// * sets and using useParams and useState
const ProductDetailsView: React.FC = () => {
    const {id} = useParams<string>()
    const {product, getProduct} = useProductContext() as ProductContextType

// * a function to fetch data from API
    useEffect(() => {
      getProduct(id)
  }, [])

  return (
    // * structure for what will show on the page
    <>
        <MainMenuSection />
        <BreadcrumbSection currentPage="Products" /> 
        <ProductDetails product={product}/>
        <FooterSection />
    </>
  )
}

export default ProductDetailsView