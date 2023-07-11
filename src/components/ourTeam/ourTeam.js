import React from 'react'
import './ourTeam.css'
import { motion } from 'framer-motion'

export const OurTeam = (props) => {
  return (
    <motion.div className='profile-Card'
    initial = {{ y : "110px", opacity: 1}}
    whileInView = {{ y : "10px", opacity: 1}}
    transition={{ delay: 0.1, 
      duration: 0.3,
      type: 'spring', 
      stiffness: 70
    }}
    viewport={{once : true}}   
    >
        <img src={props.img}  alt='' />
        <div className='profile-card-text'>
            <h2 style={{marginBottom : "0px", marginTop : "23px"}}>{props.name}</h2>
            <p style={{marginTop : "2px", fontSize: "1.1rem"}}>{props.position}</p>
        </div>
    </motion.div>
  )
}
