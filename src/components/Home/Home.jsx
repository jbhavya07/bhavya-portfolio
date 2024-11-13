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
      <div className='flex  flex-col justify-center mt-3'>
        <div className=' flex-grow '>
          <h1 className='text-center text-4xl font-bold text-stone-700'>Software Engineer</h1>
          <p className='mt-5 ml-96 w-2/5 text-lg font-sans  text-center text-stone-700'>I'm Bhavya, software engineer with a focus on creating high-performance web applications. My main focus is building web-apps at Buoyance. I mostly enjoy building software in the sweet spot where desgin and engineering meet - things that look good but are also built well under the hood.  </p>
          <div className=' flex justify-center'>
            <button className='mt-7 mb-7 border-solid border-2 border-stone-400 rounded-2xl w-56 flex h-8 hover:bg-stone-400 pl-4 text-stone-700' 
            onClick={handelDownload} disabled={isLoading}> <ArrowDownTrayIcon className="h-6 w-6 pr-1 pt-1 text-stone-700" />
            {isLoading ? "Downloading..." : "Download My Resume"}</button>
          </div>
          
        </div>
      </div>

    </>
  )
}

export default Home;
