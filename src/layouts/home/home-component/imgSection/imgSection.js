import React from 'react'
import "./imgSection.css"

function ImgSection(props) {
  return (
    <div className='img-section-container' style={{backgroundImage:`${props.imgUrl}`}}  >
        <div className='stripe-container' style={{background:`${props.bgColor}`}}>
          <h1>{props.text} <span></span> {props.text}  <span></span> {props.text}</h1>
        </div>
    </div>
  )
}

export default ImgSection