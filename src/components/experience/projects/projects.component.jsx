import React from 'react'

import weather from '../../../assets/img/weather-app.jpg'

import './projects.styles.css'
import '../../../assets/grid/css/2cols.css'


const Projects = () => {
    const projs = [
        {
            id: 1,
            image: 'ecomm-app',
            title: 'Ecommerce Website',
            url: 'https://lucent-kringle-f4fb84.netlify.app',
            description: 'React.js, Node.js, Firestore DB, HTML/CSS, Nested Styled Components'
        },
        {
            id: 2,
            image: 'weather-app',
            title: 'Weather App',
            url: 'https://frolicking-beignet-093c24.netlify.app/',
            description: 'JavaScript, HTML/CSS, React, Node.js, State (React)'
        },
        {
            id: 3,
            image: 'expense_tracker',
            title: 'Expense Tracker',
            url: 'https://sprightly-lebkuchen-6f5d49.netlify.app/',
            description: 'JavaScript, HTML/CSS, React, React Hooks, Context API, Node.js'
        },
        {
            id: 4,
            image: 'to_do_list',
            title: 'To-Do List',
            url: 'https://bright-parfait-27c572.netlify.app/',
            description: 'JavaScript, HTML/CSS, React, Node.js, API'
        }
        
    ]

  return (
    <div id='projects' className='projects-container' >
        <div className='projects-text-box span_1_of_2' >
            <h2>Check out my previous <span>projects</span></h2>
        </div>
        <div className='projects-card-container span_1_of_2' >
            {projs.map((proj) => (
                <div className='projects-card span_1_of_2' onClick={e => window.location.href=`${proj.url}`}>
                    <img className='card-img' src={require('../../../assets/img/'+proj.image+'.jpg')} alt='weather app' />
                    <h4>{proj.title}</h4>
                    <p>{proj.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects;

