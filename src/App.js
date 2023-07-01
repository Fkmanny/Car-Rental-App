import Home  from "./Pages/Home";
import About  from "./Pages/About";
import Vehiclemodels  from "./Pages/Vehiclemodels";
import Testimonials  from "./Pages/Testimonials";
import Ourteam  from "./Pages/Ourteam";
import Contact  from "./Pages/Contact";
import { Routes, Route } from 'react-router-dom';



function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Vehiclemodels" element={<Vehiclemodels />} />
      <Route path="/Testimonials" element={<Testimonials />} />
      <Route path="/Ourteam" element={<Ourteam />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
      );
}

export default App;
