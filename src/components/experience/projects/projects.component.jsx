import React from 'react'

import weather from '../../../assets/img/weather-app.jpg'

import './projects.styles.css'
import '../../../assets/grid/css/2cols.css'


const Projects = () => {
  return (
    <div className='projects-container' >
        <div className='projects-text-box span_1_of_2' >
            <h2>Check out my previous <span>projects</span></h2>
        </div>
        <div className='projects-card-container span_1_of_2' onClick={e => window.location.href='https://frolicking-beignet-093c24.netlify.app/'}>
            <div className='projects-card span_1_of_2' >
                <img className='card-img' src={weather} alt='weather app' />
                <h4>Weather App</h4>
            </div>
        </div>
    </div>
  )
}

export default Projects
