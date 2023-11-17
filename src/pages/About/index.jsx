import './style.css'
import { motion } from 'framer-motion'
import React from 'react'
import Navbar from '../../Components/Navbar'

function About() {
    
  return (
    
    <div>
      <Navbar />
        <div className='container-about'>  
        <div>
        <motion.img whileHover={{scale:0.9, opacity:0.2}} className='img-about' src="./src/assets/image/about.png" alt="" />
        </div>
        <div className='description-about' id='about'>
        <motion.h1 initial={{x: 900}} animate={{x: 0}} transition={{duration:"2", }} className='heading'>About<span>Me</span></motion.h1>
        <motion.h1 initial={{x: 900}} animate={{x: 0}} transition={{duration:"2",  }} className='myname'>Hello I'm <h1 className='container-name'>Nurfaizzi Rasyid</h1></motion.h1>
        <motion.p  initial={{x: 900}} animate={{x: 0}} transition={{duration:"2", }}> I am a frontend developer from Indonesia, I graduated from a vocational high school, and have attended a bootcamp at Binar Academy</motion.p>
        </div>
        </div>
   
    </div>
  )
}

export default About