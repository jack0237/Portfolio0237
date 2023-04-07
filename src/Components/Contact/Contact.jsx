import React, { useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

import { useRef } from 'react';

const Contact = () => {

    const form = useRef();

    const [done, setDone] = useState(false)
    
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_t9xoqey', 'template_c8t2wnl', form.current, 'KJ144GW1N_Vq2H1hR')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    };

    



  return (
    <div className="contac-form">
        <div className="w-left">
            <div className="awasome">
                <span>Get in touch</span>
                <span>Contact me</span>
                <div className="blur s-blur1" style={{ background:'#ABF1FF94' }}></div>
            </div>
        </div>

        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user_name' className='user' placeholder='Name' />
                <input type="email" name='user_email' className='user' placeholder='Email' />
                <textarea name="message" placeholder="Message" className="user" />
                <input type="submit" value="Send" className='button' />
                <div className="blur s-blur1" style={{ background:'var(--purple)' }}></div>
                <span>{ done && "Thanks for contacting me!" }</span>
            </form>
        </div>


    </div>
  )
}

export default Contact