import React from 'react'
import "./miniBanner.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion';

export const MiniBanner = () => {
  return (
    <motion.div className='miniBanner'
    initial = {{ y : "110px", opacity: 1}}
    whileInView = {{ y : "-15px", opacity: 1}}
    transition={{ delay: 0.1, 
      duration: 0.3,
      type: 'spring', 
      stiffness: 70
    }}
    viewport={{once : true}}
    >
        <img className='bannerImg' src='./images/banners/book-banner.png' alt=''/>
        <div className='banner-text'>
            <h2>Book  a  car  by getting in touch with us</h2>
            <h2 className='h2'><FontAwesomeIcon icon={faPhone} className='phoneIcon'></FontAwesomeIcon>(562) 498-4600</h2>
        </div>
    </motion.div>
  )
}
