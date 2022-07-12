import './App.css';
import { Routes, Route } from "react-router-dom";

import NavBar from './Components/NavBar';
import Home from './Components/Home';

import Potato from './Components/Potato';
import Tomato from './Components/Tomato';
import Pepper from './Components/Pepper';

import About from './Components/About';
import Contacts from './Components/Contacts';


function App() {
  return (
    
    <>
      <NavBar title="DrPlant" />    
        
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/potato" element={<Potato />} />
        <Route path="/tomato" element={<Tomato />} />
        <Route path="/pepper" element={<Pepper />} />
        <Route path="/about" element={<About />} />          
        <Route path="/contacts" element={<Contacts />} />          

      </Routes>
    </>
  );
}

export default App;
