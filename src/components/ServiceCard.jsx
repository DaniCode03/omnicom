import React from 'react'
import '../assets/style/ServiceCard.css'

export const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="service-card">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="service-footer">
            <img src={image} alt={title} />
            <span className='btn'>ORDER</span>
        </div>
    </div>
  )
}

export default ServiceCard;