import React from 'react'
import img from '../images/ProfilePicture2.png';
import '../cssFolder/HomePicture.css';

function HomePicture() {
  return (
    <div className='col-11 col-md-4  h-100  mx-auto tex justify-content-center'>
      <div className='w-100   mx-auto text-center '>
      <img src={img} className=" text-center h-100  rounded-circle w-100 imm"  alt="" />
      </div>
    </div>
  )
}

export default HomePicture