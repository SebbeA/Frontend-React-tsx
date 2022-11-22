import React from 'react'
import { IMap } from '../models/Map'
// * Copy structure from Hans
// * iFrame used from google
const MapSection: React.FC <IMap> = () => {
  return (
    <iframe 
        className="google-map"
        title="google-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23063.847313316805!2d15.201261998151232!3d59.27324330813351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465c14e28e532c05%3A0xafa950e40634bfcb!2s%C3%96rebro%20Slott!5e0!3m2!1ssv!2sse!4v1666605328981!5m2!1ssv!2sse" 
        allowFullScreen  //! kolla på denna
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
    </iframe>
  )
}

export default MapSection