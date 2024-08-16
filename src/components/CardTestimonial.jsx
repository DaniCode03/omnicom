import React from 'react';
import '../assets/style/CardTestimonial.css';

export const CardTestimonial = ({ image, name, description, jobPosition }) => {
    return (
        <div className="card-container">
            <div className="card">
                <div className="card-image">
                    <img src={image} alt={name} />
                </div>
                <div className="card-content">
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <p className="cargo">{jobPosition}</p>
                    <div class="social-icons">
                        <a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="twitter"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="instagram"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="linkedin"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#" class="youtube"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardTestimonial;
