import React from 'react';
import Navbar from './components/navbar'
import Footer from './components/footer';
import Heroimg2 from './components/heroimg2';

const Contact = () => {
  return (
    <div>
      <div><Navbar/></div>
      <div><Heroimg2 heading="Contact" text="Lets have a chat"/></div>
      <div><Footer/></div>
    </div>
  )
}

export default Contact
