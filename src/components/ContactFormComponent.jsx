import React from 'react';
import '../assets/style/ContactFormComponent.css';
import Button from '../components/Button';

const ContactFormComponent = () => {
    return (
        <div className="contact-us">
            <h2>Contact Us</h2>
            <form action="post">
                <div className="form-group">
                    <input type="text" id="name" name="name" placeholder="Name" />
                    <input type="text" id="last-name" name="last-name" placeholder="Last Name" />
                </div>
                <div className="form-group">
                    <input type="tel" id="phone" name="phone" placeholder="Phone" />
                    <input type="email" id="email" name="email" placeholder="Email" />
                </div>
                <input type="text" id="message" name="message" placeholder="Message" />
                <Button text="Submit"/>
            </form>
        </div>
    );
};

export default ContactFormComponent;
