import React from 'react'
// * importing mainmenu section
import MainMenuSection from '../sections/MainMenuSection'
import PageNotFound from '../assets/images/PageNotFound.jpg'
import FooterSection from '../sections/FooterSection'

// * structure for 404 page, copy from Hans
const NotFoundView: React.FC = () => {
  return (
    <>
      <MainMenuSection />
      <div className="container">
        <div className="container d-flex justify-content-center align-items-center">
          <img src={PageNotFound} alt="404 Page Not Found" style={{ height: "700px", margin: "0 0 4rem 0" }} />
          <h1 className="ms-4" style={{ fontSize: "3rem" }} >The page you were looking for couldn't be found.</h1>
        </div>
      </div>
      <FooterSection />
    </>
  )
}

export default NotFoundView