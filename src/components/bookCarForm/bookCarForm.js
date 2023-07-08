import React, { useState } from 'react';
import { useEffect } from 'react';
import "../bookCarForm/bookCarForm.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faCar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import CarAudi from "../images/cars-big/audia1.jpg";
import CarGolf from "../images/cars-big/golf6.jpg";
import CarToyota from "../images/cars-big/toyotacamry.jpg";
import CarBmw from "../images/cars-big/bmw320.jpg";
import CarMercedes from "../images/cars-big/benz.jpg";
import CarPassat from "../images/cars-big/passatcc.jpg";

export  const BookCarForm = () => {
  const [modal, setModal] = useState(false); //  class - active-modal


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
    const [carImg, setCarImg] = useState("");

      // modal infos
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [zipcode, setZipCode] = useState("");


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

      // taking value of modal inputs
    const handleName = (e) => {
      setName(e.target.value);
    };

    const handleLastName = (e) => {
      setLastName(e.target.value);
    };

    const handlePhone = (e) => {
      setPhone(e.target.value);
    };

    const handleAge = (e) => {
      setAge(e.target.value);
    };

    const handleEmail = (e) => {
      setEmail(e.target.value);
    };

    const handleAddress = (e) => {
      setAddress(e.target.value);
    };

    const handleCity = (e) => {
      setCity(e.target.value);
    };

    const handleZip = (e) => {
      setZipCode(e.target.value);
    };

  // open modal when all inputs are fulfilled
  const openModal = (e) => {
    e.preventDefault();
    const errorMsg = document.querySelector(".error-message");
    if (
      pickUp === "" || dropOff === "" || pickTime === "" || dropTime === "" || carType === ""
    ) {
      errorMsg.style.display = "flex";
    } else {
      setModal(!modal);
      const modalDiv = document.querySelector(".booking-modal");
      modalDiv.scroll(0, 0);
      errorMsg.style.display = "none";
    }
  };

    // disable page scroll when modal is displayed
    useEffect(() => {
      if (modal === true) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }, [modal]);

        // confirm modal booking
        const confirmBooking = (e) => {
          e.preventDefault();
          setModal(!modal);
          const doneMsg = document.querySelector(".booking-done");
          doneMsg.style.display = "flex";
        };

    let imgUrl;
    switch (carImg) {
      case "Audi A1 S-Line":
        imgUrl = CarAudi;
        break;
      case "VW Golf 6":
        imgUrl = CarGolf;
        break;
      case "Toyota Camry":
        imgUrl = CarToyota;
        break;
      case "BMW 320 ModernLine":
        imgUrl = CarBmw;
        break;
      case "Mercedes-Benz GLK":
        imgUrl = CarMercedes;
        break;
      case "VW Passat CC":
        imgUrl = CarPassat;
        break;
      default:
        imgUrl = "";
    }
  
  // hide message
  const hideMessage = () => {
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "none";
  };
  

  return (
  <>
    <form className="bookForm">
        <div
          onClick={openModal}
          className={`modal-overlay ${modal ? "active-modal" : ""}`}
        ></div>
        <div className='containerr'>
            <div className="formHeader" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
              <h2 style={{marginTop: 0}}>Book a car</h2>
              <h4 style={{color: "white", padding: "5px 10px", backgroundColor: "#817f91", borderRadius: "3px"}}><span style={{fontWeight: "bold"}}>SAVE 15%</span> if you pay in advance</h4>
            </div>
            <p className="error-message">
                All fields required! <i className="fa-solid fa-xmark"></i>
            </p>
            <p className="booking-done">
                Check your email to confirm an order.{" "}
                <i onClick={hideMessage} className="fa-solid fa-xmark"></i>
            </p>
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
              onClick={openModal} 
              type="submit">
                <span>
                  Search
                </span>
              </button>
            </div>
        </div>
      </form>

      {/* modal ------------------------------------ */}


      <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
        {/* title */}
        <div className="title">
          <h2>COMPLETE RESERVATION</h2>
          <i onClick={openModal} className="fa-solid fa-xmark"></i>
        </div>
        {/* message */}
        <div className="BM_message">
          <h4>
            <i className="fa-solid fa-circle-info"></i> Upon completing this
            reservation enquiry, you will receive:
          </h4>
          <p>
            Your rental voucher to produce on arrival at the rental desk and a
            toll-free customer support number.
          </p>
        </div>
        {/* car info */}
        <div className="BM_car-info">
          <div className="dates-div">
            <div className="booking-modal__car-info__ dates">
              <h5>Location & Date</h5>
              <span>
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <h6>Pick-Up Date & Time</h6>
                  <p>
                    {pickTime} /{" "}
                    <input type="time" className="input-time"></input>
                  </p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__ dates">
              <span>
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <h6>Drop-Off Date & Time</h6>
                  <p>
                    {dropTime} /{" "}
                    <input type="time" className="input-time"></input>
                  </p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__ dates">
              <span>
                <i className="fa-solid fa-calendar-days"></i>
                <div>
                  <h6>Pick-Up Location</h6>
                  <p>{pickUp}</p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__ dates">
              <span>
                <i className="fa-solid fa-calendar-days"></i>
                <div>
                  <h6>Drop-Off Location</h6>
                  <p>{dropOff}</p>
                </div>
              </span>
            </div>
          </div>
          <div className="booking-modal__car-info__ model">
            <h5>
              <span>Car -</span> {carType}
            </h5>
            {imgUrl && <img src={imgUrl} alt="car_img" />}
          </div>
        </div>
        {/* personal info */}
        <div className="booking-modal__ person-info">
          <h4>Personal Information</h4>
          <form className="info-form">
            <div className="info-form__ coln col2">
              <span>
                <label>
                  First Name <b>*</b>
                </label>
                <input
                  value={name}
                  onChange={handleName}
                  type="text"
                  placeholder="Enter your first name"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Last Name <b>*</b>
                </label>
                <input
                  value={lastName}
                  onChange={handleLastName}
                  type="text"
                  placeholder="Enter your last name"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>

              <span>
                <label>
                  Phone Number <b>*</b>
                </label>
                <input
                  value={phone}
                  onChange={handlePhone}
                  type="tel"
                  placeholder="Enter your phone number"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Age <b>*</b>
                </label>
                <input
                  value={age}
                  onChange={handleAge}
                  type="number"
                  placeholder="18"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>
            </div>

            <div className="info-form__ coln col1">
              <span>
                <label>
                  Email <b>*</b>
                </label>
                <input
                  value={email}
                  onChange={handleEmail}
                  type="email"
                  placeholder="Enter your email address"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Address <b>*</b>
                </label>
                <input
                  value={address}
                  onChange={handleAddress}
                  type="text"
                  placeholder="Enter your street address"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>
            </div>

            <div className="info-form__ coln col2">
              <span>
                <label>
                  City <b>*</b>
                </label>
                <input
                  value={city}
                  onChange={handleCity}
                  type="text"
                  placeholder="Enter your city"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Zip Code <b>*</b>
                </label>
                <input
                  value={zipcode}
                  onChange={handleZip}
                  type="text"
                  placeholder="Enter your zip code"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>
            </div>

            <span className="info-form__ checkbox">
              <input type="checkbox"></input>
              <p>Please send me latest news and updates</p>
            </span>

            <div className="reserve-button">
              <button onClick={confirmBooking}><span>Reserve Now</span></button>
            </div>
          </form>
        </div>
      </div>
</>
  )
}
