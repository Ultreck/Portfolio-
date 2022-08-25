import React from 'react'
import ContactBackground from '../components/ContactBackground'
import ContactsPage from '../components/ContactsPage'

function Contact() {
  return (
      <div className='mt-4 fs-4 fw-bold py-3' style={{zIndex:"1"}} >
        <ContactBackground/>
        <ContactsPage/>
      </div>
  )
}

export default Contact