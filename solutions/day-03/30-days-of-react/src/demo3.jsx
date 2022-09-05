import React from 'react'
import './demo3.css'
import asabeneh  from './images/asabeneh.jpg'

export default function Demo3() {
  return (
    <div className='mainContainer'>
        <div className='ImageContainer'>
            <img src={asabeneh} alt="" />
        </div>
        <div className='HeadingContainer'>
            <h1>Aayush Jha</h1>
            <p>Senior Developer, India</p>
        </div>
        <h3 >SKILLS</h3>
        <div className='SkillsContainer'>
            <button>HTML</button>
            <button>CSS</button>
            <button>SASS</button>
            <button>JS</button>
            <button>React</button>
            <button>Node</button>
            <button>MongoDB</button>
            <button>Git</button>
            <button>Oracle</button>

        </div>
        <div className='FooterContainer'>
            <span> Joined on Sep 05, 2022</span>
        </div>
    </div>
  )
}

