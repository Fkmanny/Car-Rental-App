import React from 'react'
import "../section1/section1.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { motion } from 'framer-motion';



export const Section1 = () => {

  useEffect(()=>{
    const btnEln = document.querySelector(".btnn");
    btnEln.addEventListener("mouseover", (event) => {
        const x = event.pageX - btnEln.offsetLeft;
        const y = event.pageY - btnEln.offsetTop;
        btnEln.style.setProperty("--xPos", x + "px");
        btnEln.style.setProperty("--yPos", y + "px");
    });
    
    const btnEl2 = document.querySelector(".btn2");
    btnEl2.addEventListener("mouseover", (event) => {
        const x = event.pageX - btnEl2.offsetLeft;
        const y = event.pageY - btnEl2.offsetTop;
        btnEl2.style.setProperty("--xPos", x + "px");
        btnEl2.style.setProperty("--yPos", y + "px");
    });
  })

   const scrollToForm = () => {
      window.scrollTo({
        top: 580,
        behavior : 'smooth'
      });
   }
  
  return (
    <div className='section1'>
            <motion.div className="sect1-text" 
                initial = {{ x : "-700px"}}
                animate = {{ x : 0}}
                transition={{ delay: 0.4,
                  type: 'spring', 
                  duration: 2.5,
                  stiffness: 30
                }}
            >
                <h3>Plan your trip now</h3>
                <h1>Save <span className='orangered'>big</span> with our car rental</h1>
                <p>To contribute to positive change and achieve our sustainability goals with many extraordinary.</p>
                <div className="sect1-buttons">
                    <button className="btnn" onClick={scrollToForm}><span>Book Ride<FontAwesomeIcon className='icon' icon={faCircleCheck} /></span></button>
                    <button className="btn2"><span>Learn More<FontAwesomeIcon className='icon' icon={faAngleRight} /></span></button>
                </div>
            </motion.div>
            <motion.div className="div"
                initial = {{ x : "900px"}}
                animate = {{ x : 0}}
                transition={{ delay: 0.4, 
                  duration: 2.5,
                  type: 'spring', 
                  stiffness: 30
                }}       
            >
              <img src="images/hero/main-car.png" alt=""/>
            </motion.div>
    </div>
  )
  
}
