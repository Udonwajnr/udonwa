import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'

const page = () => {
  return (
    <Layout>
      <div className='lg:hidden'>
        <div className='border rounded-full w-12 h-12 flex justify-center items-center absolute right-7 top-5 hover:bg-[#f1f1f1] cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m8 8l32 32M8 40L40 8"></path></svg>
        </div>

          <section className='flex justify-between items-center gap-x-8 py-[30px] pr[20px] h-full font-mono'>
              <div className='relative w-7/12 pl-[40px] border-[#cccccc] border-dotted'>
                  <div className='flex flex-col gap-y-1 my-7'>
                      <span className='font-bold'>Designer & Developer</span>
                      <span>Available for project based freelance</span>
                  </div>
                  <h2 className='text-3xl font-bold my-4'>Umoh Udonwa</h2>
                  <p className='text-2xl'>
                      I'm a Junior Web developer based Uyo, Nigeria.I have 1 year of
                      experience and i specilize in creating websites and web apps. I am
                      open for new opportunities and interesting projects.
                  </p>

                  <div className='flex gap-x-5 mt-5'>
                        <Link href={"https://twitter.com/Udonwa7"} className='hover:underline text-black text-[14px]'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231l5.45-6.231Zm-1.161 17.52h1.833L7.045 4.126H5.078L17.044 19.77Z"></path></svg>
                        </Link>
                  </div>

          <div className='flex gap-x-4 my-10'> 
              <Link  href={"mailto:umohu67@gmail.com"} className='flex items-center gap-x-3 hover:bg-[#f1f1f1] border py-2 px-4 border-[#cccccc] rounded-md'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm8-7.175q.125 0 .263-.038t.262-.112L19.6 8.25q.2-.125.3-.313t.1-.412q0-.5-.425-.75T18.7 6.8L12 11L5.3 6.8q-.45-.275-.875-.012T4 7.525q0 .25.1.438t.3.287l7.075 4.425q.125.075.263.113t.262.037Z"></path></svg>
                  <span className='text-[14px] font-bold'>Contact</span>
              </Link>
              
              <Link target='_blank' href={"/Umoh's_resume.pdf"} download className='flex items-center gap-x-3 hover:bg-[#f1f1f1] border py-2 px-4 border-[#cccccc] rounded-md'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M13 9h5.5L13 3.5V9M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m9 16v-2H6v2h9m3-4v-2H6v2h12Z"></path></svg>
                  <span className='text-[14px] font-bold'>Resume</span>
              </Link>

              <Link target='_blank' href={"https://github.com/Udonwajnr"} download className='flex items-center gap-x-3 hover:bg-[#f1f1f1] border py-2 px-4 border-[#cccccc] rounded-md'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"></path></svg>               
                  <span className='text-[14px] font-bold'>Github</span>
              </Link>
          </div>
      </div>

      <div className='w-5/12'>
          <img src={"img.png"} className='rounded-3xl'/>
      </div>

          </section>

      </div>
    </Layout>
  )
}

export default page