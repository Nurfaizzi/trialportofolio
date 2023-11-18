import React from 'react'
import Navbar from '../../Components/Navbar'
import './style.css'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-router-dom'
function MySkill() {
  return (
    <div>
        <Navbar />
        <div className='card'>
            <h1>Welcome To <span className='heading-skill'>My Skill</span></h1>
           
            <div className='subheading-text'>
            <TypeAnimation
            sequence={["These are the skills and abilities that I have, hopefully they match what you are looking for in your company", 500]}
            style={{
              fontSize: "1em",
              fontFamily: "Georgia, 'Times New Roman', Times, serif;",
          
            }}
            repeat={Infinity}
          />
            </div>
            <div className='button-skill' >
            <Link to={"/project"}>
                <p >My Project<i id='arrow'  className="fa-solid fa-arrow-right"></i></p>
                </Link>
            </div>
        <div className='radial-bars'>
          
            <div className='radial-bar'>
            <svg x="0px" y="0px" viewBox="0 0 200 200" >
                <circle className='progres-bar' cx="100" cy="100" r="80"></circle>
                <circle className='path path-1' cx="100" cy="100" r="80"></circle>
            </svg>
            <div className='precentace'>90%</div>
            <div className='text'>Git</div>
            </div>
            <div className='radial-bar'>
            <svg x="0px" y="0px" viewBox="0 0 200 200" >
                <circle className='progres-bar' cx="100" cy="100" r="80"></circle>
                <circle className='path path-2' cx="100" cy="100" r="80"></circle>
            </svg>
            <div className='precentace'>90%</div>
            <div className='text'>HTML</div>
            </div>
            <div className='radial-bar'>
            <svg x="0px" y="0px" viewBox="0 0 200 200" >
                <circle className='progres-bar' cx="100" cy="100" r="80"></circle>
                <circle className='path path-3' cx="100" cy="100" r="80"></circle>
            </svg>
            <div className='precentace'>90%</div>
            <div className='text'>CSS</div>
            </div>
            <div className='radial-bar'>
            <svg x="0px" y="0px" viewBox="0 0 200 200" >
                <circle className='progres-bar' cx="100" cy="100" r="80"></circle>
                <circle className='path path-4' cx="100" cy="100" r="80"></circle>
            </svg>
            <div className='precentace'>80%</div>
            <div className='text'>Tailwind</div>
            </div>
        </div>
        
        </div>
        </div>

  )
}

export default MySkill