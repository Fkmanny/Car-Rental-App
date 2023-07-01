import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../navigation/navigation.css";

export const Navigation = () => {

useEffect(()=>{
  const registerBtn = document.querySelector(".Btn10")
    registerBtn.addEventListener("mouseover", (event) => {
      const x = event.pageX - registerBtn.offsetLeft;
      const y = event.pageY - registerBtn.offsetTop;
      registerBtn.style.setProperty("--xPos", x + "px");
      registerBtn.style.setProperty("--yPos", y + "px");
   }) 
})

  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (event.target.closest(".NavMenuContainer")) {
      return;
    }
    setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
    
  }, []);

  useEffect(() => {
    setIsOpen(false); // Close the menu when location changes
  }, [location]);

  return (
    <>
      {/* <section className="Header" id="Header"> */}
        <div className="TopNavContainer">

            <img src="./images/logo/logo.png" alt="logo" className='Logo'/>

          <nav className="NavMenuContainer">
            <div className="hamburger" onClick={handleToggleMenu}>
              <div className="bar"></div>
            </div>
            <ul className={`NavMenuUl ${isOpen ? 'active' : ''}`}>
              <li className="NavMenuLi" onClick={handleItemClick}>
                <Link to="/">Home</Link>
              </li>
              <li className="NavMenuLi" onClick={handleItemClick}>
                <Link to="/About">About</Link>
              </li>
              <li className="NavMenuLi" onClick={handleItemClick}>
                <Link to="/Vehiclemodels">Vehicle Models</Link>
              </li>
              <li className="NavMenuLi" onClick={handleItemClick}>
                <Link to="/Testimonials">Testimonials</Link>
              </li>
              <li className="NavMenuLi" onClick={handleItemClick}>
                <Link to="/Ourteam">Our Team</Link>
              </li>
              <li className="NavMenuLi" onClick={handleItemClick}>
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </nav>

          <div className='SignRegister'>
            <p>Sign In</p>
            <button className='Btn10'><span>Register</span></button>
          </div>
        </div>
      {/* </section> */}
    </>
  )
}
