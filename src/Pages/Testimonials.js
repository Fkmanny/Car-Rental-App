import { Navigation } from "../components/navigation/navigation";
import { AboutUs } from "../components/aboutUs/aboutUs";
import { Testimonialss } from "../components/testimonials/testimonials";
import { Footer } from "../components/footer/footer";
import { MiniBanner } from "../components/miniBanner/miniBanner";
import { Link } from 'react-router-dom'

import React from 'react'

export default function Testimonials() {
  return (
    <div className="main-container">
    <div className="mini-container">
    <div className="sector2">
            <Navigation />
            <div className="aboutDiv test">
                <h1 style={{fontSize: "37px", margin:0, wordSpacing: "0.3rem"}}>Testimonials</h1>
                <div className='homeLink'>
                    <Link to='/' className='a-Tag'>Home</Link>
                    <p>/</p>
                    <p>Testimonials</p> 
                </div>
            </div>

                <Testimonialss />
                <AboutUs />
                <MiniBanner />
                <Footer />
                </div>
    </div>
    </div>

  )
}
