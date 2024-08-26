import React from 'react'
import '../assets/style/Titleh2.css'

export const Titleh2 = ({ text }) => {
  return (
    <h2 className="secondary-title  animate__animated animate__pulse">
      {text}
    </h2>
  )
}

export default Titleh2;