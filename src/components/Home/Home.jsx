import React, { useState } from 'react'
import profile from '../Home/profile.png'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'

function Home() {
  let[isLoading, setIsLoading]= useState(false);
  let handelDownload=()=>{
    setIsLoading(true);
    let link=document.createElement('a');
    link.href ="/resume/BhavyaResume.pdf";
    link.download = 'BhavyaResume.pdf';
    setTimeout(()=>{
      link.click();
      setIsLoading(false);
    }, 1000)

  }
  return (
    <>
      <div className='flex justify-center mt-6 '>
        <img src={profile} className='h-36 rounded-full border-solid border-2 border-gray-500 ring-1 '/>
      </div>
      {/* <h2 className='text-center font-bold text-2xl mt-3'>I'm Bhavya</h2> */}
      <div className='flex justify-center mt-3'>
        <div className='w-96 h-52 '>
          <h1 className='text-center text-4xl font-bold text-stone-700'>Software Engineer</h1>
          <p className='mt-5 ml-9 text-lg font-sans text-stone-700'>I'm Bhavya, software engineer with a focus on creating high-performance web applications. </p>
          <div className=' flex justify-center'>
            <button className='mt-4 border-solid border-2 border-stone-400 rounded-2xl w-56 flex h-8 hover:bg-stone-400 pl-4 text-stone-700' 
            onClick={handelDownload} disabled={isLoading}> <ArrowDownTrayIcon className="h-6 w-6 pr-1 pt-1 text-stone-700" />
            {isLoading ? "Downloading..." : "Download My Resume"}</button>
          </div>
          
        </div>
      </div>

    </>
  )
}

export default Home;
