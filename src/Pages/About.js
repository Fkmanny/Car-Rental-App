import { Navigation } from "../components/navigation/navigation";
import { MiniAboutDiv } from "../components/miniAboutDiv/miniAboutDiv";
import { AboutUs } from "../components/aboutUs/aboutUs";
import { PlanYourTrip } from "../components/planYourTrip/planYourTrip";
import { SaveCheap } from "../components/saveCheap/saveCheap";
import { ChooseUs } from "../components/chooseUs/chooseUs";
import { MiniBanner } from "../components/miniBanner/miniBanner";
import { Footer } from "../components/footer/footer";
import React from 'react'


function About(){
  return (
    <>
    <div className="sector2">
      <img className="About-bg-img" src="./images/hero/heroes-bg.png" alt=""></img>
      <Navigation />
      <MiniAboutDiv />
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
