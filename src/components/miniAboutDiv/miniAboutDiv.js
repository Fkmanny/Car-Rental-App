import React from 'react'
import "./miniAboutDiv.css"
import { Link } from 'react-router-dom'

//This is the Mini About Component at the top left of the other pages

export const MiniAboutDiv = () => {
  return (
    <div className="aboutDiv">
          <h1 style={{fontSize: "37px", margin:0}}>About</h1>
          <div className='homeLink'>
            <Link to='/' className='a-Tag'>Home</Link>
            <p>/</p>
            <p>About</p>
          </div>
      </div>
  )
}
