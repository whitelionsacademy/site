import './App.css';
import Homepage from './components/Homepage.js';
import About from './components/About.js';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/about" element={<About/>}/> 
      </Routes>   

    </BrowserRouter>
    
  );
}

export default App;