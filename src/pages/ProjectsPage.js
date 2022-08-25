import React from 'react';
import PartoclesBackground from '../components/PartoclesBackground';
import Projects from '../components/Projects';
import '../cssFolder/Projects.css';

export default function ProjectsPage() {
  return (
     <div className='mt-4  text-white overflow-hidden' style={{zIndex:"1"}} >
  <PartoclesBackground/>
 <Projects/>
      </div>
  )
}
