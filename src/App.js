import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Slide from "./Slider/Slide";
import Navbar from "./Slider/Navbar";
import Project from "./Project/Project";
import Error from "./Details/Err";


import Projects from "./Components/Projects";
import Contacts from "./Components/Contacts";
import Detail from "./Details/Detail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Slide  ftext1={'about your'} ftext2={'next'} ftext3={'project .'} btn1={'GET IN TOUCH'} l={'contacts'} />}/>
        <Route path="/our-works" element={<Projects ftext1={'contact'} ftext2={'us'} btn1={'GET IN TOUCH'} l={'contacts'} />} />
        <Route path="/contacts" element={<Contacts ftext1={'Portfolio.'}  btn1={'VISIT NOW'} l={'our-works'} />} />
        <Route path="/projects" element={<Project/>}/>
        <Route path="*" element={<Error/>}/>
    
        <Route path="/Details/:name" element={<Detail ftext1= {'Projects.'}  btn1={'VISIT NOW'} l={'projects'} />} />
      </Routes>
     
    </BrowserRouter>

    // <div className="App ">
    //  <Slide/>
    // </div>
  );
}

export default App;
