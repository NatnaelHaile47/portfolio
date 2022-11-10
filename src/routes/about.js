import React from 'react';
import Navbar from './components/navbar'
import Footer from './components/footer';
import Heroimg2 from './components/heroimg2';

const About = () => {
  return (
    <div>
      <div><Navbar/></div>
      <div><Heroimg2 heading="About" text="I'm friendls software developer"/></div>
      <div><Footer/></div>
    </div>
  )
}

export default About
