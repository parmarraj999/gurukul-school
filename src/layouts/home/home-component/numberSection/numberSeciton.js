import React from 'react'
import './numberSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function NumberSeciton() {
  return (
    <div className='number-section-container' >
        <div className='input-box' >
            <div className='padding'>
                <h5>ENTER NUMBER</h5>
                <input type='type' />
            </div>
            <div className='input-btn' >
                <FontAwesomeIcon icon={faArrowRight}/>
            </div>
        </div>
    </div>
  )
}

export default NumberSeciton