import React from 'react'
import "./miniBanner.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

export const MiniBanner = () => {
  return (
    <div className='miniBanner'>
        <img className='bannerImg' src='./images/banners/book-banner.png' alt=''/>
        <div className='banner-text'>
            <h2>Book  a  car  by getting in touch with us</h2>
            <h2 className='h2'><FontAwesomeIcon icon={faPhone} className='phoneIcon'></FontAwesomeIcon>(562) 498-4600</h2>
        </div>
    </div>
  )
}
