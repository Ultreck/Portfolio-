import React, { useState, useEffect } from 'react';
import {FaHome, FaRegUser, FaTasks, FaHistory, FaRegAddressBook, FaDownload} from 'react-icons/fa';
import {Link, NavLink} from 'react-router-dom';
import '../cssFolder/NavBottomBar.css';


function NavBottomBar({setdata}) {
      const [active, setactive] = useState()
   

  return (
    <div>
      <nav className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark d-flex d-md-none">
        <div className="container col-12">
          <div className="text-white d-flex col-12">
            <NavLink  to="/" exact activeClassName={active}  className="col-2  text-white nav-link text-center">
           <FaHome className='fs-2 px-1 my-1'/>
            </NavLink>
            <NavLink  to="/about" exact activeClassName={active}  className="col-2  text-white nav-link text-center">
           <FaRegUser className='fs-2 mx-3 px-1 my-1'/>
            </NavLink>
            <NavLink  to="/experience" exact activeClassName={active}  className="col-2 text-white nav-link text-center">
           <FaHistory className='fs-2 px-1 my-1'/>
            </NavLink>
            <NavLink  to="/service" exact activeClassName={active}  className="col-2  text-white nav-link text-center">
           <FaTasks className='fs-2 px-1 my-1'/>
            </NavLink>
            <NavLink to="/contact" exact activeClassName={active}  className="col-2  text-white nav-link text-center">
           <FaRegAddressBook className='fs-2 my-1 px-1'/>
            </NavLink>
            <NavLink to="/projects" exact activeClassName={active}  className="col-2 text-white nav-link text-center">
           <FaDownload className='fs-2 px-1 my-1'/>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBottomBar