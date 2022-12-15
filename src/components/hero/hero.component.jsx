import React from 'react'

import './hero.styles.css';
import '../../assets/grid/css/2cols.css'

const Hero = () => {
  return (
    <div className='hero-section' >
      <div className='hero-container' >
        <div className='hero-text-box span_1_of_2' >
          <h2>
            Hello,
          </h2>
          <h2>I am <span>Parrish</span>.</h2>
          <h2>Front End Developer</h2>
        </div>
        <div className='hero-btn-section span_1_of_2'>
          <button className='hero-btn' onClick={e => window.location.href='#contact'}>Let's get in touch!</button>
        </div>
      </div>
      <div className='sub-hero-container' >
        <div>
          <p>Currently located in <span>New York, NY</span>. I love building creative interactive web applications.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
