import React from 'react'
// * importing mainmenu section
import MainMenuSection from '../sections/MainMenuSection'
// * importing breadcrumb section
import BreadcrumbSection from '../sections/BreadcrumbSection'
// * importing mapsection section
import MapSection from '../sections/MapSection'
// * importing concactform section
import ContactFormSection from '../sections/ContactFormSection'
// * importing footer section
import FooterSection from '../sections/FooterSection'
import { TabTitle } from '../utilities/GeneralFunctions'

const ContactsView: React.FC = () => {
  TabTitle('Contacts | Fixxo.')
//   window.top.document.title = 'Contatcs | Fixxo.'

  return (
    <>
      <MainMenuSection />
      {/* sets currentPage as Contacts */}
      <BreadcrumbSection currentPage="Contacts" />
      <MapSection />
      <ContactFormSection name={undefined} email={undefined} comments={undefined} />
      <FooterSection />
    </>
  )
}

export default ContactsView