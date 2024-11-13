import React from 'react'
import profile from '../Home/profile.png'
import { GlobeAsiaAustraliaIcon } from '@heroicons/react/24/solid'
import SocialMedia from '../SocialMedia/SocialMedia'

function About() {

  const scrollableIndex=()=>{
    const scrollToSection=(id)=>{
      const elemnt=document.getElementById(id);
      if(elemnt){
        elemnt.scrollIntoView({behavior:'smooth'});
      }
    }
  }
  return (
    <>
    <div className='flex'>
    <div className='flex'>
      <div className='mt-3
      ml-14 w-40 text-stone-700   overflow-y-auto '>
        <ul>
          <li onClick={()=>scrollToSection('introduction')} className='text-lg  hover:translate-x-2 hover:ease-in-out cursor-pointer mb-4'>- Introduction</li>
          <li onClick={()=>scrollToSection('studies')} className='text-lg  hover:translate-x-2 hover:ease-in-out cursor-pointer mb-2' >- Studies</li>
          <li onClick={()=>scrollToSection('ju')} className='text-lg  hover:translate-x-2 hover:ease-in-out cursor-pointer ml-6 mb-4'>- JECRC</li>
          <li onClick={()=>scrollToSection('tech')} className='text-lg  hover:translate-x-2 hover:ease-in-out cursor-pointer mb-2'>- Technical Skills</li>
          <li onClick={()=>scrollToSection('t1')} className='text-lg  hover:translate-x-2 hover:ease-in-out cursor-pointer ml-6 mb-2'>- Primary</li>
          <li onClick={()=>scrollToSection('t2')} className='text-lg  hover:translate-x-2 hover:ease-in-out cursor-pointer ml-6 mb-2'>- Secondary</li>
          
        </ul>
      </div>
      <div className=' ml-5 mt-5 mr-24  w-auto overflow-y-auto'>
        <img src={profile} className='h-40 rounded-full '/>
        <div className='flex ml-4 mt-4'>
          <GlobeAsiaAustraliaIcon className='h-7 w-7 mr-1 text-stone-600'/>
          <p className='text-lg'>India/Jaipur</p>
        </div>
        <div className='flex mt-4 justify-between '>
          <p className='border-2 rounded-2xl border-white pr-3 pl-3'>English</p>
          <p className='border-2 rounded-2xl border-white pr-3 pl-3'>Hindi</p>
        </div>
      </div>
    </div>
      <div className='w-1/2 bg-zinc-50'>
        <h1>Bhavya Jain</h1>
        <h3>Software Developer Engineer</h3>
        <div>
          <SocialMedia/>
        </div>

        <p>Bhavya Jain is a software engineer and a 2025 graduate in Computer Science and Engineering with hands-on experience in end-to-end software development. Skilled in React and Next.js, he is passionate about building efficient and scalable web applications. Bhavya is continuously exploring innovative solutions to deliver optimal user experiences.</p>


        <h1>Studies</h1>
        <div>
        <h3>JECRC University </h3>
        <p>Sep 2021-May 2025</p>
        </div>
        <div>
        <p>Studying Computer Science Engineering.</p>
        <p>cgpa: 7.24</p>
        </div>

        <h1>Technical Skills</h1>
        <h3>Primary</h3>
        <p>HTML, CSS, Javascript, React, Next.jS, Node.js</p>

        <h3>Secondary</h3>
        <p>Redux toolkit, Git, SQL, Tailwind, MongoDB</p>

        

       
      </div>
    </div>
    </>
  )
}

export default About