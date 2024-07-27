import React from 'react'
import "./footer.css"
import AddmissionButton from '../../components/button/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion'

function Footer() {
    return (
        <div className='footer-container' >
            <div className='footer-logo-container' >
                <img src='../../../image/logo.png' />
            </div>
            <div className='name-logo' >
                gurukul gyan mandir
            </div>
            <div className='footer-wrapper' >
                <div className='footer-texts' >
                    <h1>Get In <br></br> Touch</h1>
                    <AddmissionButton text="contact Now" background="white" color="black" width="200px" />
                </div>
                <div className='footer-links' >
                    <div className='contact-container'>
                        <h1>+91 1231231239</h1>
                        <h1>+91 1231231239</h1>
                    </div>
                    <div className='contact-container'>
                        <div className='icons-footer' ><FontAwesomeIcon icon={faInstagram} /><FontAwesomeIcon icon={faFacebook} /><FontAwesomeIcon icon={faWhatsapp} /></div>
                    </div>
                    <div className='contact-container'>
                        <div className='address-footer' ><span>Address:-</span>  Krishi Upaj Mandi Rd,
                            Narsinghpur,
                            Madhya Pradesh 487001</div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Footer