import React from 'react';
import '../Demo2/Demo2.css'
import car2 from '../Demo2/car2.jpeg'

const Demo2 = () => {
  return (
      <>
          <section className='demo2'>
                <div className='demo-container2'>
                        <div className='demo-image2'>
                            <img src={car2} alt="" />
                        </div>
                        <div className='demo-text2'>
                        <div className='demo-imageText2'>
                        <div className='imageHeading2'>
                            {/* <img src={text} alt="" /> */}
                            <h1>Less of a Machine. <br /> More of a Pal</h1>
                            </div>
                        </div>
                            
                            <p>While we can't predict the future, we can inspire it. So what will our cars look like and how will they function? Will we drive them or will they drive us? That seems to be the question on everyone's mind. Well, we have an idea. Cars are for people who want to go to more places safely and efficiently</p>
                            <button className = 'btn-demo2'><a href="">Learn More</a></button>

                            </div>
                            
                        </div>
                
          </section>
      </>
  )
};

export default Demo2;
