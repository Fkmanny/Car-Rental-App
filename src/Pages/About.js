import { Navigation } from "../components/navigation/navigation";
import { AboutUs } from "../components/aboutUs/aboutUs";
import { PlanYourTrip } from "../components/planYourTrip/planYourTrip";
import { SaveCheap } from "../components/saveCheap/saveCheap";
import { ChooseUs } from "../components/chooseUs/chooseUs";
import { MiniBanner } from "../components/miniBanner/miniBanner";
import { Footer } from "../components/footer/footer";
import React from 'react'
import { Link } from 'react-router-dom'


function About(){
  return (
    <>
    <div className="sector2">
      <img className="About-bg-img" src="./images/hero/heroes-bg.png" alt=""></img>
      <Navigation />
      <div className="aboutDiv">
          <h1 style={{fontSize: "37px", margin:0}}>About</h1>
          <div className='homeLink'>
            <Link to='/' className='a-Tag'>Home</Link>
            <p>/</p>
            <p>About</p>
          </div>
      </div>
    </div>
    <AboutUs />
    <PlanYourTrip />
    <SaveCheap />
    <ChooseUs />
    <MiniBanner />
    <Footer />
    </>
    

  )
}

export default About;
