import React from 'react';
import './Demo.css'
import car from '../Demo/car.jpeg'
import text from '../Demo/textIcon.png'
const Demo = () => {
  return (
      <>
          <section className='demo'>
                <div className='demo-container'>
                        <div className='demo-image'>
                            <img src={car} alt="" />
                        </div>
                        <div className='demo-text'>
                        <div className='demo-imageText'>
                        <div className='imageHeading'>
                            {/* <img src={text} alt="" /> */}
                            <h1>The Future has Arrived</h1>
                            </div>
                        </div>
                            
                            <p>While we can't predict the future, we can inspire it. So what will our cars look like and how will they function? Will we drive them or will they drive us? That seems to be the question on everyone's mind. Well, we have an idea. Cars are for people who want to go to more places safely and efficiently</p>
                            <button className = 'btn-demo'><a href="">Learn More</a></button>

                            </div>
                            
                        </div>
                
          </section>
      </>
  )
};

export default Demo;
