import React from 'react'
import "./cardSection.css"
import { motion } from 'framer-motion'

function CardSection() {
    return (
        <div className='card-section-container' >
            <div className='card-section' >
                <div className='card card1' >
                    <div className='card-img' >
                        <h2>600+</h2>
                    </div>
                    <div className='card-text'>
                        <h6>Students</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took </p>
                    </div>
                </div>
                <div className='card card2' >
                    <div className='card-img' >
                        <h2>50+</h2>
                    </div>
                    <div className='card-text'>
                        <h6>Teachers</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took </p>
                    </div>
                </div>
                <div className='card card3' >
                    <div className='card-img' >
                        <h2>20+</h2>
                    </div>
                    <div className='card-text'>
                        <h6>Years Experience</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardSection