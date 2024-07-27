import React from 'react'
import "./dashboard.css"
import UploadImg from './form/upload/uploadimg'
import AllImage from './gallary/all-image'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Dashboard() {
  return (
    <div className='dashboard-container' >
      <div className='dash-nav' >
      <Link className='link' to='/admin/allImage'>All Images <FontAwesomeIcon icon={faArrowRight}/></Link>
      </div>
      <div className='construction-container'>
        <img src='../../../image/construction.gif' />
      </div>
      <Outlet/>
    </div>        
  )
}

export default Dashboard