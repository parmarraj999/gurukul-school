import React from 'react'
import "./bigcard.css"
import AddmissionButton from '../../../../components/button/button'

function BigCard() {
  return (
    <div className='big-card-container' >
      <div className='big-card' >
        <div className='big-card-text' >
          <h2>A new<br></br>way of<br></br>Education</h2>
          <h3>gurukul</h3>
        </div>
        <div className='big-card-image' >
          <img src='../../../image/library.jpg' />
        </div>
      </div>
      <div className='btn-position'>
        <AddmissionButton text="Contact Now" background="black" color="white" width="200px" />
      </div>
    </div>
  )
}

export default BigCard