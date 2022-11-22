import React from 'react'

// * importing 2 pictures
import images1 from '../assets/images/header-women.svg';
import images2 from '../assets/images/header-man.svg';

// * added structure for showcase section
const ShowcaseSection: React.FC = () => {
  return (
    <section className="showcase container">
        <img src={images1} className="img-left" alt="showcase-img-1"/>
        <div className="showcase-body">
            <h1>Sale Up</h1>
            <h1>To 50% Off</h1>
            <p>Online shopping free home delivery over $100</p>
            <button className="button-theme">SHOP NOW</button>
        </div>
        <img src={images2} className="img-right" alt="showcase-img-2"/>
    </section>
)
}

export default ShowcaseSection