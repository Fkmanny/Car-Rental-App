import React, { useEffect } from 'react'
import "../pickCar/pickCar.css";
import data  from "../data";
import { motion } from 'framer-motion';



export const PickCar = () => {
  // const [id, details] = useState('');
  useEffect(() => {

        // ================ Pick Car Buttons =====================================================
        
    for (let index = 0; index < data.length; index++) {
      const pickButtonEl = document.createElement('button');
      pickButtonEl.className = `'pickButton'`;
      pickButtonEl.setAttribute('id', `button${index}`);
      pickButtonEl.setAttribute('onclick', `{() => {details(${index});}}`);
      pickButtonEl.innerHTML = `<span>${data[index].name}</span>`
  
      document.getElementById('pickCarButtons').appendChild(pickButtonEl);
  
      pickButtonEl.addEventListener("mouseover", (event) => {
      const x = event.pageX - pickButtonEl.offsetLeft;
      const y = event.pageY - pickButtonEl.offsetTop;
      pickButtonEl.style.setProperty("--xPos", x + "px");
      pickButtonEl.style.setProperty("--yPos", y + "px");
   }) 

        // ================ Pick Car Image =====================================================


      const pCImageEl = document.createElement('img');
      pCImageEl.className = "pCImage";
      pCImageEl.setAttribute('id', `pCImg${index}`);
      pCImageEl.src = `${data[index].img}`;

      document.querySelector('.pickCarImage').appendChild(pCImageEl);


        // ================ Pick Car Details =====================================================

      const pCDetails = document.createElement('div');
        pCDetails.className = "pCDetails";
        pCDetails.setAttribute('id', `pCDetails${index}`);
        pCDetails.innerHTML = `
        <h4><span style = "font-weight: 800; font-size: 1.2em;">$${data[index].price}</span> / rent per day</h4>
        <p> <span class="span">Model</span> <span>|</span> <span class="span">${data[index].model}</p>
        <p> <span class="span">Mark</span> <span>|</span> <span class="span">${data[index].mark}</p>
        <p> <span class="span">Year</span> <span>|</span> <span class="span">${data[index].year}</p>
        <p> <span class="span">Doors</span> <span>|</span> <span class="span">${data[index].doors}</p>
        <p> <span class="span">AC</span> <span>|</span> <span class="span">${data[index].air}</p>
        <p> <span class="span">Transmission</span> <span>|</span> <span class="span">${data[index].transmission}</p>
        <p> <span class="span">Fuel</span> <span>|</span> <span class="span">${data[index].fuel}</p>

        <button class="btn66"><span>RESERVE NOW</span></button>
        ` 
        document.querySelector('.pCDetailsDiv').appendChild(pCDetails);

        if (index === 0){
          pickButtonEl.classList.add('active');
          pCImageEl.classList.add('active');
          pCDetails.classList.add('active');
      }
      pickButtonEl.addEventListener("click", (event) => {
        const randNumb = 6;
        for (let index = 0; index < randNumb; index++) {
            const allpickCarbuttons = document.querySelector(`#button${index}`);
            allpickCarbuttons.classList.remove('active');

            const allpickcarImg = document.querySelector(`#pCImg${index}`);
            allpickcarImg.classList.remove('active');

            const allpickCarDetails = document.querySelector(`#pCDetails${index}`);
            allpickCarDetails.classList.remove('active');
          }
            const pCdiv1 = document.querySelector(`#${pickButtonEl.id}`);
            pCdiv1.classList.add('active');

            const pCdiv2 = document.querySelector(`#${pCImageEl.id}`);
            pCdiv2.classList.add('active');

            const pCdiv3 = document.querySelector(`#${pCDetails.id}`);
            pCdiv3.classList.add('active');
            
        })
      

  }

  
   
 });



  return (
    <motion.div className="pickCarSection"
    initial = {{ y : "110px", opacity: 1}}
    whileInView = {{ y : "-15px", opacity: 1}}
    transition={{ delay: 0.1, 
      duration: 0.3,
      type: 'spring', 
      stiffness: 70
    }}
    viewport={{once : true}}
    >
          <h3 style={{margin: 0, padding: 0, fontWeight: 500}}>Vehicle Models</h3>
          <h1 style={{margin: 0, padding: 0, fontSize: "45px"}} >Our rental fleet</h1>
          <p style={{width: "35%", margin: "auto", textAlign: "center"}}>To contribute to positive change and achieve our sustainability goals with many extraordinary</p>
          
          <div className="pickCar">
            <div className='pickCarButtons' id='pickCarButtons'>
        
            </div>
            <div className='pickCarImage'>

            </div>
            <div className='pCDetailsDiv'>

            </div>

          </div>


    </motion.div>
  )
}
