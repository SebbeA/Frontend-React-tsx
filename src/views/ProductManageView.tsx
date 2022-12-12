import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import { TabTitle } from '../utilities/GeneralFunctions'
import ManageForm from '../sections/ManageForm'
import BreadcrumbSection from '../sections/BreadcrumbSection'

const ProductManageView: React.FC = () => {
    TabTitle('Manage | Fixxo.')
    
  return (
    <>
        <MainMenuSection />
        <BreadcrumbSection currentPage="Manage" />
        <ManageForm />
        <FooterSection />
    </>
  )
}

export default ProductManageView