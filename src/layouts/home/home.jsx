import React from 'react'
import "./home.css"
import Header from './home-component/header/header'
import AddmissionBtn from '../../components/addmission-btn/addmissionBtn'

function Home() {
  return (
    <div className='home-container'>
      <Header/>
      <AddmissionBtn/>
    </div>
  )
}

export default Home