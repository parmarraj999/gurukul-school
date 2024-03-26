import React from 'react'
import "./home.css"
import Header from './home-component/header/header'
import AddmissionBtn from '../../components/addmission-btn/addmissionBtn'
import CardSection from './home-component/cardSection/cardSection'

function Home() {
  return (
    <div className='home-container'>
      <Header />
      <div className='home-wrapper' >
        <CardSection />
      </div>
      <AddmissionBtn />
    </div>
  )
}

export default Home