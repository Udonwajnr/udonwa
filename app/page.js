'use client'
import Image from 'next/image'
import Layout from './components/Layout'
import Link from 'next/link'
import { useState } from 'react'
import AboutMe from './components/AboutMe'
import { motion } from 'framer-motion' 

export default function Home() {
  const [about,setAbout] = useState(false)
  console.log(false)
  const toggleAbout =()=>{
    setAbout(!about)
  }

  const variants = {
    open: { opacity: 1,zIndex:3000},
    close: { opacity: 0 },
  }

  return (

    <Layout>
      <div className='flex justify-between py-[30px] pr[20px] h-full font-mono md:flex-col'>
      
        <div  className='relative border-r-2 w-4/12 pl-[40px] border-[#cccccc] border-dotted'>
          {/* <header className='flex gap-x-5 items-center'>
          <div>
            <Link href={"/"}>Udonwa</Link>
          </div> */}

          {/* <div className='h-4 border'></div> */}

        {/* </header> */}
      
          <div className='pr-[40px]'>
            <h1 className='font-bold text-[40px]'>Umoh Udonwa</h1>
            <span className="text-[28px] font-mono ">FullStack Developer</span>
        
            <div className='mt-4 '>
              <p className='text-[17px]'>Howdy, I'm Umoh, a uniquely creative designer and developer with over 15 years of experience. I primarily focus on Idea, Product and Brand. I thrive as a generalist, able to quickly adapt and scale my work across a variety of mediums, infrastructures and tech stacks.</p>
              <p className='text-[17px] mt-7'>I care a lot about biodiversity and land conservation, I play a lot of chess, and I’m usually camping in my free time.</p>
            </div>
          </div>
         
        <div className='mr-[40px] my-10'>
          <hr className='border'/>
        </div>
        {/* use the coding font */}
        <div className='flex flex-wrap gap-2'>
          <div className='text-[#1A1A1A99] hover:text-black cursor-pointer flex items-center justify-center  px-10 py-1.5 border gap-x-5 rounded-3xl'>
            <input type='checkbox' className='cursor-pointer h-4 w-4'/>
            <label className='cursor-pointer hover:text-black text-[14px] font-bold'>App Development</label>
          </div>

          <div className='text-[#1A1A1A99] hover:text-black cursor-pointer flex items-center justify-center  px-10 py-1.5 border gap-x-5 rounded-3xl'>
            <input type='checkbox' className='cursor-pointer h-4 w-4'/>
            <label className='cursor-pointer hover:text-black text-[14px] font-bold'>Web Development</label>
          </div>
          <div className='text-[#1A1A1A99] hover:text-black cursor-pointer flex items-center justify-center  px-10 py-1.5 border gap-x-5 rounded-3xl'>
            <input type='checkbox' className='cursor-pointer h-4 w-4'/>
            <label className='cursor-pointer hover:text-black text-[14px] font-bold'>Html/Css</label>
          </div>

          <div className='text-[#1A1A1A99] hover:text-black cursor-pointer flex items-center justify-center  px-10 py-1.5 border gap-x-5 rounded-3xl'>
            <input type='checkbox' className='cursor-pointer h-4 w-4'/>
            <label className='cursor-pointer hover:text-black text-[14px] font-bold'>Javascript</label>
          </div>

          <div className='text-[#1A1A1A99] hover:text-black cursor-pointer flex items-center justify-center  px-10 py-1.5 border gap-x-5 rounded-3xl'>
            <input type='checkbox' className='cursor-pointer h-4 w-4'/>
            <label className='cursor-pointer hover:text-black text-[14px] font-bold'>ReactJS</label>
          </div>

          <div className='text-[#1A1A1A99] hover:text-black cursor-pointer flex items-center justify-center  px-10 py-1.5 border gap-x-5 rounded-3xl'>
            <input type='checkbox' className='cursor-pointer h-4 w-4'/>
            <label className='cursor-pointer hover:text-black text-[14px] font-bold'>React Native</label>
          </div>
        
          <div className='text-[#1A1A1A99] hover:text-black cursor-pointer flex items-center justify-center  px-10 py-1.5 border gap-x-5 rounded-3xl'>
            <input type='checkbox' className='cursor-pointer h-4 w-4'/>
            <label className='cursor-pointer hover:text-black text-[14px] font-bold'>TypeScript</label>
          </div>

          <div className='text-[#1A1A1A99] hover:text-black cursor-pointer flex items-center justify-center  px-10 py-1.5 border gap-x-5 rounded-3xl'>
            <input type='checkbox' className='cursor-pointer h-4 w-4'/>
            <label className='cursor-pointer hover:text-black text-[14px] font-bold'>NextJS</label>
          </div>

          <div className='text-[#1A1A1A99] hover:text-black cursor-pointer flex items-center justify-center  px-10 py-1.5 border gap-x-5 rounded-3xl'>
            <input type='checkbox' className='cursor-pointer h-4 w-4'/>
            <label className='cursor-pointer hover:text-black text-[14px] font-bold'>Express</label>
          </div>

          <div className='text-[#1A1A1A99] hover:text-black cursor-pointer flex items-center justify-center  px-10 py-1.5 border gap-x-5 rounded-3xl'>
            <input type='checkbox' className='cursor-pointer h-4 w-4'/>
            <label className='cursor-pointer hover:text-black text-[14px] font-bold'>Postgres</label>
          </div>
        
          <div className='text-[#1A1A1A99] hover:text-black cursor-pointer flex items-center justify-center  px-10 py-1.5 border gap-x-5 rounded-3xl'>
            <input type='checkbox' className='cursor-pointer h-4 w-4'/>
            <label className='cursor-pointer hover:text-black text-[14px] font-bold'>Mongodb</label>
          </div>
          <div className='text-[#1A1A1A99] hover:text-black cursor-pointer flex items-center justify-center  px-10 py-1.5 border gap-x-5 rounded-3xl'>
            <input type='checkbox' className='cursor-pointer h-4 w-4'/>
            <label className='cursor-pointer hover:text-black text-[14px] font-bold'>Sequelize</label>
          </div>
        </div>

        <div className='flex gap-x-4 align-bottom absolute bottom-0 '>
          <button onClick={toggleAbout} className='flex items-center gap-x-3 hover:bg-[#f1f1f1] border py-2 px-4 border-[#cccccc] rounded-md '>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12Zm-8 8v-2.8q0-.85.438-1.563T5.6 14.55q1.55-.775 3.15-1.163T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20H4Z"></path></svg>
            <span className='text-[14px] font-bold'>About</span>
          </button>
          <Link href={"mailto:umohu67@gmail.com"} className='flex items-center gap-x-3 hover:bg-[#f1f1f1] border py-2 px-4 border-[#cccccc] rounded-md'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm8-7.175q.125 0 .263-.038t.262-.112L19.6 8.25q.2-.125.3-.313t.1-.412q0-.5-.425-.75T18.7 6.8L12 11L5.3 6.8q-.45-.275-.875-.012T4 7.525q0 .25.1.438t.3.287l7.075 4.425q.125.075.263.113t.262.037Z"></path></svg>
            <span className='text-[14px] font-bold'>Mail</span>
          </Link>
          <Link target='_blank' href={"/Umoh's_resume.pdf"} download className='flex items-center gap-x-3 hover:bg-[#f1f1f1] border py-2 px-4 border-[#cccccc] rounded-md'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M13 9h5.5L13 3.5V9M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m9 16v-2H6v2h9m3-4v-2H6v2h12Z"></path></svg>
            <span className='text-[14px] font-bold'>Resume</span>
          </Link>
          <Link target='_blank' href={"/Umoh's_resume.pdf"} download className='flex items-center gap-x-3 hover:bg-[#f1f1f1] border py-2 px-4 border-[#cccccc] rounded-md'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M13 9h5.5L13 3.5V9M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m9 16v-2H6v2h9m3-4v-2H6v2h12Z"></path></svg>
            <span className='text-[14px] font-bold'>Github</span>
          </Link>
        </div>
          
        </div>

        {/* second section */}

        <div className='w-8/12 border-[#cccccc] border-dotted  overflow-y-scroll flex flex-col gap-y-9 p-[40px]'>
            {/* works */}
            <div className='  w-full flex flex-col'>
                <div className='border shadow-lg hover:border-black rounded-xl'>
                   <img src={"./img1.png"} className='w-full h-full rounded-xl'/>
                </div>

                <div className=' h-full px-5 py-5 bg-[#f6f6f6] flex justify-between rounded-xl'>
                  <Link href={"https://starbucks-home-design.vercel.app/"} className='hover:underline text-black text-[20px]'>StarBucks Landing Page</Link>

                  <div className='flex  items-center gap-x-5'>
                    <div className='flex items-center gap-x-3'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1,5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M12.005 15.154q1.524 0 2.586-1.067t1.063-2.592q0-1.524-1.067-2.586t-2.592-1.063q-1.524 0-2.586 1.067t-1.063 2.592q0 1.524 1.067 2.586t2.592 1.063ZM12 14.2q-1.125 0-1.913-.787T9.3 11.5q0-1.125.788-1.913T12 8.8q1.125 0 1.913.788T14.7 11.5q0 1.125-.787 1.913T12 14.2Zm.003 3.8q-3.25 0-5.922-1.768q-2.673-1.769-4.004-4.732q1.33-2.963 4.001-4.732Q8.748 5 11.998 5q3.248 0 5.921 1.768q2.673 1.769 4.004 4.732q-1.33 2.963-4.001 4.732Q15.252 18 12.002 18ZM12 11.5Zm0 5.5q2.825 0 5.188-1.488T20.8 11.5q-1.25-2.525-3.613-4.013T12 6Q9.175 6 6.812 7.488T3.2 11.5q1.25 2.525 3.613 4.013T12 17Z"></path></svg>
                      <Link href={"/"} className='hover:underline text-black text-[14px]'>Preview</Link>
                    </div>

                    <div className='flex items-center gap-x-3'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"></path></svg>
                      <Link href={"/"} className='hover:underline text-black text-[14px]'>Vew Repo</Link>
                    </div>

                  </div>
                </div>
            </div>

            <div className='  w-full flex flex-col'>
                <div className=''>
                   <img src={"./img1.png"} className='w-full h-full'/>
                </div>

                <div className=' h-full px-5 py-5 bg-[#f6f6f6] flex justify-between'>
                  <Link href={"https://starbucks-home-design.vercel.app/"} className='hover:underline text-black text-[20px]'>StarBucks Landing Page</Link>

                  <div className='flex  items-center gap-x-5'>
                    <div className='flex items-center gap-x-3'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1,5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M12.005 15.154q1.524 0 2.586-1.067t1.063-2.592q0-1.524-1.067-2.586t-2.592-1.063q-1.524 0-2.586 1.067t-1.063 2.592q0 1.524 1.067 2.586t2.592 1.063ZM12 14.2q-1.125 0-1.913-.787T9.3 11.5q0-1.125.788-1.913T12 8.8q1.125 0 1.913.788T14.7 11.5q0 1.125-.787 1.913T12 14.2Zm.003 3.8q-3.25 0-5.922-1.768q-2.673-1.769-4.004-4.732q1.33-2.963 4.001-4.732Q8.748 5 11.998 5q3.248 0 5.921 1.768q2.673 1.769 4.004 4.732q-1.33 2.963-4.001 4.732Q15.252 18 12.002 18ZM12 11.5Zm0 5.5q2.825 0 5.188-1.488T20.8 11.5q-1.25-2.525-3.613-4.013T12 6Q9.175 6 6.812 7.488T3.2 11.5q1.25 2.525 3.613 4.013T12 17Z"></path></svg>
                      <Link href={"/"} className='hover:underline text-black text-[14px]'>Preview</Link>
                    </div>

                    <div className='flex items-center gap-x-3'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"></path></svg>
                      <Link href={"/"} className='hover:underline text-black text-[14px]'>Vew Repo</Link>
                    </div>

                  </div>
                </div>
            </div>

        </div>
      </div>     
        <AboutMe toggle={toggleAbout} about={about}/>
    </Layout>
  )
}
