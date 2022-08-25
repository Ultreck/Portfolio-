import React, { useState } from 'react';
import {FaHome, FaRegUser, FaTasks, FaHistory, FaPhone, FaServicestack, FaList} from 'react-icons/fa';
import {Link, NavLink} from 'react-router-dom';
import '../cssFolder/NavBottomBar.css';


function NavBottomBar2() {
  const [active, setactive] = useState()

  return (
    <div className='navigator'>
    {/* <nav className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark d-flex d-md-none">
     </nav> */}
     <nav class="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark d-flex d-md-none bttm">
               <ul className="text d-flex mx-auto px-3 parents" aria-labelledby="dropdown10">
                 <li className='list mt-3 mx-auto ps-4 text-center'  exact activeClassName={active}>
                 <NavLink to="/" className="col-2  text-white nav-link text-center a" >
                  <span className='text-white icon'>
                    <FaHome className='fs-2  text-white icon '/>
                  </span>
                  <span className='text-white txt fs-6 '>
                          Home
                  </span>
                  </NavLink>
                 </li>

                 <li className='list mt-3 mx-auto  ps-4 text-center' exact activeClassName={active}>
                 <NavLink to="/about"  className="col-2  text-white nav-link text-center a"  >
                  <span className='text-white icon'>
                  <FaRegUser className='fs-2 icon'/>
                  </span>
                  <span className='text-white txt fs-6'>
                          About
                  </span>
                  </NavLink>
                 </li>

                 <li className='list mt-3  mx-auto ps-4 '  exact activeClassName={active}>
                 <NavLink to="/experience" className="col-2  text-white nav-link text-center a">
                  <span className='text-white icon'>
                  <FaHistory className='fs-2 icon'/>
                  </span>
                  <span className='text-white txt fs-6'>
                          Skills
                  </span>
                  </NavLink>
                 </li>

                 <li className='list mt-3 mx-auto ps-4 ' exact activeClassName={active}>
                 <NavLink to="/service" className="col-2  text-white nav-link text-center a">
                  <span className='text-white icon'>
                  <FaServicestack className='fs-2 icon'/>
                  </span>
                  <span className='text-white txt fs-6'>
                          Service
                  </span>
                  </NavLink>
                 </li>

                 <li className='list mt-3  mx-auto ps-4 ' exact activeClassName={active}>
                 <NavLink to="/projects" className="col-2  text-white nav-link text-center a">
                  <span className='text-white icon'>
                  <FaList className='fs-2 icon'/>
                  </span>
                  <span className='text-white txt fs-6'>
                          Projects
                  </span>
                  </NavLink>
                 </li>
                 
                 <li className='list mt-3  mx-auto ps-4 ' exact activeClassName={active}>
                 <NavLink to="/contact" className="col-2  text-white nav-link text-center a">
                  <span className='text-white icon'>
                  <FaPhone className='fs-2 icon'/>
                  </span>
                  <span className='text-white txt fs-6'>
                          Contact
                  </span>
                  </NavLink>
                 </li>
                 {/* <div className='indicator'></div> */}
           </ul>
           {/* <div className='indicator'></div> */}
     </nav>
     {/* exact activeClassName={active}  */}
    </div>
  )
}

export default NavBottomBar2
