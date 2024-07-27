import React from 'react'
import "./header.css"
import { motion } from 'framer-motion'

function Header() {
  return (
    <div className='header-container' >
      <motion.div
        animate={{ opacity:1 }}
        initial={{ opacity:0 }}
        transition={{duration: 1,delay:6}}
       className='header-img' >
        <img src='../../../image/img-2.jpeg ' />
      </motion.div>
      <div className='slogan' >
        <motion.h2
         animate={{ y:0,opacity:1 }}
        initial={{ y:-50 ,opacity:0}}
        transition={{duration: 1,delay:6.2}}
        >Think</motion.h2>
        <motion.h2
        animate={{ y:0,opacity:1 }}
        initial={{ y:-50 ,opacity:0}}
        transition={{duration: 1,delay:6.3}}
        >Better</motion.h2>
        <motion.h2
        animate={{ y:0,opacity:1 }}
        initial={{ y:-50 ,opacity:0}}
        transition={{duration: 1,delay:6.4}}
        >Grow</motion.h2>
        <motion.h2
        animate={{ y:0,opacity:1 }}
        initial={{ y:-50 ,opacity:0}}
        transition={{duration: 1,delay:6.5}}
        >Better</motion.h2>
      </div>
      <div className='header-text-container' >
        <div style={{width:"100%",display:"flex",flexDirection:"column"}}>
          <motion.div 
            animate={{opacity:1 }}
            initial={{opacity:0}}
            transition={{duration: .6,delay:6.7}}
          className='header-tag' >an education for life</motion.div>
          <motion.h2
           animate={{opacity:1 }}
           initial={{opacity:0}}
           transition={{duration: .6,delay:6.8}}
          >gurukul gyan <br></br> mandir</motion.h2>
        </div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop pubpshing software pke Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    </div>
  )
}

export default Header