import './footersyles.css';
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa';
import React from 'react'


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:"white", marginRight:"2rem"}}/>
                    <div>
                       <p>123 Housing Society</p>
                     <p>Ethiopia</p>
                    </div> 
                </div>
                <div className='phone'>
                <h4><FaPhone size={20} style={{color:"white", marginRight:"2rem"}}/>
                    
                       +251940423488</h4>
                    
                </div>
                <div className='email'>
                <h4> <FaMailBulk size={20} style={{color:"white", marginRight:"2rem"}}/>
                    
                       NatiHaile6568@Gmail.Com</h4>
                    
                </div>
            </div>
            <div className='right'>
                <h4>About Me</h4>
                <p>This is Natnael Haile, I'm a software Developer </p>
                <div className='social'>
                <FaFacebook size={30} style={{color:"white", margin:"1rem 1rem"}}/>
                <FaTwitter size={30} style={{color:"white", margin:"1rem 1rem"}}/>
                <FaLinkedin size={30} style={{color:"white", margin:"1rem 1rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
