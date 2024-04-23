import './App.css';
import Homepage from './components/Homepage.js';
import Aboutpage from './components/Aboutpage.js';
import Gallerypage from './components/Gallerypage.js';
import {BrowserRouter, HashRouter,Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/site">

      <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/about" element={<Aboutpage/>}/> 
          <Route path="/gallery" element={<Gallerypage/>}/>
      </Routes>

    </BrowserRouter>
    
    
  );
}

export default App;