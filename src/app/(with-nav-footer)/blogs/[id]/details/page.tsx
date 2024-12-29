import React from 'react'
import { NextPage } from 'next';

interface IProps{
  params: {id:string};
}

const BlogDetails : NextPage<IProps> = ({ params: {id} }) => {
  return (
    <main className='flex justify-center items-center w-full h-screen'>
    <h1 className='text-5xl font-bold text-red-800'>Blog Details id {id}</h1>
  </main>
  )
}

export default BlogDetails;