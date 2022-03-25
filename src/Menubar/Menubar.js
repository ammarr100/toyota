import React, { useState } from 'react';
import Desktopbar from './Desktopbar';
import Mobilebar from './Mobilebar';
import './Menubar.css'
import {FiMenu} from 'react-icons/fi'
import {CgClose} from 'react-icons/cg'
import logo from '../Menubar/logo.jpeg'

const Menubar = () => {

    const [toggle, setToggle] = useState(false)

    const openHam = <FiMenu onClick={()=>setToggle(!toggle)}/>
    const closeHam = <CgClose onClick={()=>setToggle(!toggle)}/>

  return (
      <>
        <section className='menubar-desktop'>
            <div className='desktop-container container'>
            <div className='menu-logo'>
                <img src={logo} alt="" />
            </div>
                <div className='desktopbar'>
                <Desktopbar/>
                </div>
            </div>
        </section>

        <section className='menubar-mobile'>
            <div className='mobile-container container'>
               
                    <div className='ham-container'>
                    { toggle ? closeHam : openHam}
                    </div> 

                    <div className='mobile-links'>
                    
                        {toggle && <Mobilebar/> }
                    
                    </div>             
                                    
                
            </div>
        </section>          
          
      </>
  )
};

export default Menubar;
