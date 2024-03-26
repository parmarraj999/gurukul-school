import React from 'react'
import "./cardSection.css"

function CardSection() {
    return (
        <div className='card-section-container' >
            <div className='card-section' >
                <div className='card card1' >
                    <div className='card-text'>
                        <h2>600+</h2>
                        <h6>Students</h6>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took </p>
                </div>
                <div className='card card2' >
                    <div className='card-text'>
                        <h2>50+</h2>
                        <h6>Teachers</h6>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took </p>
                </div>
                <div className='card card3' >
                    <div className='card-text'>
                        <h2>20+</h2>
                        <h6>Years Experience</h6>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took </p>
                </div>
            </div>
        </div>
    )
}

export default CardSection