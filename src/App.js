import {  Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Experience from './pages/Experience';
// import NavBottomBar from './components/NavBottomBar';
import NavBottomBar2 from './components/NavBottomBar2';
import Projects from './pages/ProjectsPage';
import ContactBackground from './components/ContactBackground';
// import anime from "animejs/lib/anime.es.js";

function App() {
// const [bgColor, setbgColor] = useState('text  vh-100');
const [data, setdata] = useState("loader");
useEffect(() => {
  setdata("loader--hidden") 
}, [])


  return (
 <>
 <div className={data}><h3 className="text-light position-absolute text-end fs-5 fw-bolder wast">Wastro <br />Tech</h3></div>
   <NavBar data={data}/>
     {/* <PartoclesBackground/> */}

      <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/experience' element={<Experience/>}></Route>
            <Route path='/service' element={<Service/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/projects' element={<Projects/>}></Route>
      </Routes>
      <ContactBackground/>
      {/* <NavBottomBar setdata={setdata}/> */}
      <NavBottomBar2/>
 </>

  );
}

export default App;
