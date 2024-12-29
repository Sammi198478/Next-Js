import React, { FC, ReactNode } from 'react'

const AuthLayout: FC<{children:ReactNode}> = ({children}) => {
  return (
    <div>
        <h1>This is Auth Layout top</h1>
        {children}
        <p>Auth Footer</p>
    </div>
  )
}

export default AuthLayout;