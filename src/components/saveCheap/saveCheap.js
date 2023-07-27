import React from 'react'
import "../saveCheap/saveCheap.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion';

 // This is the SaveCheap Component

export const SaveCheap = () => {

  return (
    <motion.section className="saveCheapSection"
      initial = {{ y : "110px", opacity: 1}}
      whileInView = {{ y : "-15px", opacity: 1}}
      transition={{ delay: 0, 
        duration: 0.3,
        type: 'spring', 
        stiffness: 70
      }}
      viewport={{once : true}}
    >
            <div className="backgroundImage"></div>
            <div className="innerSP">
              <div className="innerSPLeft">
                <h1 style={{fontWeight: 700}}>Save big with our cheap car rental!</h1>
                <h3 style={{fontWeight: 400}}>Top Airports. Local Suppliers. 24/7 Support.</h3>
              </div>
              <button className="bookRide"><span>Book Ride <FontAwesomeIcon style={{marginLeft: "10px"}} icon={faCircleCheck} /></span></button>
            </div>
    </motion.section>
  )
}
