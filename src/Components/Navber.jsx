import React from 'react';
import { Link, NavLink } from "react-router-dom";

// import { Link, NavLink } from 'react-router';
import Logo from '../assets/logo.png'
import GitHup from '../assets/GitHup.png'
import '../App.css'

const Navber = () => {
    return (
         <div className='bg-white'>
           <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm 
        
        dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
        <NavLink to='/' className='font-semibold'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/App' className='font-semibold'>App</NavLink>
      </li>
      <li>
        <NavLink to='/Installation' className='font-semibold'>Installation</NavLink>
      </li>
     
      </ul>
    </div>
    <div className="btn  btn-ghost text-3xl font-bold">
    <img className='h-[50px]' src={Logo} alt="" />
    <Link className='text-4xl font-bold bg-[linear-gradient(90deg,#9F62F2_0%,#632EE3_100%)] bg-clip-text text-transparent'>Hero.IO</Link>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
  <ul className="menu menu-horizontal hidden lg:flex px-1">
      <li>
        <NavLink to='/' className='font-semibold'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/App' className='font-semibold'>App</NavLink>
      </li>
      <li>
        <NavLink to='/Installation' className='font-semibold' >Installation</NavLink>
      </li>
     
        
    </ul>
  </div>
  <div className="navbar-end">
      
   <Link to='https://github.com/parthopauldev' className='flex rounded-[7px] bg-gradient-to-r from-[#6f42c1] to-[#4f7df0]
 gap-[10px] items-center p-2 text-white'>
    <img className='h-[25px] bg-transparent rounded-[50%]' src={GitHup} alt="" />
    <h2>Contribute</h2>
   </Link>
  </div>
</div>
        </div>
    );
};

export default Navber;