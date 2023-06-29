import React, { useState } from 'react';
import { useEffect } from 'react';
import "../bookCarForm/bookCarForm.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faCar, faLocationDot } from '@fortawesome/free-solid-svg-icons';


export  const BookCarForm = () => {

  useEffect(()=>{
    const btnEl3 = document.querySelector(".btn3");
btnEl3.addEventListener("mouseover", (event) => {
    const x = event.pageX - btnEl3.offsetLeft;
    const y = event.pageY - btnEl3.offsetTop;
    btnEl3.style.setProperty("--xPos", x + "px");
    btnEl3.style.setProperty("--yPos", y + "px");
});
  })

    // booking car
    const [carType, setCarType] = useState("");
    const [pickUp, setPickUp] = useState("");
    const [dropOff, setDropOff] = useState("");
    const [pickTime, setPickTime] = useState("");
    const [dropTime, setDropTime] = useState("");

    // taking value of booking inputs
    const handleCar = (e) => {
        setCarType(e.target.value);
    };

    const handlePick = (e) => {
        setPickUp(e.target.value);
    };

    const handleDrop = (e) => {
        setDropOff(e.target.value);
    };

    const handlePickTime = (e) => {
        setPickTime(e.target.value);
    };

    const handleDropTime = (e) => {
        setDropTime(e.target.value);
    };

  return (
    <form className="bookForm">
          <div className="formHeader" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <h2 style={{marginTop: 0}}>Book a car</h2>
            <h4 style={{color: "white", padding: "5px 10px", backgroundColor: "#817f91", borderRadius: "3px"}}><span style={{fontWeight: "bold"}}>SAVE 15%</span> if you pay in advance</h4>
          </div>
          <div className="formFlexdiv">
            <div className="bookForm-carType">
              <label>
              <FontAwesomeIcon className='icon' icon={faCar} /> &nbsp; Select Your Car Type 
              </label>
              <select value={carType} onChange={handleCar}>
                <option>Select your car type</option>
                <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                <option value="VW Golf 6">VW Golf 6</option>
                <option value="Toyota Camry">Toyota Camry</option>
                <option value="BMW 320 ModernLine">BMW 320 ModernLine</option>
                <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                <option value="VW Passat CC">VW Passat CC</option>
              </select>
            </div>
  
            <div className="bookForm-carType">
              <label>
              <FontAwesomeIcon className='icon' icon={faLocationDot} /> &nbsp; Pick-up
              </label>
              <select value={pickUp} onChange={handlePick}>
                <option>Select pick up location</option>
                <option>Belgrade</option>
                <option>Novi Sad</option>
                <option>Nis</option>
                <option>Kragujevac</option>
                <option>Subotica</option>
              </select>
            </div>
  
            <div className="bookForm-carType">
              <label>
              <FontAwesomeIcon className='icon' icon={faLocationDot} /> &nbsp; Drop-of
              </label>
              <select value={dropOff} onChange={handleDrop}>
                <option>Select drop off location</option>
                <option>Novi Sad</option>
                <option>Belgrade</option>
                <option>Nis</option>
                <option>Kragujevac</option>
                <option>Subotica</option>
              </select>
            </div>
  
            <div className="bookForm-carType">
              <label htmlFor="picktime">
              <FontAwesomeIcon className='icon' icon={faCalendarDays} /> &nbsp; Pick-up
              </label>
              <input id="picktime" value={pickTime} onChange={handlePickTime} type="date"></input>
            </div>
  
            <div className="box-form__car-time">
              <label htmlFor="droptime">
              <FontAwesomeIcon className='icon' icon={faCalendarDays} /> &nbsp;Drop-of
              </label>
              <input id="droptime" value={dropTime} onChange={handleDropTime} type="date"></input>
            </div>
  
            <button style={{padding: "17px 30px", width: "31%", alignSelf: "end"}} className="btn3" 
            // onClick={openModal} 
            type="submit">
              <span>
                Search
              </span>
            </button>
          </div>
          
        </form>
  )
}
