import React from 'react';
import '../cssFolder/SkillsTools.css';
import {Link} from 'react-router-dom';
import {FaRegCopyright} from 'react-icons/fa'

function SkillsToolsTwo() {
  return (
      <body className="container text-white con bg-transparent col-10 col-md-6 p-4 overflow-auto">
        <div className="text mb-5 mx-auto col-12">
          <p className="text-center">
          <span className="text col-4 fs-5 fw-lighter me-5">Html5</span>
            <span className="text-end col-4 fs-5 fw-lighter ms-5"> Tailwind</span>
          </p>
            <h1 className="text text-center">
               <span className="text col-4 fs-5 fw-lighter">Figma </span> 
               <span className="text  mx-4"> Web Design </span>
            <span className="text col-4 fs-5 fw-lighter"> Css3</span>
            </h1>
           <div className="text-center">
           <span className="text col-4 fs-5 fw-lighter me-5 ">Bootstrap</span>
            <span className="text col-4 fs-5 fw-lighter ms-5"> Scss</span>
           </div>
        </div>

        {/* <hr /> */}

        <div className="text mb-5 mx-auto col-12">
          <p className="text-center">
          <span className="text col-4 fs-5 fw-lighter me-5">JavaScript</span>
            <span className="text-end col-4 fs-5 fw-lighter ms-5"> Angular.js</span>
          </p>
            <h1 className="text text-center">
               <span className="text  mx-4"> Web Development </span><br />
            </h1>
            <p className="text-center">
            <span className="text col-4 fs-5 fw-lighter me-5">React.js </span> 
            <span className="text col-4 fs-5 fw-lighter ms-5"> Anime.js</span>
            </p>
        </div>

        {/* <hr /> */}
        
        <div className="text mb-5 mx-auto col-12">
          <p className="text ps-5 col-10 ms-5">
            <span className="text-end col-4 fs-5 fw-lighter ms-5 "> Photoshop</span>
          </p>
            <h1 className="text text-center">
               <span className="text  mx-4"> Graphic Design </span><br />
            </h1>
            <p className="text-end  col-10">
            <span className="text col-4 fs-5 fw-lighter me-5">Canva </span> 
            </p>
        </div>
        
        {/* <hr /> */}

        <div className="text mb-5 mx-auto col-12">
          <p className="text-center">
          <span className="text col-4 fs-5 fw-lighter me-5">PowerPoint</span>
            <span className="text-end col-4 fs-5 fw-lighter ms-5"> Publisher</span>
          </p>
            <h1 className="text text-center">
               <span className="text col-4 fs-5 fw-lighter">Access </span> 
               <span className="text  mx-4"> Ms Office </span>
            <span className="text col-4 fs-5 fw-lighter">Exel</span>
            </h1>
           <div className="text-center">
           <span className="text col-4 fs-5 fw-lighter">Ms Word</span>
           </div>
        </div>

        {/* <hr  className='mb-5'/> */}
        <div className="text-center mt-5 mb-5 position-relative">
              <Link to="/contact">
              <button className="btn btt col-6 mx-3 col-md-3 py-2 fs-5 fw-bold fst-italic">Contact</button>
              </Link>
       </div>
          <footer className="text-center fw-normal "><FaRegCopyright/> 2022 All right reserved by <span className="text ccc fw-bold fst-italic">WastroTech</span></footer>
      </body>
  )
}

export default SkillsToolsTwo