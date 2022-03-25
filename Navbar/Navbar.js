import React, { useState } from 'react';
import Desktop from './Desktop';
import Mobile from './Mobile';
import './Navbar.css'
import {FiMenu} from 'react-icons/fi'
import {CgClose} from 'react-icons/cg'

const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    const openHam = <FiMenu className='hamburger'  onClick={()=>setToggle(!toggle)}/>
    const closeHam = <CgClose className='hamburger'  onClick={()=>setToggle(!toggle)}/>


  return (
      
      <>
      
          <section className='navbar-desktop'>
                
                <div className='desktop-container container'>
                <div className='logo container'>
                    <h1>Logo</h1>
                </div>
                
             
                    <div className='desktop'>
                        <Desktop/>
                    </div>
                    
                </div>
                
          </section>

          <section className='navbar-mobile'>
          <div className='mobile-container container'>
               
               <div className='ham-icon'>
                   {
                       toggle ? closeHam : openHam
                   }
                  
               </div>
               <div className='mobile'>
               {
                    toggle && <Mobile/>
               }
               
               </div>
           </div>
          </section>
      </>
  )
};

export default Navbar;
