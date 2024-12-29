'use client';


import React, { FC } from 'react'

interface IErrorPage{
    error:Error;
    reset: ()=> void;
}

const ErrorPage: FC<IErrorPage> = ({error,reset}) => {
  return (
    <div className='w-full h-[70vh]  flex justify-center items-center flex-col gap-10'>
        <h1 className='text-5xl font-bold text-red-700'>This is Error Page</h1>
        <h1 className='text-3xl font-bold text-red-900'>Error Message:{error.message}</h1>
        <button onClick={reset} className='bg-purple-600 text-white rounded-lg px-4 py-1'>Reset</button>
    </div>
  )
}

export default ErrorPage;