import React, { useState } from 'react'
import "./upload-img.css"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from '../../../firebase/config';
import { addDoc, collection } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCancel, faClose, faPlus } from '@fortawesome/free-solid-svg-icons';

function UploadImg(props) {

  const [file, setFile] = useState(null);
  const [percent, setPercent] = useState(0)
  const [url, setUrl] = useState();

  const [clicked, setClicked] = useState(false)

  const uplaodImg = async () => { 
    setClicked(true)
    const imgRef = ref(storage, `images/${file?.name}`)
    const uplaodFile = uploadBytesResumable(imgRef, file)
    uplaodFile.on("state_changed",
      async (snapshot) => {
        const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setPercent(percent);
        if (percent === 100) {
        }
      },
      (err) => console.log("error in upload ", err),
      () => {
        getDownloadURL(uplaodFile.snapshot.ref).then(async (url) => {
          console.log("url", url)
          setUrl(url)
          if (url !== null) {
            const collectionRef = collection(db, `images/`)
            await addDoc(collectionRef, { imgUrl: url, fileName: file?.name })
            console.log("added to database")
            props.setCount((c) => c + 1)
          }
        })
      }
    )
  }

  const handleReset = () => {
    setFile(null);
    setPercent(0);
    setUrl("")
    setClicked(false)
  }

  console.log(percent)

  return (
    <div className='upload-img-container' >
      <div className='upload-img-form' >
        <h1 className='upload-title'>File Upload</h1>
        <div className='file-input' >
          <input type='file' onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <h4 className='file-name'>File Name : <span>{file?.name}</span></h4>
        <div className='progress-bar' >
          <div className='bar' style={{ width: `${percent}%` }} ></div>
        </div>
        <div className='upload-btn-container' >
          {
            clicked ? 
              percent === 100 ? 
              <>
              <button className='add-img-btn' onClick={handleReset} > Upload More</button>
              </> : ""
              :
              file === null ? <p style={{color:"red"}} >Choose Image to Upload</p> :
              <button className='add-img-btn' onClick={uplaodImg}> Upload Image</button>
          }
        </div>
      </div>
      <div className='close-form' onClick={()=>props.setShowPop(false)} >
        <FontAwesomeIcon icon={faClose}/>
      </div>
    </div>
  )
}

export default UploadImg