import React from 'react'
import Header from '../Components/Header'

const Home = () => {
  return (
    <div>
        <Header/>
        <div className='introduction flex-with-center ' style={{backgroundImage:`url(./assests/introbg.svg)`}}>
         <div>
            <h1>Ariya Das</h1>
            <div className='intro-content d-flex justify-content-between'>
                <p>Mern Stack  Developer</p>
                <button className='primary-button font-bold w-50'>
                 Get Started
                </button>
              
            </div>
         </div>
        </div>
    </div>
   
  )
}

export default Home