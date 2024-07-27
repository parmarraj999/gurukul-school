import React from 'react'
import "./bigcard.css"
import AddmissionButton from '../../../../components/button/button'
import { motion } from 'framer-motion'

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
      <motion.div drag  dragConstraints={{
      top: -200,
      left: -150,
      right: 10,
      bottom: 150,
    }} className='btn-position'>
        <AddmissionButton text="Contact Now" background="black" color="white" width="210px" />
      </motion.div>
    </div>
  )
}

export default BigCard