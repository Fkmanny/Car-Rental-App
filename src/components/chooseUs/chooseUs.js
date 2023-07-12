import React, {useEffect} from 'react'
import "../chooseUs/chooseUs.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

export const ChooseUs = () => {

  const hoverNow = ()=>{
    const rand = 3;
    for (let index = 4; rand <= 6; index++) {
    document.querySelector(`.obj${index}`).classList.add('active');
    }
  }

  useEffect(()=>{
    const btnEl33 = document.querySelector(".btn33");
btnEl33.addEventListener("mouseover", (event) => {
    const x = event.pageX - btnEl33.offsetLeft;
    const y = event.pageY - btnEl33.offsetTop;
    btnEl33.style.setProperty("--xPos", x + "px");
    btnEl33.style.setProperty("--yPos", y + "px");
});
  })
  return (
    <motion.section className="chooseUs"
    initial = {{ y : "110px", opacity: 1}}
    whileInView = {{ y : "-15px", opacity: 1}}
    transition={{ delay: 0, 
      duration: 0.3,
      type: 'spring', 
      stiffness: 70
    }}
    viewport={{once : true}}
    >
      <img style={{width: "1150px"}} src="images/chooseUs/main.png" alt=""/>
      <div className="chooseContainers">
        <div className="why">
          <h3 style={{fontWeight: 500, margin: 0}}>Why Choose Us</h3>
          <h1 style={{fontSize: "45px", fontWeight: 700, margin: "10px 0 30px 0", lineHeight: "3.3rem"}}>Best valued deals you will ever find</h1>
          <p>Thrown shy denote ten ladies though ask saw. Or by to he going think order event music.
            Incommode so intention defective at convinced. Led income months itself and houses you.
          </p>
          <button className="btn33"><span>Find Deals <FontAwesomeIcon icon={faAngleRight} style={{marginLeft: "10px"}}/></span></button>
        </div>
        <div className="why2">
          <motion.div onMouseOver={hoverNow} className="why2sub obj4"
              initial = {{ x : "40vw", opacity: 1}}
              whileInView = {{ x : 0, opacity: 1}}
              transition={{ delay: 0.1, 
                duration: 0.3,
                type: 'spring', 
                stiffness: 40
              }}
              viewport={{once : true}}
          >
            <img src="images/chooseUs/icon1.png" alt=""/>
            <div>
              <h3>Cross Country Drive</h3>
              <p>Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced.</p>
            </div>
          </motion.div>
          <motion.div onMouseOver={hoverNow} className="why2sub obj5"
              initial = {{ x : "40vw", opacity: 1}}
              whileInView = {{ x : 0, opacity: 1}}
              transition={{ delay: 0.15, 
                duration: 0.3,
                type: 'spring', 
                stiffness: 40
              }}
              viewport={{once : true}}
          >
            <img src="images/chooseUs/icon2.png" alt=""/>
            <div>
              <h3>All Inclusive Pricing</h3>
              <p>Yet uncommonly his ten who diminution astonished. Demesne new manners savings staying had.</p>
            </div>
          </motion.div>
          <motion.div onMouseOver={hoverNow} className="why2sub obj6"
              initial = {{ x : "40vw", opacity: 1}}
              whileInView = {{ x : 0, opacity: 1}}
              transition={{ delay: 0.2, 
                duration: 0.3,
                type: 'spring', 
                stiffness: 40
              }}
              viewport={{once : true}}
          >
            <img src="images/chooseUs/icon3.png" alt=""/>
            <div>
              <h3>No Hidden Charges</h3>
              <p>Under folly balls death own point now men. Match way these she avoid see. She whose drift their fat off..</p>
            </div>
          </motion.div>
        </div>
      </div>
   </motion.section>
  )
}
