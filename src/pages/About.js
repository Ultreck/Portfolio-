import React from 'react'
// import AboutBackgroundColor from '../components/AboutBackgroundColor';
import '../cssFolder/About.css';
import AboutPicture from '../components/AboutPicture';
import AboutIntro from '../components/AboutIntro';

function About({setdata}) {
  return (
      <div className='mt-4 fs-4 fw-bold p-5 bg-transparent' style={{zIndex:"1"}} >
        {/* <AboutBackgroundColor/> */}
          <div className="text-white about d-md-flex">
            <AboutPicture/>
            <AboutIntro setdata={setdata}/>

          </div>
      </div>
  )
}

export default About