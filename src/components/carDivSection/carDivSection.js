import React from 'react'
import "./carDivSection.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faCar, faCarSide, faGaugeHigh, faStar } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion';

// This Component comprises of all the Vehicle cards on the Vehicle Models Page

export const CarDivSection = (props) => {
    
    const hoverNow = ()=>{
        const rand = 0;
        for (let index = 0; rand < 5; index++) {
        document.querySelector(`.carImg${index}`).classList.add('active');
        }
      }

  return (
    <motion.div onMouseOver={hoverNow} className={`carDiv carImg${props.id}`}
        initial = {{ y : "110px", opacity: 1}}
        whileInView = {{ y : "-15px", opacity: 1}}
        transition={{ delay: 0.1, 
        duration: 0.3,
        type: 'spring', 
        stiffness: 70
        }}
        viewport={{once : true}}
    >
        <div style={{overflow: "hidden"}}>
            <img src={`./${props.img}`}  alt='' />
        </div>
        <div className='card-text'>
            <div className='card-text1'>
                <div className='flex-col'>
                    <h3 style={{marginBottom: "10px"}}>{props.name}</h3>
                    <div style={{display: "flex"}}>
                    <FontAwesomeIcon className='star' icon={faStar} />
                    <FontAwesomeIcon className='star' icon={faStar} />
                    <FontAwesomeIcon className='star' icon={faStar} />
                    <FontAwesomeIcon className='star' icon={faStar} />
                    <FontAwesomeIcon className='star' icon={faStar} />
                    </div>
                </div>
                <div className='flex-col'>
                    <h3 style={{marginBottom: "5px"}}>${props.price}</h3>
                    <p>per day</p>
                </div>
            </div>
            <div className='flex bg'>
                <p><FontAwesomeIcon className='iconss' icon={faCar} />{props.type}</p>
                <p><FontAwesomeIcon className='iconss' icon={faCarSide} />{props.doors} Doors</p>
            </div>
            <div className='flex'>
                <p><FontAwesomeIcon className='iconss' icon={faBriefcase} />{props.luggage} Luggages</p>
                <p><FontAwesomeIcon className='iconss' icon={faGaugeHigh} />{props.transmission}</p>
            </div>
        </div>
        <div className='BRBtn'>
        <button><span>Book Ride</span></button>
        </div>
    </motion.div>
  )
}
