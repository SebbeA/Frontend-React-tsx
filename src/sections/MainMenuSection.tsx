// * importing useState so we can track and state variables in a function
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
// * importing MenuIncon as a component
import MenuIcon from '../components/MenuIcon'

// * tried to make it responsive with a useState
const MainMenuSection: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
// * Structure added for main menu
  return (
    <nav className="mainmenu container">
        <NavLink className="logotype" to="/" end>Fixxo.</NavLink>
        <div className={`menu-links ${ showMenu ? "d-grid": ""}`}>
            <NavLink className="menu-link" to="/" end>Home</NavLink>
            <NavLink className="menu-link" to="/categories" end>Categories</NavLink>
            <NavLink className="menu-link" to="/products">Products</NavLink>
            <NavLink className="menu-link" to="/contacts" end>Contacts</NavLink>
        </div>
        <div className="menu-icons">
            <MenuIcon link="/search" icon="fa-regular fa-magnifying-glass" />
            <MenuIcon hideOnMobile={true} link="/compare" icon="fa-regular fa-code-compare" />
            <MenuIcon hideOnMobile={true} quantity="1" link="/wishlist" icon="fa-regular fa-heart" />
            <MenuIcon quantity="3" link="/shoppingcart" icon="fa-regular fa-bag-shopping" />

            <button onClick={toggleMenu} className="d-xl-none menu-icon btn-menu-icon"><i className="fa-regular fa-bars"></i></button>

        </div>
    </nav>
  )
}

export default MainMenuSection