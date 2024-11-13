import React from 'react'
import SocialMedia from '../SocialMedia/SocialMedia'


function Footer() {
  let handelGithub=()=>{
    let link=document.createElement("a");
    link.href="https://github.com/jbhavya07";
    link.click();
  }
  
  return (
    <>
    <div className='w-full flex justify-between pb-3'>
        <p className='font-sans pl-14 text-stone-700'>
        <i class="fa-regular fa-copyright" style={{ color: "#44403C" }}></i> / 2024 / Bhavya Jain / Find my projects at <a className='hover:underline' onClick={handelGithub} > Github</a>
        </p>

        <SocialMedia/>
        
    </div>
    </>
  )
}

export default Footer