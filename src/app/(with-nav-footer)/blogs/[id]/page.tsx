import { NextPage } from 'next';
import React from 'react'

interface IProps{
  params: {id:string};
}

const BlogPage : NextPage <IProps> = ({params}) => {
  console.log(" ~ BlogPage ~ props:", {id: params.id});
  return (
    <main className='flex justify-center items-center w-full h-screen'>
      <h1 className='text-5xl font-bold text-red-800'>Blog id {params.id}</h1>
    </main>
  )
}

export default BlogPage;