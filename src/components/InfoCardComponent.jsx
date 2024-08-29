import React from 'react';
import '../assets/style/InfoCardComponent.css';

const InfoCardComponent = ({ icon, title, content }) => {
    return (
        <div className="block">
            <img src={icon} alt={`${title} Icon`} />
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );
};

export default InfoCardComponent;
