import React from 'react';
import './Demo6.css'
import car from '../Demo6/car6.jpeg'

const Demo6 = () => {
  return (
      <>
          <section className='demo6'>
                <div className='demo-container6'>
                        <div className='demo-image6'>
                            <img src={car} alt="" />
                        </div>
                        <div className='demo-text6'>
                        <div className='demo-imageText6'>
                        <div className='imageHeading6'>
                            {/* <img src={text} alt="" /> */}
                            <h1>The Future has Arrived</h1>
                            </div>
                        </div>
                            
                            <p>While we can't predict the future, we can inspire it. So what will our cars look like and how will they function? Will we drive them or will they drive us? That seems to be the question on everyone's mind. Well, we have an idea. Cars are for people who want to go to more places safely and efficiently</p>
                            <button className = 'btn-demo6'><a href="">Join Now</a></button>

                            </div>
                            
                        </div>
                
          </section>
      </>
  )
};

export default Demo6;
