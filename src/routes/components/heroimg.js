import React from 'react'
import "./heroimgstyles.css";
import IntroImg from "../../assets/intro-bg.jpg";
import { Link } from 'react-router-dom';

const Heroimg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img' src={IntroImg} alt=
            'IntroImg'/>
        </div>
        <div className='content'>
            <h4>HI, I'M A FREELANCER</h4>
            <h1>React Developer</h1>
            
            <div>
                <Link to="project" className='btn'>Projects</Link>
                <Link to="contact" className='btn btn-light'>contact</Link>
            </div>
            </div>
    </div>
  )
}

export default Heroimg
