import React from 'react'
import "./focusSection.css"

function Tag(props) {
  return (
    <div className='tag-container' style={{color:`${props.color}`}}>{props.text}</div>
  )
}

export default Tag