import React from 'react'
import "./tourSection.css"
import AddmissionButton from '../../../../components/button/button'

function TourSection() {
  return (
    <div className='tour-section-container' >
        <div className='tour-text-container' >
            <h1>Tours <br></br><span>by Us</span></h1>
            <AddmissionButton text="visit us" color="white" width="200px" background="black" />
        </div>
        <div className='tour-image-container' >
            <img src='../../../image/tourImg1.jpg'/>
            <img src='../../../image/tourImg2.jpg'/>
            <img src='../../../image/tourImg3.jpg'/>
        </div>
    </div>
  )
}

export default TourSection