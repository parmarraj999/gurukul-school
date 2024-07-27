import React from 'react'
import "./teacherSection.css"

function TeacherSection() {
  return (
    <div className='teacher-section-container' >
        <div className='teacher-header-section' >
            <h1>Our</h1>
            <h2>Teachers</h2>
        </div>
        <div className='teacher-image-container' >
            <img src='../../../image/profile1.jpg' className='image-1' />
            <img src='../../../image/profile2.jpg' className='image-2' />
            <img src='../../../image/profile3.jpg' className='image-3' />
            <img src='../../../image/profile2.jpg' className='image-4' />
            <img src='../../../image/profile1.jpg' className='image-5' />
            <img src='../../../image/profile1.jpg' className='image-6' />
            <img src='../../../image/profile2.jpg' className='image-7' />
            <img src='../../../image/profile3.jpg' className='image-8' />
        </div>
    </div>
  )
}

export default TeacherSection