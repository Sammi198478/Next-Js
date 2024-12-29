import { error } from 'console'
import React from 'react'

function getRandomNumber(count:number):number{
  return Math.floor(Math.random()*count);
}

const HomePage = () => {

  const showErrorPage =  getRandomNumber(2) === 1;
    if(showErrorPage ){
      throw new Error("Show Error Page");
    }

  return (
    <div>

      <h1 className='text-center text-4xl text-amber-800 font-bold'>HomePage</h1>
  
    </div>
  )
}

export default HomePage;