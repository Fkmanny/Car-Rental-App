import React from 'react'
import "./addInfo.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEnvelopeOpen, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';

export const AddInfo = () => {
  return (
    <div>
        <img src= "./images/banners/map.png"alt='' style={{height: "80%", width : "100%" }} />

        <div className='AddInfoDiv'>
            <div className='AddInfoDiv1'>
                <h1 style={{fontSize : "44px", marginTop: 0, lineHeight : "3.5rem"}}>Need additional information?</h1>
                <p style={{width: "80%"}}>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>
                <div style={{marginTop : "40px"}}>
                    <h4><FontAwesomeIcon className='icons' icon={faPhone} /> (562) 498-4600</h4>
                    <h4><FontAwesomeIcon className='icons' icon={faEnvelope} /> Xyz@carrental.com</h4>
                    <h4 style={{lineHeight : "1.6rem"}}><FontAwesomeIcon className='icons' icon={faHome}/> Level 1, 121 King Street Melbourne, <span style={{marginLeft: "33px"}}>3000, Australia</span></h4>
                </div>
            </div>

            <div className='AddInfoDiv2'>
                <div>
                    <label >
                    Full Name<span>*</span>
                    </label>
                    <input className='input' type="name" placeholder='E.g: "Fk Manny'></input>
                </div>
                <div>
                    <label >
                    Email Address<span>*</span>
                    </label>
                    <input className='input' type="Email Address" placeholder='yourmail@example.com'></input>
                </div>
                <div>
                    <label >
                    Tell me about it<span>*</span>
                    </label>
                    <textarea className='textarea' type="text" placeholder='write here ...'></textarea>
                </div>
                <button><span><FontAwesomeIcon style={{marginRight: "10px"}} icon={faEnvelopeOpen} />Send Message</span></button>
            </div>
        </div>
        
    </div>
  )
}