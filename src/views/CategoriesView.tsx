import React from 'react'
// * importing mainmenu section
import MainMenuSection from '../sections/MainMenuSection'
// * importing footer section
import FooterSection from '../sections/FooterSection'
import { TabTitle } from '../Utilis/GeneralFunctions'

const CategoriesView: React.FC = () => {
  TabTitle('Categories | Fixxo.')
//   window.top.document.title = 'Categories | Fixxo.'

  return (
    <>
      <MainMenuSection />
      <FooterSection />
    </>
  )
}

export default CategoriesView