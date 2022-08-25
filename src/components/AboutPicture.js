import React from 'react';
import img from '../images/ProfilePicture2.png';
import '../cssFolder/About.css'

function AboutPicture() {
  return (
      <div className='col-11 col-md-4  h-50  mx-auto tex justify-content-center'>
      <div className='w-75   mx-auto text-center aboutimg  rounded'>
      <img src={img} className=" text-center h-100  w-100 abot"  alt="" />
      </div>
    </div>
  )
}

export default AboutPicture