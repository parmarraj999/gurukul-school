import React, { useEffect, useState } from 'react'
import './loader.css'
import { motion } from 'framer-motion'

function Loader() {

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000);
  })

  return (
    <div className={loading ? "loader-container" : "loading-container height80"} >
      <div className='loader-text'>
        <motion.h1
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 1,delay:.5 }}
        >Think <motion.span
          animate={{ color:"#0094FF"}}
          initial={{ color:"#ffffff" }}
          transition={{ delay:1,duration: .5}}
        >Better</motion.span></motion.h1>
        <motion.h1
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >Grow <motion.span
        animate={{ color:"#0094FF"}}
        initial={{ color:"#ffffff" }}
        transition={{ delay:1.4,duration: .5}}
        >Better</motion.span></motion.h1>
      </div>
    </div>
  )
}

export default Loader