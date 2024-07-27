import React, { useEffect, useState } from 'react'
import './gallary.css'
import axios from "axios"
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';

function Gallary() {

    const [data,setData] = useState([]);

    const getImgData = async () => {
      const storeRef = collection(db, `images`)
      const dataRef = await getDocs(storeRef)
      const allData = dataRef.docs.map(data =>
        ({ ...data.data(), id: data.id }))
      setData(allData)
      console.log(data)
    }
    useEffect(() => {
      getImgData()
      console.log(data)
    }, [])

  return (
    <div className='gallary-container'>
        {
          data.map((data,key)=>{
            return(
              <div className='gallary-images' >
                <img src={`${data.imgUrl}`} />
              </div>
            )
          })
        }
    </div>
  )
}

export default Gallary