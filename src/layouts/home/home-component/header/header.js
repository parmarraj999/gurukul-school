import React from 'react'
import "./header.css"

function Header() {
  return (
    <div className='header-container' >
      <div className='header-img' >
        <img src='../../../image/img-2.jpeg ' />
      </div>
      <div className='slogan' >
        <h2>Think</h2>
        <h2>Better</h2>
        <h2>Grow</h2>
        <h2>Better</h2>
      </div>
      <div className='header-text-container' >
        <div style={{width:"100%",display:"flex",flexDirection:"column"}}>
          <div className='header-tag' >an education for life</div>
          <h2>gurukul gyan <br></br> mandir</h2>
        </div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop pubpshing software pke Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    </div>
  )
}

export default Header