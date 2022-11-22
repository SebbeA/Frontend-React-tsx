import React from 'react'
// * importing 3 pictures
import images3 from '../assets/images/support-icon.svg'
import images4 from '../assets/images/payment-icon.svg'
import images5 from '../assets/images/truck-icon.svg'
import { NavLink } from 'react-router-dom'

// * Structure for info section
const InfoSection: React.FC = () => {
  return (
    <section className="info">
        <div className="container">
            <div className="info-icons">
                <div className="info-icon">
                    <NavLink to="/contacts">
                        <img src={images3} alt="support" />
                    </NavLink>
                    <h1 className="text">Customer Support</h1>
                    <p>Village did removed enjoyed explain talking.</p>
                </div>
                <div className="info-icon">
                    <NavLink to="">
                        <img src={images4} alt="payment" />
                    </NavLink>
                    <h1 className="text">Secured Payment</h1>
                    <p>Village did removed enjoyed explain talking.</p>
                </div>
                <div className="info-icon">
                    <NavLink to="">
                        <img src={images5} alt="truck" />
                    </NavLink>
                    <h1 className="text">Free Home Delivery</h1>
                    <p>Village did removed enjoyed explain talking.</p>
                </div>
                <div className="info-icon">
                    <NavLink to="">
                        <img src={images5} alt="truck" />
                    </NavLink>
                    <h1 className="text">30 Day Return</h1>
                    <p>Village did removed enjoyed explain talking.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default InfoSection