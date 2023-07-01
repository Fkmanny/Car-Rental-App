import Home  from "./Pages/Home";
import About  from "./Pages/About";
import { Routes, Route } from 'react-router-dom';



function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
    </Routes>
      );
}

export default App;
