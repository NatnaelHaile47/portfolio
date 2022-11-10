import './heroimg2styles.css';
import HeroImg from "../../assets/computer.jpg";
import React from 'react';
import { Component } from 'react';

class Heroimg2 extends Component {
  render(){
  return (
    <div className='hero-img'>
      <div className='image'>
            <img className='int-img' src={HeroImg} alt=
            'IntoImg'/>
        </div>
      <div className='middle'>
        <h1>{this.props.heading}</h1>
        <h4>{this.props.text}</h4>
      </div>
    </div>
  )
}
}

export default Heroimg2
