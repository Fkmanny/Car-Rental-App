import React, {useEffect, useState} from 'react'
import "../footer/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion';

export const Footer = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(()=>{
    const btnEl99 = document.querySelector(".btn99");
btnEl99.addEventListener("mouseover", (event) => {
    const x = event.pageX - btnEl99.offsetLeft;
    const y = event.pageY - btnEl99.offsetTop;
    btnEl99.style.setProperty("--xPos", x + "px");
    btnEl99.style.setProperty("--yPos", y + "px");
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 2000) {
    setShowButton(true);
  } else {
    setShowButton(false);
  }
});
  })

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  return (
    <footer>
          <div className="topFooter">
            <motion.div className="carRental footer1"
                initial = {{ x : "-410px" }}
                whileInView = {{ x : 0}}
                transition={{ delay: 0.4, 
                  duration: 1,
                  type: 'spring', 
                  stiffness: 45
                }}
                viewport={{once : true}}
            >
              <h3>CAR <span style={{fontWeight: 400}}>Rental</span></h3>
              <p>Use securing confined his shutters. Delightful as he it acceptance an solicitude discretion.</p>
              <div>
                <a href="/"><FontAwesomeIcon className='icons' icon={faPhone} />(123) 498-4600</a>
                <a href="/"><FontAwesomeIcon className='icons' icon={faEnvelope} />example@carrental.com</a>
              </div>
              
            </motion.div>
            
            <motion.div className="carRental footer2"
                  initial = {{ x : "-610px" }}
                  whileInView = {{ x : 0}}
                  transition={{ delay: 0.2, 
                    duration: 1,
                    type: 'spring', 
                    stiffness: 45
                  }}
                  viewport={{once : true}}
            >
              <h3>COMPANY</h3>
              <ul>
                <li><a href="/">New York</a></li>
                <li><a href="/">Careers</a></li>
                <li><a href="/">Mobile</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">How we work</a></li>
              </ul>
            </motion.div>

            <motion.div className="carRental footer3"
                initial = {{ x : "610px" }}
                whileInView = {{ x : 0}}
                transition={{ delay: 0.2, 
                  duration: 1,
                  type: 'spring', 
                  stiffness: 45
                }}
                viewport={{once : true}}
            >
              <h3>WORKING HOURS</h3>
              <p>Mon - Fri: <span>09:00AM - 09:00PM</span></p>
              <p>Sat: <span>09:00AM - 07:00PM</span></p>
              <p>Sun: <span>Closed</span></p>
            </motion.div>

            <motion.div className="carRental footer4"
                initial = {{ x : "410px" }}
                whileInView = {{ x : 0}}
                transition={{ delay: 0.4, 
                  duration: 1,
                  type: 'spring', 
                  stiffness: 45
                }}
                viewport={{once : true}}
            >
              <h3>SUBSCRIPTION</h3>
              <p>Subscribe your Email address for latest news & updates.</p>
              <div>
                <input type="email" placeholder="Enter Email Address"/>
                <button className="btn99"><span>Submit</span></button>
              </div>
            </motion.div>
            
          </div>
          <motion.div className="bottomFooter"
                initial = {{ opacity : 0}}
                whileInView = {{ opacity : 1}}
                transition={{ delay: 0.4, 
                  duration: 1.5,

                }}
                viewport={{once : true}}
          >
            <a href="https://xpeedstudio.com/"> Design by XpeedStudio </a>
            <p>©2023 Car Rental. Development by <b style={{color: "black"}}>Emmanuel</b> </p>
          </motion.div>
          {showButton && (
              <FontAwesomeIcon onClick={scrollToTop} icon={faAngleUp} size="2xl" className="icon10" />
          )}
         
        </footer>
  )
}
