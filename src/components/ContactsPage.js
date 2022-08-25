import React, { useRef, useState } from 'react';
// import {Link} from 'react-router-dom';
import '../cssFolder/ContactsPage.css';
import emailjs from '@emailjs/browser';
import {FaFacebook, FaWhatsapp, FaTwitter, FaInstagram, FaLinkedin, 
      FaYoutube, FaDownload, FaRegCopyright} from 'react-icons/fa';
import image from "../images/MinimalistCVResume.png";


function ContactsPage() {
      const [firstName, setFirstName] = useState('');
      const [lastName, setLastName] = useState('');
      const [message, setMessagel] = useState('');

      const form = useRef();

      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(
            'service_26pqjht', 
            'template_twlglg9', 
            form.current, '5gnyed-zn_Ooi6BAJ')
          .then((result) => {
            alert(result.text);
            setFirstName('');
            setLastName('');
            setMessagel('');
          }, (error) => {
              console.log(error.text);
          });
      };
    
  return (
        <>
      <div className='d-grid d-md-flex col-12 mt-5'>
      <div className="text-white mt-5  d-grid col-12 col-md-6 h-100 cpage1">
            <h1 className="text-center mt-4">Chat me up </h1>
            <ul className="text  col-10 mx-auto">
                  <li className="text ulli  col-10 col-md-4  my-3">
                        <a href="https://www.facebook.com/emmanuel.oluwatayese" className="text">
                                    <FaFacebook className="mx-auto my-auto mt-1 text-primary app fs-1"/>
                                    <span className="text-white ms-4  fs-5 fw-normal ">Facebook</span>
                        </a>
                  </li>
                  <li className="text ulli  col-md-4 my-3 col-10">
                        <a href="https://wa.me/qr/6VF2TF3N3PN7G1" className="text">
                                    <FaWhatsapp className="mx-auto fs-1 green app"/>
                                    <span className="text-white ms-4  fs-5 fw-normal">Whatsapp</span>
                        </a>
                  </li>
                  <li className="text ulli  col-md-4 my-3 col-10">
                        <a href="https://twitter.com/Ultreck1?s=09" className="text">
                              <FaTwitter className="mx-auto fs-1  text-primary app"/>
                              <span className="text-white ms-4  fs-5 fw-normal">Twitter</span>
                        </a>
                  </li>
                  <li className="text ulli  col-md-4 my-3 col-10">
                        <a href="https://www.instagram.com/emmanuel_oluwatayese?r=nametag" className="text">
                              <FaInstagram className="mx-auto fs-1 pink app"/>
                              <span className="text-white ms-4  fs-5 fw-normal">Instagram</span>
                        </a>
                  </li>
                  <li className="text ulli col-10 my-3 col-md-4">
                        <a href="https://www.linkedin.com/in/a-emmanuel-oluwatayese-39254b218" className="text">
                              <FaLinkedin className="mx-auto fs-1 text-primary app"/>
                              <span className="text-white ms-4  fs-5 fw-normal">Linkedin</span>
                        </a>
                  </li>
                  <li className="text ulli  col-md-4 my-3 col-10">
                        <a href="https://youtube.com/channel/UCO1CNgEARCnuodUuy9JVaAw" className="text">
                              <FaYoutube className="mx-auto fs-1  red app"/>
                              <span className="text-white ms-4 fs-5 fw-normal ">Youtube</span>
                        </a>
                  </li>
            </ul>
            <div className="text-white col-10 mx-auto">
                  <h1 className="text mx-auto text-center fw-bold">Let's talk bussiness</h1>
                  <p className="text fs-5 fw-normal text-center col-10 mx-auto">Now that you know a lot about me, let me know if you are interested to work with me/to give me work.</p>
                  <form className=" mt-4" ref={form} onSubmit={sendEmail}>
                        <div className="text ">
                              <div className="text d-flex mx-auto">
                                    <div className="text d-grid cond mx-1 mx-md-auto">
                                          <input type="text" 
                                          className="text all rounded w-100"  
                                          placeholder='name'  name="user_name"
                                           value={firstName}
                                           onChange={e => setFirstName(e.target.value)}/>
                                          <label htmlFor="" className="text col-5 fst-italic col-md-3  ms-1" >Name</label>
                                    </div>
                                    <div className="text d-grid  cond mx-1 mx-md-auto">
                                          <input type="text" 
                                          className="text all rounded w-100" 
                                           placeholder='email' 
                                           name="user_email"
                                           value={lastName}
                                           onChange={e => setLastName(e.target.value)}/>
                                          <label htmlFor="" className="text col-6 fst-italic  col-md-3 ms-1">E-mail</label>
                                    </div>
                              </div>
                              <div className="text mx-auto d-grid  col-11 cond">
                                    <textarea textarea name="message"  
                                    id="textarea" rows="5"
                                     className="text   mx-auto col-12 rounded"  
                                     placeholder='Message'
                                     value={message}
                                     onChange={e => setMessagel(e.target.value)}></textarea>
                                          <label htmlFor="" className="text ms-3 col-3 fst-italic "></label>
                              </div>
                        </div>
                  <div className="text-end col-11 mx-auto mt-4 subm">
                        <button type='submit' className="text-white  mx-auto col-5 col-md-5 rounded btn fw-bold fst-italic">Get In Touch</button>
                  </div>
                  </form>
            </div>
      </div>


      <div className="text-white  col-11 col-md-6 mx-auto mt-5 myresume">
            <h1 className="text-center">My Resume</h1>
            <img src={image} alt="" className="text w-100 h-100 mt-2" />
            <div className="text-center mt-4 enddiv">
                   <a href={image} className="text-white fs-5 fw-bold fst-italic btn border" download={'MyVc'}>Download Resume <FaDownload className="text-info"/></a>
            </div>
      </div>
      </div>
                  <footer className="text-light fs-5 fs-md-4 col-md-8 fw-normal mx-auto"><FaRegCopyright className='ms-3'/> 2022 All right reserved by <span className="text fw-bold fst-italic spa">WastroTech</span></footer>
      </>
  )
}

export default ContactsPage

