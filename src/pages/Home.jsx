import React from 'react'
import '../assets/style/Home.css'
import Button from '../components/button'

import useTyped from '../hooks/useTyped';

export const Home = () => {
  useTyped('#typed', {
    strings: [
      'Welcome to OMNICOM.',
      'Integral and Sustainable Energy Solutions.',
      'Successful projects in Colombia and Virginia.'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1500,
    startDelay: 1000,
    loop: true,
    showCursor: true,
    cursorChar: '|',
    smartBackspace: true,
    fadeOut: true,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 500,
  });
  return (
    <section className="animate-container">
      <h1 className="animate__animated animate__pulse">OMNICOM</h1>
      <div className="typewriter">
        <span id="typed"></span>
      </div>
      <p className="descripcion animate__animated animate__fadeInUp">
        OCRE is a micro-enterprise dedicated to offering integrated solutions in electricity, air conditioning (HVAC), renewable energy, and energy efficiency. With successful projects in Colombia and Virginia, we are looking to expand our operations and secure financing for new projects.
      </p>
      <div className='animate__animated animate__fadeInUp'>
        <Button text="Get to Know Us More" />
      </div>
    </section>
  )
}
