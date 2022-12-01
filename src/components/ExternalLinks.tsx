import React from 'react'
import { ILinks } from '../models/Links'

//* A component for facebook, Instagram, Twitter, Google and LinkedIn so we can go to other websites.

const ExternalLinks: React.FC<ILinks> = ({link, icon}) => {
    
  return (
    <a href={link} target="_blank">
        <i className={icon}></i>
    </a>
  )
}

export default ExternalLinks