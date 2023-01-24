import React, {} from 'react'
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa'
import './social.css'
export type myColors = "Blue" | "Red" | "Green";
interface socialProps {
  color : myColors
}

const Social = (props : socialProps) => {
    
  return (
    <div className='social'>
    <ul className='social-ul' data-color={props.color}>
        <li className='social-li' title='GitHub' data-represent='GitHub'>
           <a href="" ><FaGithub /> </a>
        </li>
        <li className='social-li' title='LinkedIn' data-represent='Linkedin'>
           <a href=""> <FaLinkedin/></a>
        </li>
        <li className='social-li' title='Facebook' data-represent='Facebook'>
           <a href=""> <FaFacebook/></a>
        </li>
    </ul>
</div>
  )
}

export default Social