import { Navigation } from "../components/navigation/navigation";
import { MiniBanner } from "../components/miniBanner/miniBanner";
import { Footer } from "../components/footer/footer";
import { Link } from 'react-router-dom';
import { AddInfo } from "../components/addInfo/addInfo";

import React from 'react'

export default function Ourteam() {
    
  return (
    <>
        <div className="sector2">
            <img className="About-bg-img" src="./images/hero/heroes-bg.png" alt=""></img>
            <Navigation />
            <div className="aboutDiv">
                <h1 style={{fontSize: "37px", margin:0, wordSpacing: "0.3rem"}}>Our Team</h1>
                <div className='homeLink'>
                    <Link to='/' className='a-Tag'>Home</Link>
                    <p>/</p>
                    <p>Our Team</p>
                </div>
            </div>
        </div>
        <AddInfo />
        <MiniBanner />
        <Footer />
    </>
  )
}
