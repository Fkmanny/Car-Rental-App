import React from 'react'
import "./carDivSection.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faCar, faCarSide, faGaugeHigh, faStar } from '@fortawesome/free-solid-svg-icons'

export const CarDivSection = (props) => {
    

  return (
    <div className='carDiv'>
        <img src={`./${props.img}`}  alt='' />
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
    </div>
  )
}
