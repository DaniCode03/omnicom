import React from 'react'
import Button from '../components/Button';
import '../assets/style/SmartEcoControl.css';

export const SmartEcoControl = ({ Image, Price, Name, Description }) => {
    return (
        <div className="product-container">
            <img src={Image} alt={Name} className="product-image" />
            <div className="product-price">
                <h3 className='price'>{Price}</h3>
                <h4 className='name'>{Name}</h4>
                <p className='description'>{Description}</p>
                <Button text="BUY" />
            </div>
        </div>
    )
}

export default SmartEcoControl;