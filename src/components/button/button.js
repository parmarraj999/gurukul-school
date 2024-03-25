import React from 'react'
import "./button.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function AddmissionButton(props) {
  return (
    <div className='addmission-btn' style={{background:`${props.background}`,color:`${props.color}`,width:`${props.width}`}}>
        <h3>
            {props.text}
        </h3>
        <div className='button-icon'>
            <FontAwesomeIcon icon={faArrowRight} className='arrow-icon'/>
        </div>
    </div>
  )
}

export default AddmissionButton