import { NextPage } from 'next';
import React from 'react'

interface IProps{
  params: {id:string; slug: string};
}

const BlogDetailsSlug : NextPage <IProps> = ({params}) => {
  const{id, slug} = params || {};
  return (
    <main className='flex justify-center items-center w-full h-screen'>
      <h1 className='text-5xl font-bold text-red-800'>Blog id </h1>
      <br/>
      <p className='text-2xl font-bold text-blue-800'> Blog id:{id}</p>
      <br/>
      <p className='text-2xl font-bold text-blue-800'>slug id: {slug}</p>
    </main>
  )
}

export default BlogDetailsSlug;