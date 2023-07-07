import { Navigation } from "../components/navigation/navigation";
import { MiniBanner } from "../components/miniBanner/miniBanner";
import { Footer } from "../components/footer/footer";
import { Link } from 'react-router-dom';
import { AddInfo } from "../components/addInfo/addInfo";

import React from 'react'

export default function Ourteam() {
    
  return (
    <div className="main-container">
    <div className="mini-container">
        <div className="sector2">
            <Navigation />
            <div className="aboutDiv test2">
                <h1 style={{fontSize: "37px", margin:0, wordSpacing: "0.3rem"}}>Contact</h1>
                <div className='homeLink'>
                    <Link to='/' className='a-Tag'>Home</Link>
                    <p>/</p>
                    <p>Contact</p>
                </div>
            </div>
        </div>
        <AddInfo />
        <MiniBanner />
        <Footer />
    </div>
    </div>
  )
}
