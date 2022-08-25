import React from 'react'
import AboutHeader from './AboutHeader'
import {FaRegCopyright} from 'react-icons/fa'
import {Link} from 'react-router-dom';
// import Service from '../pages/Service';

function AboutIntro({setdata}) {
      const service = () => {
            setdata("Service")
      }
      const contact = () => {
            setdata("Contact")
      }
  return (
    <div className='col-12 col-md-7 mx-auto mt-3'>
      <AboutHeader/>
      <p className="text-white">
            I am a web developer from Ogbomosho Oyo State Nigeria. I can provide clean code and pixel perfect design. I also make the website more & more interactive with web animations. I build bestspoken websites to help my clients push their bussinesses futher online.  A responsive design makes your website accessible to all users, regardless of their devices.
      </p>
      <p className="text">
            My expertise is in web design, web development and ui/ux design.
      </p>
      <div className="text col-12 mt-5 mb-5 position-relative">
            <Link to="/service">
            <button onClick={()=>service()} className="btn  col-4 mx-3 col-md-3 py-2 fs-5 fw-bold fst-italic bt">Services</button>
            </Link>
            <Link to="/contact">
            <button onClick={()=>contact()} className="btn  col-4 mx-3 col-md-3 py-2 fs-5 fw-bold fst-italic bt">Contact</button>
            </Link>
       </div>
       <footer className="text fw-normal mb-4"><FaRegCopyright/> 2022 All right reserved by <span className="text fw-bold fst-italic spa">WastroTech</span></footer>
     
    </div>
  )
}

export default AboutIntro