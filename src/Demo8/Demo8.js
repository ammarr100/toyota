import React from 'react';
import Data8 from './Data8';
import './Demo8.css'

const Demo8 = ({carImage}) => {
  return (
      <>
        <section className='demo8'>
                <div className='demo8-container '>

                <div className='demo8-cars'>
                {

                   
                        Data8.map((items, index)=>(
                            <div className='cars'>        
                                <img src={items.carImage} alt=""/>
                                </div>
                                
                            
                                
                        ))
                    }
                </div>
                    

                    
                </div>
        </section>
      </>
  )
};

export default Demo8;
