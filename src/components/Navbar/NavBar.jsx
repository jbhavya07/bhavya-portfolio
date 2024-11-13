import React from 'react'
import {  NavLink,Link, useLocation } from 'react-router-dom'
import Clock from '../Clock/Clock'
import { HomeIcon, UserIcon, BookOpenIcon, BriefcaseIcon, PhoneIcon } from '@heroicons/react/24/outline'

function NavBar() {
  const location = useLocation();

  // const links = [
  //   { to: '/', label: 'Home', icon: <HomeIcon className="h-6 w-6 pr-1 text-stone-700" /> },
  //   // Add other links here if needed
  // ];
  return (
    <>

      <div className='h-24  flex space-x-96 items-center justify-between p-8'>
        <div className=' font-sans flex text-stone-700 '>India/Jaipur <div className='pl-4 text-stone-700'>     <Clock /> </div> </div>
        <div className='pr-20'>
          <div className='flex space-x-8 h-10 pt-1.5  text-center  text-stone-700 border-solid border-2 bg-stone-300 rounded-2xl shadow-xl'>
            {/* <div className='hover:bg-stone-400 hover:border-stone-400 hover:rounded-2xl'> */}


            <NavLink to="/" className={({ isActive }) =>
              `pl-3 flex items-center pb-1 ${isActive
                ? 'bg-stone-400 border-stone-400 rounded-2xl text-stone-700'
                : 'hover:bg-stone-400 hover:border-stone-400 hover:rounded-2xl'}`}><HomeIcon className="h-6 w-6 mr-1 "  /> Home</NavLink>





            {/* </div> */}
            <NavLink to="/about" className={({ isActive }) =>
              ` flex items-center  pb-1 ${isActive
                ? 'bg-stone-400 border-stone-400 rounded-2xl text-stone-700'
                : 'hover:bg-stone-400 hover:border-stone-400 hover:rounded-2xl'}`}> <UserIcon className="h-6 w-6 mr-1 text-stone-700" /> About</NavLink>

            <NavLink to="/projects" className={({ isActive }) =>
              ` flex items-center  pb-1 ${isActive
                ? 'bg-stone-400 border-stone-400 rounded-2xl text-stone-700'
                : 'hover:bg-stone-400 hover:border-stone-400 hover:rounded-2xl'}`}><BriefcaseIcon className="h-6 w-6 mr-1 text-stone-700" /> Projects</NavLink>
            <NavLink to="/skills" className={({ isActive }) =>
              ` flex items-center  pb-1 ${isActive
                ? 'bg-stone-400 border-stone-400 rounded-2xl text-stone-700'
                : 'hover:bg-stone-400 hover:border-stone-400 hover:rounded-2xl'}`}> <BookOpenIcon className="h-6 w-6 mr-1 text-stone-700" />Blogs</NavLink>

            <button className='h-7 pr-3 pb-2 '><NavLink to="/contact" className={({ isActive }) =>
              ` flex items-center  ${isActive
                ? 'bg-stone-400 border-stone-400 rounded-2xl text-stone-700'
                : 'hover:bg-stone-400 hover:border-stone-400 hover:rounded-2xl'}`}> <PhoneIcon className='h-6 w-6 mr-1 text-stone-700' />Contact Me</NavLink></button>
          </div>
        </div>


      </div>



    </>
  )
}



// import React from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// import { HomeIcon, UserIcon,  BookOpenIcon, BriefcaseIcon, PhoneIcon } from '@heroicons/react/24/solid';



// const NavBar = () => {
//   const location = useLocation();
//   const links = [
//     { to: '/', label: 'Home', icon: <HomeIcon className="h-5 w-5" /> },
//     { to: '/about', label: 'About', icon: <UserIcon className="h-5 w-5" /> },
//     { to: '/projects', label: 'Projects', icon: <BriefcaseIcon className="h-5 w-5" /> },
//     { to: '/skills', label: 'Blogs', icon: <BookOpenIcon className="h-5 w-5" /> },
//     {to: '/contact', label:'Contact Me', icon:
//       <PhoneIcon className='h-5 w-5'/>
//     },
//   ];

//   return (
//     <nav className="flex space-x-4 bg-gray-200 rounded-full p-2 shadow-md">
//       {links.map((link) => {
//         const isActive = location.pathname === link.to;
//         return (
//           <NavLink
//             key={link.to}
//             to={link.to}
//             className={`flex items-center space-x-1 px-3 py-2 rounded-full transition-colors duration-200 ${
//               isActive ? 'bg-gray-300' : ''
//             }`}
//           >
//             {link.icon}
//             <span className="text-sm font-medium">{link.label}</span>
//           </NavLink>
//         );
//       })}
//     </nav>
//   );
// };



// pl-3 flex items-center transition-colors duration-200 ${
//   isActive
//     ? 'bg-stone-400 border-stone-400 rounded-2xl text-stone-700'
//     : 'hover:bg-stone-400 hover:border-stone-400 hover:rounded-2xl'



// `h-6 w-6 pr-1 ${
//                 isActive ? 'text-stone-700' : 'text-stone-700'
//               }`



// 'pl-3 flex hover:bg-stone-400 hover:border-stone-400 hover:rounded-2xl'


// "h-6 w-6 pr-1 text-stone-700"

{/* <nav className="flex space-x-4 pb-1  rounded-full">
      {links.map((link) => {
        const isActive = location.pathname === link.to;

        return (
          <Link
            key={link.to}
            to={link.to}
            className={`pl-3 flex items-center transition-colors duration-200 ${
              isActive
                ? 'bg-stone-400 border-stone-400 rounded-2xl text-stone-700'
                : 'hover:bg-stone-400 hover:border-stone-400 hover:rounded-2xl'
            }`}
          >
            <HomeIcon
              className={`h-6 w-6 pr-1 ${
                isActive ? 'text-stone-700' : 'text-stone-700'
              }`}
            />
            {link.label}
          </Link>
        );
      })}
    </nav> */}

export default NavBar