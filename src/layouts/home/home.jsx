import React, { useEffect } from 'react'
import "./home.css"
import Header from './home-component/header/header'
import AddmissionBtn from '../../components/addmission-btn/addmissionBtn'
import CardSection from './home-component/cardSection/cardSection'
import BigCard from './home-component/bigCard/bigCard'
import FocusSection from './home-component/focusSection/focusSection'
import SportSection from './home-component/sportSection/sportSection'
import TourSection from './home-component/tourSection/tourSection'
import ImgSection from './home-component/imgSection/imgSection'
import TeacherSection from './home-component/teacherSection/teacherSection'
import NumberSeciton from './home-component/numberSection/numberSeciton'
import Footer from '../footer/footer'
import { useScroll } from 'framer-motion'

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
        <ImgSection imgUrl="url(../../../../../../image/computeLab.jpg)" bgColor="#B4F300" text="computer lab"/>
        <ImgSection imgUrl="url(../../../../../../image/playground.jpg)" bgColor="#FF00D6"  text="playground" />
        <ImgSection imgUrl="url(../../../../../../image/chemistry-lab.jpg)" bgColor="#0075FF"  text="chemisrty lab"/>
        <TeacherSection/>
        <NumberSeciton/>
      <AddmissionBtn />
      <Footer/>
    </div>
  )
}

export default Home