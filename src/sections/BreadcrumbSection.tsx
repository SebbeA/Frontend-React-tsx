import React from 'react'
import { NavLink } from 'react-router-dom'
import { ICurrentPage } from '../models/CurrentPage'

// * Structure for Breadcrumb

// * Added a prop (currentPage) so we know witch page we are on
const BreadcrumbSection: React.FC <ICurrentPage> = ({currentPage}) => {
  return (
    <section className="breadcrumb">
        <div className="container">
            <ul className="breadcrumb-list">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>{currentPage}</li>
            </ul>
        </div>
    </section>
  )
}

export default BreadcrumbSection