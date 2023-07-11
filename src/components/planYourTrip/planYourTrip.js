import React from 'react';
import "../planYourTrip/planYourTrip.css";
import { motion } from 'framer-motion';


export const PlanYourTrip = () => {

  const hoverNow = ()=>{
    const rand = 3;
    for (let index = 1; rand <= 3; index++) {
    document.querySelector(`.obj${index}`).classList.add('active');
    }
  }

  return (
    <motion.section className="planYourTrip"
    initial = {{ y : "70px", opacity: 1}}
    whileInView = {{ y : 0, opacity: 1}}
    transition={{ delay: 0.1, 
      duration: 0.3,
      type: 'spring', 
      stiffness: 90
    }}
    viewport={{once : true}}
    >
              <h3 style={{marginBottom: "13px", fontWeight: 500,}}>Plan your trip now</h3>
              <h1 style={{marginTop: 0, fontSize: "45px"}}>Quick & easy car rental</h1>
              <div className="section2Div">
                  <div onMouseOver={hoverNow} className="sect2 obj1">
                      <img src="images/plan/icon1.png" alt=""/>
                      <h2 style={{margin:0}}>Select Car</h2>
                      <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
                  </div>
                  <div onMouseOver={hoverNow} className="sect2 obj2">
                      <img src="images/plan/icon2.png" alt=""/>
                      <h2 style={{margin:0}}>Contact Operator</h2>
                      <p>Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
                  </div>
                  <div onMouseOver={hoverNow} className="sect2 obj3">
                      <img style={{marginTop: "23px"}} src="images/plan/icon3.png" alt=""/>
                      <h2 style={{margin:0}}>Let's Drive</h2>
                      <p>Whether you're hitting the open road, we've got you covered with our wide range of cars</p>
                  </div>
              </div>
              
            
          </motion.section>
  )
}
