import React from 'react'
import HomeIntro from '../components/HomeIntro'
import HomePicture from '../components/HomePicture'
// import PartoclesBackground from '../components/PartoclesBackground'

function Home() {
  return (
   <>
   <div className="text d-grid d-md-flex mx-auto  mt-4">
    {/* <PartoclesBackground/> */}
   <HomePicture/>
   <HomeIntro/>
   </div>
   </>
  )
}

export default Home