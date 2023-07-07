import { Navigation } from "../components/navigation/navigation";
import { MiniBanner } from "../components/miniBanner/miniBanner";
import { Footer } from "../components/footer/footer";
import { Link } from 'react-router-dom'
import {OurTeam} from '../components/ourTeam/ourTeam'
import TeamInfo from "../components/teamInfo"

import React from 'react'

export default function Ourteam() {
    const pcards = TeamInfo.map(item=>{
        return(
            <OurTeam
                key = {item.id}
                img = {item.img}
                name = {item.name}
                position = {item.position}
            />
        )
    })
  return (
    <div className="main-container">
    <div className="mini-container">
        <div className="sector2">
            <Navigation />
            <div className="aboutDiv test">
                <h1 style={{fontSize: "37px", margin:0, wordSpacing: "0.3rem"}}>Our Team</h1>
                <div className='homeLink'>
                    <Link to='/' className='a-Tag'>Home</Link>
                    <p>/</p>
                    <p>Our Team</p>
                </div>
            </div>
        </div>
        <div className="carDivs active">
            {pcards}
        </div>
        <MiniBanner />
        <Footer />
    </div>
    </div>
  )
}
