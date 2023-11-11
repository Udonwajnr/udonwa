import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='p-[30px] h-screen '>
        <div className=' h-full border border-[#cccccc] rounded-3xl'>
            {children}
        </div>     
    </div>
  )
}

export default Layout