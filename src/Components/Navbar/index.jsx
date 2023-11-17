import React, { useState } from 'react'
import './style.css'
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
                  
                    <a href="">Home</a>
                    <a href="#about">About</a>
                    <a href="">My Skill</a>
                    <a href="">Contac Me</a>
                </li>
            </ul>
        </nav>
     
{isToogle &&<div className='nav' >
          <ul>
            <li>
           
                    <a href="">Home</a>
                    <a href="#about">About</a>
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