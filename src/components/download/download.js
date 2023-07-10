import React from 'react'
import "../download/download.css"
import { motion } from 'framer-motion'

export const Download = () => {
  return (
    <section className="download"

    >
          <motion.div className="downloadLeft"
                initial = {{ x : "-710px", opacity: 1}}
                whileInView = {{ x : 0, opacity: 1}}
                transition={{ delay: 0.2, 
                  duration: 1,
                  type: 'spring', 
                  stiffness: 50
                }}
                viewport={{once : true}}
          >
            <h1 style={{fontSize: "43px", lineHeight: "3.3rem"}}>Download our app to get most out of it</h1>
            <p style={{lineHeight: "1.6rem", marginBottom: "35px"}}>Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. 
              Incommode so intention defective at convinced. Led income months itself and houses you.
            </p>
            <div className="downloadButtons">
              <img src="images/download/googleapp.svg" alt=""/>
              <img src="images/download/appstore.svg" alt=""/>
            </div>
          </motion.div>

    </section>
  )
}
