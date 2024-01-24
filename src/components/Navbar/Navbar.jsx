import React, { useState } from 'react'
 import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const [isopen,setIsOpen]=useState(false)
  const [navbar,setNavbar]=useState(false)
    const handleMenu=()=>{
        setIsOpen(!isopen);
    }

  const changebackgroundNavbar=()=>{
    if (window.scrollY>=80){
      setNavbar(true)
    }
    else{
      setNavbar(false)
    }
  }
  window.addEventListener('scroll',changebackgroundNavbar)

  return (
    <nav className={ navbar ? 'bg-gray-800 p-4 fixed w-full top-0 z-10 overflow-hidden':' bg-transparent p-4 fixed w-full top-0 z-10 overflow-hidden'}>
      <div className="container mx-auto flex justify-between items-center px-6 py-3 overflow-hidden">
        <div className="text-white font-bold">Welcome</div>
        <ul className="hidden md:flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : "text-red-400"
            }
            >
            Home
            </NavLink>
          </li>

          <li>
            <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-white font-bold" : ""
            }
            >
            About Us
          </NavLink>
          </li>
          <li><NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-white font-bold" : ""
            }
          >
            Blog
          </NavLink></li>
          <li><NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-white font-bold" : ""
            }
          >
           Contact
          </NavLink></li>
        </ul>
        {/* Responsive Menu */}
        {isopen? <div className='md:hidden text-3xl' onClick={handleMenu}>
            <h1>&#88;</h1>
        </div>:<div className='md:hidden text-3xl' onClick={handleMenu}>
            <h1>&#8801;</h1>
        </div>
            
        }
      </div>
      {isopen &&(
        <ul className="md:hidden  space-x-4">
          <li><NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-white font-bold" : ""
            }
          >
            Home
          </NavLink>
          </li>
          
          <li>
            <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-white font-bold" : ""
            }
          >
            About
          </NavLink>
          </li>
          <li><NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-white font-bold" : ""
            }
          >
            Home
          </NavLink></li>
        </ul>
      )}
      
    </nav>
   
  );
};

export default Navbar;