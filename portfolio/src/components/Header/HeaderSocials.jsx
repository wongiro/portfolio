import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiHashnode} from 'react-icons/si'
import {BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com' target="_blank"><FaGithub/></a>
        <a href='https://hashnode.com' target="_blank"><SiHashnode/></a>
        <a href='https://twitter.com' target="_blank"><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials