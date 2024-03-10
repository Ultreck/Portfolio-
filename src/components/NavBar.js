import React, { useState} from 'react';
import { FaBars} from 'react-icons/fa';
import {NavLink, Link} from 'react-router-dom';
// import '../components/NavBar.css';
import '../NarvBar.css'
import img from '../images/MyLogo2.png';

function NavBar({data}) {
const [active, setactive] = useState()
// console.log(active);

 
  return (
    <div>
                <nav className="navbar navbar-expand-sm bg-dark  navbar-dark shadow-sm position-fixed w-100" id='nav' >
                  <div className=" container d-flex">
                  <div className=" ">
                        <div className="text">
                          <Link to="/" className=' text-dark' id=""><img src={img} className="logo rounded-circle" alt="" /> </Link>
                        </div>
                    </div>
                      <div className="all navbar-nav d-none d-md-flex ">
                          <NavLink to="/"  exact activeclassName={active} className='px-4 te mx-2 text-white nav-link navL' id="">Home</NavLink>
                          <NavLink to="/about"  exact activeclassName={active}  className='px-4 te mx-2 text-white nav-link navL'>About</NavLink>
                          <NavLink to="/experience"  exact activeclassName={active}  className='px-4 te mx-2 text-white nav-link navL'>Skills</NavLink>
                          <NavLink to="/service"  exact activeclassName={active}  className='px-4 te mx-2 text-white nav-link navL'>Service</NavLink>
                          <NavLink to="/projects"  exact activeclassName={active}  className='px-4 te mx-2 text-white nav-link navL'>Projects</NavLink>
                          <NavLink to="/contact"  exact activeclassName={active}  className='px-4 te mx-2 text-white nav-link navL'>Contacts</NavLink>
                      </div>
                      <div className="text-white  px-3 py-2 rounded-circle fw-bold fs-3 d-md-none data">
                       WastroTech
                      </div>

                      {/* div that contained drop down options */}
                      <div className="text d-flex d-md-none bar "> 
                        <div className="dropdown">
                          <FaBars className='text text-white d-flex d-md-none mt-1 fs-5 fw-lighter '  data-bs-toggle="dropdown" aria-expanded="false"/>
                        <ul className="dropdown-menu dropdown-menu-dark mt-4 ul">
                          <li><NavLink to="/" className="dropdown-item ms-4  te my-3 navL">Home</NavLink></li>
                          <li><NavLink to="/about" className="dropdown-item text-white  ms-4  te my-3 navL">About</NavLink></li>
                          <li><NavLink to="/experience" className="dropdown-item  ms-4  te my-3 navL"> Skills</NavLink></li>
                          <li><NavLink  to="/service" className="dropdown-item  ms-4  te my-3 navL">Service</NavLink></li>
                          <li><hr className="dropdown-divider"/></li>
                          <li><NavLink to="/projects" className="dropdown-item  ms-4  te my-3 navL">Projects</NavLink></li>
                          <li><NavLink to="/contact" className="dropdown-item  ms-4  te my-3 navL"> Contact</NavLink></li>
                          <li className="text"><hr /></li>
                          <li className='ms-3 fst-italic'>Other Options</li>
                        </ul>
                      </div>

                          {/* <a href="####" title='Options'>
                          </a> */}
                      </div>
                  </div>
                </nav>
    </div>
  )
}

export default NavBar