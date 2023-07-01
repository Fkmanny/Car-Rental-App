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

function Home() {
  
    return (
      <div className="main-body">
        <div className="sector">
          <Navigation /> 
          <Section1 /> 
          <BookCarForm />
        </div>
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