import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='p-[30px] h-screen relative'>
        <main className=' h-full border border-[#cccccc] rounded-3xl relative'>
            {children}
        </main>     
    </div>
  )
}

export default Layout