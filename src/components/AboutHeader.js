import React from 'react';
import Typed from 'typed.js';

function AboutHeader() {
     // Create reference to store the DOM element containing the animation
     const el = React.useRef(null);
     // Create reference to store the Typed instance itself
         const typed = React.useRef(null);
   
     React.useEffect(() => {
       const options = {
             strings: [
           'EMMANUEL OLUWATAYESE ADETUTU,',
           'A FULL STACK WEB DEVELOPER,',
           'A BLOGER,',
           'A YOUTUBER,',
           'A DIGITAL MARKETER,',
           'A UI/UX DESIGNER.'
         ],
         typeSpeed: 40,
         backSpeed: 80,
         loop: true,
       };
       
       // elRef refers to the <span> rendered below
       typed.current = new Typed(el.current, options);
       
       return () => {
         // Make sure to destroy Typed instance during cleanup
         // to prevent memory leaks
         typed.current.destroy();
       }
     })
 return (
   <div>
      <h1 className="text col-12"> I AM <span className="text spa fw-bold"  ref={el}></span></h1>
   </div>
 )
}


export default AboutHeader