import React from 'react'
import "../aboutUs/aboutUs.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

export const AboutUs = () => {
  return (
    <section className="aboutUs">
    <img src="images/about/about-main.jpg" style={{width: "400px", height: "414px"}}  alt=""/>
    <FontAwesomeIcon className='yt_icon' icon={faYoutube} />
    <div className="aboutUs-text">
        <h3 style={{margin: "0 0 5px 0", padding: 0, fontWeight: 500}}>About Company</h3>
        <h1 style={{margin: "0 0 30px 0", padding: 0, fontSize: "44px", lineHeight: "3.3rem"}}>You start the engine and your adventure begins</h1>
        <p style={{lineHeight: "1.5rem"}}>Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. 
            Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.
        </p>
        <div>
            <div className="about">
              <img src="images/about/icon1.png" alt=""/>
              <div>
                <h1 className="carTypeValue">20</h1>
                <h4>Car Types</h4>
              </div>
            </div>
            <div className="about">
              <img src="images/about/icon2.png" alt=""/>
              <div>
                <h1 className="rentalValue">85</h1>
                <h4>Rental Outlets</h4>
              </div>
            </div>
            <div className="about">
              <img src="images/about/icon2.png" alt=""/>
              <div>
                <h1 className="repairValue">75</h1>
                <h4>Repair Shop</h4>
              </div>
            </div>
        </div>
    </div>
  </section>
  )
}
