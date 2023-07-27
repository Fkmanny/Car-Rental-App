import React, { useEffect}from 'react'
import "../faq/faq.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion';

// This is the Frequently Asked Questions Component

export const Faq = () => {

  // Frequently Asked Questions dropdown effect
  useEffect(() => {
    const faqButton1 = document.getElementById("faqButton1");
    faqButton1.addEventListener("mouseover", (event) => {
      const x = event.pageX - faqButton1.offsetLeft;
      const y = event.pageY - faqButton1.offsetTop;
      faqButton1.style.setProperty("--xPos", x + "px");
      faqButton1.style.setProperty("--yPos", y + "px");
  });
  const faqButton2 = document.getElementById("faqButton2");
  faqButton2.addEventListener("mouseover", (event) => {
      const x = event.pageX - faqButton2.offsetLeft;
      const y = event.pageY - faqButton2.offsetTop;
      faqButton2.style.setProperty("--xPos", x + "px");
      faqButton2.style.setProperty("--yPos", y + "px");
  });
   const faqButton3 = document.getElementById("faqButton3");
  faqButton3.addEventListener("mouseover", (event) => {
      const x = event.pageX - faqButton3.offsetLeft;
      const y = event.pageY - faqButton3.offsetTop;
      faqButton3.style.setProperty("--xPos", x + "px");
      faqButton3.style.setProperty("--yPos", y + "px");
  });
   
    
  })
  function change(id){


   
      const randnum = 3;
  
      for (let index = 1; index <= randnum; index++) {
        const AllfaqBtn = document.querySelector(`.faqButton${index}`);
        AllfaqBtn.classList.remove('active');
        const AllfaQAns = document.querySelector(`.faqBtn${index}Answer`);
        AllfaQAns.classList.remove('active');
        const faqIcons = document.querySelector(`.icon${index}`);
        faqIcons.classList.remove('active');
      }
  
      const clickedfaqBtn = document.querySelector(`#faqButton${id}`);
      const clickedfaqAns = document.querySelector(`#faqBtn${id}Answer`);
      const clickedIcon = document.querySelector(`.icon${id}`);
  
  
      clickedfaqBtn.classList.add('active');
      clickedfaqAns.classList.add('active');
      clickedIcon.classList.add('active');
      
    
    
    }

 

  return (
    <motion.section className="faq"
    initial = {{ y : "110px", opacity: 1}}
    whileInView = {{ y : "-15px", opacity: 1}}
    transition={{ delay: 0, 
      duration: 0.3,
      type: 'spring', 
      stiffness: 70
    }}
    viewport={{once : true}}
    >
        <h3 style={{margin: 0, fontFamily: "Rubik, sans-serif", fontWeight: 500}}>FAQ</h3>
        <h1 style={{fontSize: "45px", margin: "5px 0 10px 0"}}>Frequently Asked Questions</h1>
        <p  style={{width: "50%", textAlign: "center", lineHeight: "1.55rem", marginBottom: "40px"}}>Frequently Asked Questions 
        About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.
        </p>

        {/* === FAQ Dropdown 1 ============================================== */}


        <button onClick={() => {change(1);}} className='fBtn faqButton1 active' id='faqButton1'><span>1. What is special about comparing rental car deals?</span>
        <FontAwesomeIcon icon={faAngleDown} className='icon1 active ic' size='xl'></FontAwesomeIcon>
        </button>
        <div className='faqBtn1Answer active' id='faqBtn1Answer'>
          <p>Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. 
          You can find car rental deals by researching online and comparing prices from different rental companies.
          </p>
        </div>

        {/* === FAQ Dropdown 2 ============================================== */}


        <button onClick={() => {change(2);}} className='fBtn faqButton2' id='faqButton2'><span>
          2. How do I find the car rental deals?
          </span>
          <FontAwesomeIcon icon={faAngleDown} className='ic icon2' size='xl'></FontAwesomeIcon>
        </button>
        <div className='faqBtn2Answer' id='faqBtn2Answer'>
          <p>You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options.
          It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.
          </p>
        </div>
        
        {/* === FAQ Dropdown 3 ============================================== */}

        <button onClick={() => {change(3);}} className='fBtn faqButton3' id='faqButton3'><span>3. How do I find such low rental car prices?</span>
        <FontAwesomeIcon icon={faAngleDown} className='ic icon3' size='xl'></FontAwesomeIcon>
        </button>
        <div className='faqBtn3Answer' id='faqBtn3Answer'>
          <p>Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: 
          Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.
          </p>
        </div>


    </motion.section>
  )
}
