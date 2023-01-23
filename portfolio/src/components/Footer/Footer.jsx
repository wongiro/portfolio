import React from 'react'
import HeaderSocials from '../Header/HeaderSocials'
import './Footer.css'
import {SiHashnode} from 'react-icons/si'
import {BsTwitter} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi' 

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>ROBINSON</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About Me</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>My Projects</a></li>
        <li><a href='#contact'>Contact Me</a></li>
      </ul>

      <div className='footer__socials'>
      <a href='https://instagram.com' target="_blank"><FiInstagram/></a>
        <a href='https://hashnode.com' target="_blank"><SiHashnode/></a>
        <a href='https://twitter.com' target="_blank"><BsTwitter/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Robinson 'Wonjiro' Rubangakene. All rights reserved</small> 
      </div>
    </footer>
  )
}

export default Footer