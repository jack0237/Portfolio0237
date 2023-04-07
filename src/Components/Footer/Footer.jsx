import React from 'react'
import './Footer.css'
import Foot from '../../img/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Face from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'

const Footer = () => {
  return (
    <div className="footer">
        <img src={Foot} alt=""  style={{ width: '100%' }}/>
        <div className="f-content">
            <span> jasonngueguim@gmail.com </span>
            <div className="f-icons">
                <Insta color='white' size='3rem' />
                <Face color='white' size='3rem' />
                <Github color='white' size='3rem' />
            </div>
        </div>
    </div>
  )
}

export default Footer