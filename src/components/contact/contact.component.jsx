import React from 'react'

import './contact.styles.css'
import '../../assets/grid/css/2cols.css'

const Contact = () => {
  return (
    <div className='contact-section' >
        <div className='contact-container span_1_of_2' >
            <form className='contact-form' >
                <div className='text' >
                    <div>
                        <label>
                            Name
                        </label>
                        <input type='text'  />
                    </div>
                    <div>
                        <label>
                            Email
                        </label>
                        <input type='email'  />
                    </div>
                </div>
                <label>
                    Message
                </label>
                <textarea rows='10' cols='10'></textarea>
            </form>
        </div>
        <div className='contact-text-box span_1_of_2' >
            <div className='contact-display' >
                <h2>Contact me by <span>email</span> or <span>social media</span></h2>
                <ion-icon  name="logo-linkedin" onClick={e => window.location.href='https://www.linkedin.com/in/parrish-williamson-662410a1/'} ></ion-icon> &nbsp;
                <ion-icon  name="logo-github" onClick={e => window.location.href='https://github.com/amadi5892'} ></ion-icon>
            </div>
        </div>
    </div>
    
  )
}

export default Contact
