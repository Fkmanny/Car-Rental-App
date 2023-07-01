import React from 'react'
import "./addInfo.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEnvelopeOpen, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';

export const AddInfo = () => {
  return (
    <div>
        <div>
            <h1>Need additional information?</h1>
            <p>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>
            <div>
                <h4><FontAwesomeIcon icon={faPhone} /> (562) 498-4600</h4>
                <h4><FontAwesomeIcon icon={faEnvelope} /> xyz@carrental.com</h4>
                <h4><FontAwesomeIcon icon={faHome}/> Level 1, 121 King Street Melbourne, 3000, Australia</h4>
            </div>
        </div>
        <div>
            <div>
                <label htmlFor="picktime">
                Full Name<span>*</span>
                </label>
                <input type="name"></input>
            </div>
            <div>
                <label htmlFor="picktime">
                Email Address<span>*</span>
                </label>
                <input type="Email Address"></input>
            </div>
            <div>
                <label htmlFor="picktime">
                Tell me about it<span>*</span>
                </label>
                <input type="text"></input>
            </div>
            <button><span><FontAwesomeIcon icon={faEnvelopeOpen} />Send Message</span></button>
        </div>
    </div>
  )
}
