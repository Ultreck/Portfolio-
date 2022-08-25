import React from 'react'
// import anime from "animejs/lib/anime.es.js";
import '../cssFolder/HomeIntro.css';
import IntroHeader from './IntroHeader';
// import '../components/HomePicture.css';
import {Link} from 'react-router-dom';
import {FaRegCopyright} from 'react-icons/fa'


function HomeIntro() {
  return (
    <div className='col-10 mx-auto  col-md-6 int mt-md-5'>
       <div className='col-12 mt-0 mt-md-5 fs-4 fw-bold px-3 bg-transparent text-light mx-auto' style={{zIndex:"1"}} >
        <p className="text-white mt-4 mt-md-0">Hi There...</p>
        <IntroHeader/>
        <p className="text">I am a full Stack developer and a junior programmer with good knowledge of both front-end and back-end developer techniques, I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing  web apps. Also I like working in a team, you'll learn faster and much more. As the saying goes; "Two heads are better than one".</p>
       <div className="text mt-5 pb-2 position-relative">
          <Link to="/about">
          <button className="btn btt col-4 mx-3 col-md-3 py-2 fs-5 fw-bold fst-italic">More?</button>
          </Link>
              <Link to="/contact">
              <button className="btn btt col-4 mx-3 col-md-3 py-2 fs-5 fw-bold fst-italic">Contact</button>
              </Link>
       </div>
          <footer className="text fw-normal pb-5"><FaRegCopyright/> 2022 All right reserved by <span className="text ccc fw-bold fst-italic">WastroTech</span></footer>
       
      </div>
    </div>
  )
}

export default HomeIntro
