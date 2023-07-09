import { Navigation } from "../components/navigation/navigation";
import { Section1 } from "../components/section1/section1";
import { BookCarForm } from "../components/bookCarForm/bookCarForm";
import { PlanYourTrip } from "../components/planYourTrip/planYourTrip";
import { AboutUs } from "../components/aboutUs/aboutUs";
import { PickCar } from "../components/pickCar/pickCar";
import { SaveCheap } from "../components/saveCheap/saveCheap";
import { ChooseUs } from "../components/chooseUs/chooseUs";
import { Testimonialss } from "../components/testimonials/testimonials";
import { Faq } from "../components/faq/faq";
import { Download } from "../components/download/download";
import { Footer } from "../components/footer/footer";
import { motion } from "framer-motion";

function Home() {

  
    return (
      <div className="main-body">
        <motion.div className="sector"
                initial = {{  opacity: 0.2}}
                animate = {{  opacity: 1}}
                transition={{ delay: 0.3, 
                  duration: 1,
                }}    
        >
              <motion.div
                initial = {{ y : "-100px", opacity: 1}}
                animate = {{ y : 0, opacity: 1}}
                transition={{ delay: 0.2, 
                  duration: 1.1,
                  type: 'spring', 
                  stiffness: 40
                }}
              >
                <Navigation /> 
              </motion.div>
              <Section1 /> 
              <BookCarForm />
        </motion.div>
          <PlanYourTrip />
          <AboutUs />
          <PickCar />
          <SaveCheap />
          <ChooseUs />
          <Testimonialss />
          <Faq />
          <Download />
          <Footer />
      </div>
        
    );
  }
  
  export default Home;