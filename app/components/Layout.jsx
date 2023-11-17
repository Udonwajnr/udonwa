import React from 'react'
import Link from 'next/link'
const Layout = ({children}) => {
  return (
    <>
      <div className='p-[30px] lg:p-[15px] h-screen lg:h-full relative'>
          <main className=' h-full border border-[#cccccc] rounded-3xl relative lg:border-0'>
              {children}
          </main>
          <footer className='hidden lg:flex justify-between items-center font-mono mt-5'>
            <div className='text-[20px]'>Udonwa.org</div>
              <div className='flex gap-x-5 items-center justify-center'>
                  <Link href={"https://twitter.com/Udonwa7"} target='_blank' className='hover:underline text-black text-[14px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231l5.45-6.231Zm-1.161 17.52h1.833L7.045 4.126H5.078L17.044 19.77Z"></path></svg>
                  </Link>
                </div>

          </footer>
      </div>

    
    </>
  )
}

export default Layout