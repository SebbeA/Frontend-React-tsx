// * importing useContext
import React, { useEffect } from 'react'
// * importing all sections below
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import FooterSection from '../sections/FooterSection'
import ProductGridSection from '../sections/ProductGridSection'
// * importing a context here and using it below
import { ProductContextType, useProductContext } from '../contexts/contexts'
import { TabTitle } from '../Utilis/GeneralFunctions'

// * sets and using useContext
const ProductsView: React.FC = () => {
  const {products, getProducts} = useProductContext() as ProductContextType

  useEffect(() => {
    getProducts()
  }, [])

  TabTitle('Products | Fixxo.')
//   window.top.document.title = 'Products | Fixxo.'

  return (
     // * structure for what will show on the page
    <>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Products" />
      <ProductGridSection title="Products" products={products} />
      <FooterSection />
    </>
  )
}

export default ProductsView