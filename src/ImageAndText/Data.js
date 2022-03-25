import React from 'react';
import './Data.css'
import mobile from '../ImageAndText/mobile.jpg'
function Data() {
  return (
      <>
            <section className='data'>
                <div className='data-container container'>
                    <div className='data-imagebox'>
                        <h1>Data Visualization</h1>
                        <img src={mobile} alt="" />
                    </div>

                    <div className='data-textbox'>
                    <div className='textbox-1'>
                    <h1>01. Goals</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, sunt?</p>
                        <button className='btn-data'><a href="">More</a></button>
                    </div>
                        
                        <div className='textbox-2'>
                        <h1>02. Strategy</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, corrupti?</p>
                        <button className='btn-data'><a href="">More</a></button>
                    </div>
                        
                    </div>
                </div>
            </section>
      </>
  )
}

export default Data;
