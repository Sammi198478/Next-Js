import React, { FC, ReactNode } from 'react'

const AboutLayout: FC<{children:ReactNode}> = ({children}) => {
  return (
    <div>
        <h1 className='text-center font-bold text-3xl text-blue-600'>About Layout</h1>
        {children}
    </div>
  )
}

export default AboutLayout;