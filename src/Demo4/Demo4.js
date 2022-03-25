import React from 'react';
import './Demo4.css'
import car4 from '../Demo4/car4.png'
import text from '../Demo3/textIcon3.png'
const Demo4 = () => {
  return (
      <>
          <section className='demo4'>
                <div className='demo-container4'>
                        <div className='demo-image4'>
                            <img src={car4} alt="" />
                        </div>
                        <div className='demo-text4'>
                        <div className='demo-imageText4'>
                        <div className='imageHeading4'>
                            {/* <img src={text} alt="" /> */}
                            <h1>Concept-i looks as brilliant</h1>
                            </div>
                        </div>
                            
                            <p>While we can't predict the future, we can inspire it. So what will our cars look like and how will they function? Will we drive them or will they drive us? That seems to be the question on everyone's mind. Well, we have an idea. Cars are for people who want to go to more places safely and efficiently</p>
                            <button className = 'btn-demo4'><a href="">Learn More</a></button>

                            </div>
                            
                        </div>
                
          </section>
      </>
  )
};

export default Demo4;
