import React from 'react'
import "./addmissionBtn.css"
import { Link } from 'react-router-dom'

function AddmissionBtn() {
  return (
    <Link to="/addmission" className='addmission-btn-container' >
        <h5>Admission</h5>
        <h6>Enquiry</h6>
    </Link>
  )
}

export default AddmissionBtn