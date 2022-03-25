import React from 'react';
import './Demo3.css'
import car3 from '../Demo3/car3.jpeg'
import text from '../Demo3/textIcon3.png'
const Demo3 = () => {
  return (
      <>
          <section className='demo3'>
                <div className='demo-container3'>
                        <div className='demo-image3'>
                            <img src={car3} alt="" />
                        </div>
                        <div className='demo-text3'>
                        <div className='demo-imageText3'>
                        <div className='imageHeading3'>
                            {/* <img src={text} alt="" /> */}
                            <h1>Neue Toyota Concept <br /> Cars in Tokio</h1>
                            </div>
                        </div>
                            
                            <p>While we can't predict the future, we can inspire it. So what will our cars look like and how will they function? Will we drive them or will they drive us? That seems to be the question on everyone's mind. Well, we have an idea. Cars are for people who want to go to more places safely and efficiently</p>
                            <button className = 'btn-demo3'><a href="">Learn More</a></button>

                            </div>
                            
                        </div>
                
          </section>
      </>
  )
};

export default Demo3;
