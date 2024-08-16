import React from 'react'
import '../assets/style/Home.css'

export const Title = ({ text }) => {
    return (
        <h1 className="animate__animated animate__pulse">
            {text}
        </h1>
    )
}

export default Title;