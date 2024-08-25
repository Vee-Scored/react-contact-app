import React from 'react'

const Container = ({children}) => {
  return (
    <div className='max-w-4xl px-2 py-1 mx-auto'>
        {children}
    </div>
  )
}
 
export default Container