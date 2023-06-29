import React from 'react'
import "../saveCheap/saveCheap.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

export const SaveCheap = () => {

 


  return (
    <section className="saveCheapSection">
            <div className="backgroundImage"></div>
            <div className="innerSP">
              <div className="innerSPLeft">
                <h1 style={{fontWeight: 700}}>Save big with our cheap car rental!</h1>
                <h3 style={{fontWeight: 400}}>Top Airports. Local Suppliers. 24/7 Support.</h3>
              </div>
              <button className="bookRide"><span>Book Ride <FontAwesomeIcon style={{marginLeft: "10px"}} icon={faCircleCheck} /></span></button>
            </div>
    </section>
  )
}
