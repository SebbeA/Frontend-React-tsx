// * importing useContext
import React, { useEffect } from 'react'
// * importing all sections below 
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import ShowcaseSection from '../sections/ShowcaseSection'
import CollabSection from '../sections/CollabSection'
import TopPickSection from '../sections/TopPickSection'
import FlashSaleSection from '../sections/FlashSaleSection'
import InfoSection from '../sections/InfoSection'
import FooterSection from '../sections/FooterSection'
// * importing 2 contexts and using it below
import { ProductContextType, useProductContext } from '../contexts/contexts'
import { TabTitle } from '../Utilis/GeneralFunctions'

// * sets and define products and square with useContext
const HomeView: React.FC = () => {
  const {products, getProducts, square, getSquare, sets, getSets} = useProductContext() as ProductContextType

  useEffect(() => {
    getProducts(8)
  }, [])

  useEffect(() => {
    getSquare(4)
  }, [])

  useEffect(() => {
    getSets(4)
  }, [])

  TabTitle('Fixxo.')
//   window.top.document.title = 'Fixxo.'
  
// * sets what will show on homeview and what products for what section
  return (
    <>
      <header>
        <MainMenuSection />
        <ShowcaseSection />
      </header>
      <ProductGridSection title="Featured Products" products={products} />
      <CollabSection />
      <TopPickSection products={square} />
      <FlashSaleSection products={sets} />
      <InfoSection />
      <FooterSection />
    </>
  )
}

export default HomeView