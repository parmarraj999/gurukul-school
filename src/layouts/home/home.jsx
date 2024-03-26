import React from 'react'
import "./home.css"
import Header from './home-component/header/header'
import AddmissionBtn from '../../components/addmission-btn/addmissionBtn'
import CardSection from './home-component/cardSection/cardSection'
import BigCard from './home-component/bigCard/bigCard'
import FocusSection from './home-component/focusSection/focusSection'
import SportSection from './home-component/sportSection/sportSection'
import TourSection from './home-component/tourSection/tourSection'

function Home() {
  return (
    <div className='home-container'>
      <Header />
      <div className='home-wrapper' >
        <CardSection />
        <BigCard/>
      </div>
        <FocusSection/> 
        <SportSection/>
        <TourSection/>
      <AddmissionBtn />
    </div>
  )
}

export default Home