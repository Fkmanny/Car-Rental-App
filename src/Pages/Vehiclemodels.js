import { Navigation } from "../components/navigation/navigation";
import { CarDivSection } from "../components/carDivSection/carDivSection";
import { MiniBanner } from "../components/miniBanner/miniBanner";
import { Footer } from "../components/footer/footer";
import { Link } from 'react-router-dom'
import React from 'react'
import VMdata from '../components/VMdata';

function Vehiclemodels() {
    const cards = VMdata.map(item=>{
        return(
            <CarDivSection 
                key = {item.id}
                id = {item.id}
                img = {item.img}
                name = {item.name}
                price = {item.price}
                type = {item.type}
                doors = {item.doors}
                luggage = {item.luggage}
                transmission = {item.transmission}
            />
        )
    })


  return (
    <>
        <div className="sector2">
            <img className="About-bg-img" src="./images/hero/heroes-bg.png" alt=""></img>
            <Navigation />
            <div className="aboutDiv">
                <h1 style={{fontSize: "37px", margin:0, wordSpacing: "0.3rem"}}>Vehicle Models</h1>
                <div className='homeLink'>
                    <Link to='/' className='a-Tag'>Home</Link>
                    <p>/</p>
                    <p>Vehicle Models</p>
                </div>
            </div>
            <div className="carDivs">
                {cards}
            </div>
            <MiniBanner />
            <Footer />
        </div>
    </>
  )
}

export default Vehiclemodels;