import React, { useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
function Navbar() {
  const [isToogle,SetIsToogle] = useState (false)

  const handleToogle = () => {
    SetIsToogle(!isToogle)
  }  
  return (
    <div>
      
        <div className='container-navbar'>
        <h1 className='container-Logo'>Portofolio</h1>
        <i onClick={handleToogle} id='humberger' className={isToogle ? 'fas fa-times' : "fas fa-bars"}></i>
       <nav >
      
            <ul>
                <li>
                <Link to="/home"> 
                <a href="">Home</a>
                    </Link>
                    
                    <Link to="/about"> 
                    <a href="">About</a>
                    </Link>
                    <a href="">My Skill</a>
                    <a href="">Contac Me</a>
                </li>
            </ul>
        </nav>
     
{isToogle &&<div className='nav' >
          <ul>
            <li>
           
            <Link to="/home"> 
                <a href="">Home</a>
                    </Link>
                    <Link to="/about"> 
                    <a href="">About</a>
                    </Link>
                   
                    <a href="">My Skill</a>
                    <a href="">Contac Me</a>
            </li>
          </ul>
        </div>
}
        </div>
       
    </div>
  )
}

export default Navbar