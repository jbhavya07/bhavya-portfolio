import React from 'react'
import profile from '../Home/profile.png'

function About() {
  return (
    <>
      <div className='flex  '>
        <img src={profile} className='h-36 rounded-full border-solid border-2 border-gray-500 ring-1 '/>
      </div>
    </>
  )
}

export default About