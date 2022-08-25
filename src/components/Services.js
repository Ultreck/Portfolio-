import React from 'react';
import '../cssFolder/ServiceStyle.css';
import {FaRegCopyright } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import img from '../images/web_design_icon-removebg-preview.png';
import img2 from '../images/graphic_design_icons-removebg-preview.png';
import img3 from '../images/uiux22-removebg-preview.png';
import img4 from '../images/responsive_web_design_icon-removebg-preview.png';
import img5 from '../images/web-development-icon-removebg-preview.png';
import img6 from '../images/office.png';

function Services() {
  return (
      <body className='con bg-transparent mx-auto'>
      <div className=" text-center">
      <h2 className="text-white">Services</h2>
      </div>
        
     <div className="container text-white d-flex  bg-transparent flex-wrap mx-auto">

    <div className="text-dark  col-6 col-md-4 mx-auto mt-3">
    <div className="card mx-2 text-center text-white car">
      <img src={img} className="card-img-top lg col-3" alt="..."/>
      <div className="card-body">
            <h1 className="text">Web Design</h1>
            <p className="card-text">Am quite good in designing static page of any type of web. A well interactive and animative interface.</p>
      </div>
      </div>
    </div>
    <div className="text-dark  col-6 col-md-4 mx-auto mt-3">
    <div className="card mx-2 text-center text-white car">
      <img src={img3} className="card-img-top lg" alt="..."/>
      <div className="card-body">
            <h1 className="text">UI/UX Design</h1>
            <p className="card-text">I hve basic knowledge of UI/UX design. I can design some little logo, flyer and any type of card.</p>
      </div>
      </div>
    </div>
    <div className="text-dark  col-6 col-md-4 mx-auto mt-3">
    <div className="card mx-2 text-center text-white car">
      <img src={img2} className="card-img-top lg" alt="..."/>
      <div className="card-body">
      <h1 className="text">Graphic Design</h1>
            <p className="card-text ">Like UI/UX design i do have basic knowledge of graphic design beginner level or intermediate.</p>
      </div>
      </div>
    </div>
    <div className="text-dark  col-6 col-md-4 mx-auto mt-3">
    <div className="card text-center text-white car">
      <img src={img6} className="card-img-top lg" alt="..."/>
      <div className="card-body">
      <h1 className="text">Microsoft Office</h1>
            <p className="card-text">I have knowledge of ms-word, ms-access, ms-excell, ms-powerpoint, ms-publisher and more others.</p>
      </div>
      </div>
    </div>
    <div className="text-dark  col-6 col-md-4 mx-auto mt-3">
    <div className="card mx-2 text-center text-white car">
      <img src={img4} className="card-img-top  lg" alt="..."/>
      <div className="card-body">
      <h1 className="text">Responsive Design</h1>
            <p className="card-text mb-1"> A responsive design makes your website accessible to all users, regardless of their devices anywhere.</p>
      </div>
      </div>
    </div>
    <div className="text-dark  col-6 col-md-4 mx-auto mt-3">
    <div className="card text-center text-white car">
      <img src={img5} className="card-img-top lg" alt="..."/>
      <div className="card-body">
      <h1 className="text ">Web Development</h1>
            <p className="card-text">I can create a powerful, functional and dynamic web basically frontend and  backend too.</p>
      </div>
      </div>
    </div>
    <div className="text mt-5 mb-5 w-100">
          <Link to="/contact">
          <button className="btn bttn col-6 mx-3 col-md-3 py-2 fs-5 fw-bold fst-italic">Hire Me</button>
          </Link>
       </div>
            
     <footer className="text-white fw-normal text-center"><FaRegCopyright/> 2022 All right reserved by <span className="text fw-bold fst-italic spa">WastroTech</span></footer>
     </div>
      </body>
  )
}

export default Services
