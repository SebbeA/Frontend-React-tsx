import React from 'react'
// * Importing 2 pictures
import images1 from '../assets/images/placeholder-pamela.svg'
import images2 from '../assets/images/placeholder-letsbe.svg'

// * Structure for collab section

const CollabSection: React.FC = () => {
  return (
    <section className="collab container">
        <img src={images1} alt=""/>
        <img src={images2} alt=""/>
    </section>
  )
}

export default CollabSection