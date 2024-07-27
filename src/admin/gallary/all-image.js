import React, { useState, useEffect } from 'react'
import UploadImg from '../form/upload/uploadimg'
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db, storage } from '../../firebase/config';
import "./all-image.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { deleteObject, ref } from 'firebase/storage';

function AllImage() {

  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [showPop, setShowPop] = useState(false)

  const getImgData = async () => {
    const storeRef = collection(db, `images/`)
    const dataRef = await getDocs(storeRef)
    const allData = dataRef.docs.map(data =>
      ({ ...data.data(), id: data.id }))
    setData(allData)
    console.log(data)
  }
  useEffect(() => {
    getImgData()
    console.log(data)
  }, [count])

  return (
    <div className='all-image-container'>
      <div className='upload-div' onClick={() => setShowPop(true)} >
        <FontAwesomeIcon icon={faPlus} />
      </div>
      <div className='all-image-wrapper' >
        {
          data.map((data, key) => {
            return (
              <div className='images'>
                <img src={`${data.imgUrl}`} />
                <div className='delete-img' onClick={async()=>{
                  let imgRef = ref(storage, `images/${data.fileName}`)
                  await deleteDoc(doc(db, `images/${data.id}`))
                  deleteObject(imgRef).then(async () => {
                    console.log("delete successfully")
                    setShowPop(false)
                  })
                  setCount((c) => c + 1)
                }}  ><FontAwesomeIcon icon={faTrash}/></div>
              </div>
            )
          })
        }
      </div>
      {
        showPop ?
          <UploadImg setShowPop={setShowPop} setCount={setCount} />
          : ""
      }
    </div>
  )
}

export default AllImage