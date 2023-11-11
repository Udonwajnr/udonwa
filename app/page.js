import Image from 'next/image'
import Layout from './components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <div className='flex justify-between py-[30px] pr[20px] h-full'>
        {/* <header>
          <div>
            <Link href={"/"}>Udonwa</Link>
          </div>
        </header> */}
        <div  className='relative border-r-2 w-4/12 pl-[40px] border-[#cccccc] border-dotted font-mono'>
          <div className='pr-[40px]'>
            <h1 className='font-bold text-[40px]'>Umoh Udonwa</h1>
            <span className="text-[28px] font-mono ">FullStack Developer</span>
        
            <div className='mt-4 '>
              <p className='text-[20px]'>Howdy, I'm Umoh, a uniquely creative designer and developer with over 15 years of experience. I primarily focus on Idea, Product and Brand. I thrive as a generalist, able to quickly adapt and scale my work across a variety of mediums, infrastructures and tech stacks.</p>
              <p className='text-[20px] mt-7'>I care a lot about biodiversity and land conservation, I play a lot of chess, and I’m usually camping in my free time.</p>
            </div>
          </div>
         
        <div className='mr-[40px] my-10'>
          <hr className='border'/>
        </div>
        {/* use the coding font */}
        <div className='flex flex-wrap gap-2'>
          <div className='text-[#1A1A1A99] hover:text-black cursor-pointer flex items-center justify-center  px-10 py-1.5 border gap-x-5 rounded-3xl'>
            <input type='checkbox' className='cursor-pointer h-4 w-4'/>
            <label className='cursor-pointer hover:text-black'>Html/Css</label>
          </div>

          <div className='text-[#1A1A1A99] hover:text-black cursor-pointer flex items-center justify-center  px-10 py-1.5 border gap-x-5 rounded-3xl'>
            <input type='checkbox' className='cursor-pointer h-4 w-4'/>
            <label>Javascript</label>
          </div>

          <div className='text-[#1A1A1A99] hover:text-black cursor-pointer flex items-center justify-center  px-10 py-1.5 border gap-x-5 rounded-3xl'>
            <input type='checkbox' className='cursor-pointer h-4 w-4'/>
            <label>ReactJS</label>
          </div>
        
          <div className='text-[#1A1A1A99] hover:text-black cursor-pointer flex items-center justify-center  px-10 py-1.5 border gap-x-5 rounded-3xl'>
            <input type='checkbox' className='cursor-pointer h-4 w-4'/>
            <label>TypeScript</label>
          </div>

          <div className='text-[#1A1A1A99] hover:text-black cursor-pointer flex items-center justify-center  px-10 py-1.5 border gap-x-5 rounded-3xl'>
            <input type='checkbox' className='cursor-pointer h-4 w-4'/>
            <label>NextJS</label>
          </div>

          <div className='text-[#1A1A1A99] hover:text-black cursor-pointer flex items-center justify-center  px-10 py-1.5 border gap-x-5 rounded-3xl'>
            <input type='checkbox' className='cursor-pointer h-4 w-4'/>
            <label>NodeJs</label>
          </div>

          <div className='text-[#1A1A1A99] hover:text-black cursor-pointer flex items-center justify-center  px-10 py-1.5 border gap-x-5 rounded-3xl'>
            <input type='checkbox' className='cursor-pointer h-4 w-4'/>
            <label>Express</label>
          </div>

          <div className='text-[#1A1A1A99] hover:text-black cursor-pointer flex items-center justify-center  px-10 py-1.5 border gap-x-5 rounded-3xl'>
            <input type='checkbox' className='cursor-pointer h-4 w-4'/>
            <label>Postgres</label>
          </div>
        
          <div className='text-[#1A1A1A99] hover:text-black cursor-pointer flex items-center justify-center  px-10 py-1.5 border gap-x-5 rounded-3xl'>
            <input type='checkbox' className='cursor-pointer h-4 w-4'/>
            <label>Mongodb</label>
          </div>
          <div className='text-[#1A1A1A99] hover:text-black cursor-pointer flex items-center justify-center  px-10 py-1.5 border gap-x-5 rounded-3xl'>
            <input type='checkbox' className='cursor-pointer h-4 w-4'/>
            <label>Sequelize</label>
          </div>
        </div>

        <div className='flex gap-x-4 align-bottom absolute bottom-0 '>
          <Link href={""} className='flex items-center gap-x-3 hover:bg-[#f1f1f1] border py-2 px-4 border-[#cccccc] rounded-md '>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12Zm-8 8v-2.8q0-.85.438-1.563T5.6 14.55q1.55-.775 3.15-1.163T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20H4Z"></path></svg>
            <span className='text-[14px] font-bold'>About</span>
          </Link>
          <Link href={"mailto:umohu67@gmail.com"} className='flex items-center gap-x-3 hover:bg-[#f1f1f1] border py-2 px-4 border-[#cccccc] rounded-md'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm8-7.175q.125 0 .263-.038t.262-.112L19.6 8.25q.2-.125.3-.313t.1-.412q0-.5-.425-.75T18.7 6.8L12 11L5.3 6.8q-.45-.275-.875-.012T4 7.525q0 .25.1.438t.3.287l7.075 4.425q.125.075.263.113t.262.037Z"></path></svg>
            <span className='text-[14px] font-bold'>Mail</span>
          </Link>
          <Link href={""} className='flex items-center gap-x-3 hover:bg-[#f1f1f1] border py-2 px-4 border-[#cccccc] rounded-md'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M13 9h5.5L13 3.5V9M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m9 16v-2H6v2h9m3-4v-2H6v2h12Z"></path></svg>
            <span className='text-[14px] font-bold'>Resume</span>
          </Link>
        </div>
          
        </div>

        <div className='w-8/12 border-[#cccccc] border-dotted'>hii</div>
      </div>
    </Layout>
  )
}
