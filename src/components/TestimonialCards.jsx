import React from 'react'
import '../assets/style/TestimonialCards.css'

export const TestimonialCards = ({ Image, Name, Comment }) => {
    return (
        <div>
            <div className="testimonial-card animate__animated animate__fadeInUp">
                <div className="testimonial-header">
                    <img src={Image} alt={Name} className="testimonial-avatar" />
                    <div className="testimonial-info">
                        <h3 className="testimonial-name">{Name}</h3>
                        <div className="testimonial-rating">
                            <span className="star">★</span>
                            <span className="star">★</span>
                            <span className="star">★</span>
                            <span className="star">★</span>
                            <span className="star">★</span>
                        </div>
                    </div>
                </div>
                <p className="testimonial-content">{Comment}</p>
            </div>
        </div>
    )
}

export default TestimonialCards;