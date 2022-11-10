import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer';
import Heroimg2 from './components/heroimg2';

const Project = () => {
  return (
    <div>
      <div><Navbar/></div>
      <div><Heroimg2 heading="Projects" text="Some of my recent works."/></div>
      <div><Footer/></div>
    </div>
  )
}

export default Project
