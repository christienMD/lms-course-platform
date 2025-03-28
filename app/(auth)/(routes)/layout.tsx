import React from 'react'

interface Props {
    children: React.ReactNode
}

const AuthLayout = ({children}:Props) => {
  return (
    <div className='h-full flex items-center justify-center'>
        {children}
    </div>
  )
}

export default AuthLayout