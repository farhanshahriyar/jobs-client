/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import logoHead from '../../assets/images/logo.svg'
// import Swal from 'sweetalert2';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
// import Error from '../../pages/Error/Error';
const Header = () => {
  const { pathname } = useLocation();
  const isActive = (path) => pathname === path;
  const { user, logoutUser } = useContext(AuthContext);
  // console.log(logout)
  console.log(user)

  const handleLogout = () => {
    logoutUser().then()
  }
   

  return (
    <div>
        <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
  <nav className="mt-6 relative max-w-7xl w-full bg-white border border-gray-200 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:bg-gray-800 dark:border-gray-700" aria-label="Global">
    <div className="flex items-center justify-between">
      <Link to="/">
        <img className="h-8 w-auto sm:h-10" src={logoHead} alt="Job World" />
      </Link>
      <div className="md:hidden">
        <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
          <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
          <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </button>
      </div>
    </div>
    <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
      <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:pl-7">
        <Link
          to="/"
          className={`font-medium md:py-6 ${
            isActive('/') ? 'text-blue-600 dark:text-blue-500' : 'text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500'
          }`}
        >
          Home
        </Link>
        <Link
            to="/about-us"
            className={`font-medium md:py-6 
              ${isActive('/about-us') ? 'text-blue-600 dark:text-blue-500' : 'text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500'
            }`}
          >
            About Us
          </Link>
          <Link to="/all-jobs"
            className={`font-medium md:py-6
              ${isActive('/all-jobs') ? 'text-blue-600 dark:text-blue-500' : 'text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500'
            }`}
          >
            All Jobs
          </Link>
          <Link to="/blogs"
            className={`font-medium md:py-6
              ${isActive('/blogs') ? 'text-blue-600 dark:text-blue-500' : 'text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500'
            }`}
          >
            Blogs
          </Link>
          <Link to="/contact"
            className={`font-medium md:py-6
              ${isActive('/contact') ? 'text-blue-600 dark:text-blue-500' : 'text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500'
            }`}
          >
            Contact
          </Link>
          <Link to="/careers"
            className={`font-medium md:py-6
              ${isActive('/careers') ? 'text-blue-600 dark:text-blue-500' : 'text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500'
            }`}
          >
            Careers
          </Link>
      
      {/* condition */}
        {
          user && (
            <div className="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] md:[--trigger:hover] md:py-2">
         
            <div className="flex flex-shrink-0 items-center">
            <img className="h-8 w-8 rounded-full" src={user?.photoURL} alt=""/>
            </div>
            <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-[100000] bg-white md:shadow-md rounded-lg p-2 dark:bg-gray-800 md:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full md:border before:-top-1 before:left-0 before:w-full before:h-5">
              <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" >
                {user?.displayName}
              </a>
              {/* <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="/my-account">
                My Account
              </a> */}
              <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="/add-jobs">
                Add Jobs
              </a>
  
              
          
              {/* <Link to={`/jobs/${job._id}`} className=""> */}
              <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="/my-jobs">
                My Jobs
              </a>
              {/* </Link> */}
              <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="/applied-jobs">
                Applied Jobs
              </a>
              <a onClick={handleLogout}
               className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" >
              Logout
            </a>
            
            </div>
          </div>
          
          ) ||

           (
            <a className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 md:border-l md:border-gray-300 md:my-6 md:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500" href="/login">
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
            </svg>
            Log in
          </a>
          )
        }
        
      </div>
    </div>
  </nav>
</header>
      
    </div>
  )
}

export default Header

