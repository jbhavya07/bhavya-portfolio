import React from 'react'

function SocialMedia() {
    let handelGithub=()=>{
        let link=document.createElement("a");
        link.href="https://github.com/jbhavya07";
        link.click();
      }
      let handelX=()=>{
        let link=document.createElement("a");
        link.href="https://twitter.com/bhavyajain07";
        link.click();
      }
      let handelEmail=()=>{
        window.location.href='mailto:jainbhavya712@gmail.com';
      }
      let handelLinkedin=()=>{
        let link=document.createElement("a");
        link.href="https://www.linkedin.com/in/bhavya-jain-226abb21b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
        link.click();
      }
  return (
    <div className='space-x-4 pr-14'>
        <i className="fa-brands fa-x-twitter  hover:scale-110 cursor-pointer" onClick={handelX} style={{ color: "#44403C", fontSize: "22px" }} ></i>
        <i className="fa-brands fa-github hover:scale-110 cursor-pointer" onClick={handelGithub} style={{ color: "#44403C", fontSize: "22px" }}></i>
        <i className="fa-brands fa-linkedin hover:scale-110 cursor-pointer" onClick={handelLinkedin} style={{ color: "#44403C", fontSize: "22px" }}></i>
        <i className="fa-solid fa-envelope hover:scale-110 cursor-pointer" onClick={handelEmail} style={{ color: "#44403C", fontSize: "22px" }}></i>
        </div>
  )
}

export default SocialMedia