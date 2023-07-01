import React from 'react'
import './ourTeam.css'

export const OurTeam = (props) => {
  return (
    <div className='profile-Card'>
        <img src={props.img}  alt='' />
        <div className='profile-card-text'>
            <h2 style={{marginBottom : "0px", marginTop : "23px"}}>{props.name}</h2>
            <p style={{marginTop : "2px", fontSize: "1.1rem"}}>{props.position}</p>
        </div>
    </div>
  )
}
