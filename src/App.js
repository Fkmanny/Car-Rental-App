import Home  from "./Pages/Home";
import About  from "./Pages/About";
import { Router, Routes, Route } from 'react-router-dom';



function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    
      );
}

export default App;
