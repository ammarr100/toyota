import React from 'react';
import './Demo9.css'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Demo9 = () => {
    const fb = <BsFacebook/>
  return(
      <>
      <section className='social-icons'>
      <div className='icons '>


                    <BsFacebook className='gap'/>
                    <BsTwitter className='gap'/>
                    <BsInstagram className='gap'/>
                    
                    
                </div>
      </section>
      
        <footer className='footer'>
                <div className='footer-container container'>
                    <p>Created by Ammar Rashid @ 2022</p>
                </div>
                
        </footer>
      </>
  )
};

export default Demo9;
