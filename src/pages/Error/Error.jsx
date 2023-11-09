/* eslint-disable no-unused-vars */
import React from 'react';
import errorLogo from '../../assets/images/error.gif'
import useTitle from '../../hook/useTitle';

const Error = () => {
  useTitle('404 Error');
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-10 max-w-6xl mx-auto">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <img src={errorLogo} alt="Page not found" className='h-40' />
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            404 Error!
          </h2>
          <p className="mt-2 text-base text-gray-500">
            Page not found. Please check the URL in the address bar and try again.
          </p>
          <a href="/" className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-400">
            ← Back to home
          </a>
        </div>
        {/* Image Section */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img className="w-full max-w-md object-cover" src="https://images.unsplash.com/photo-1470847355775-e0e3c35a9a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80" alt="Page not found" style={{ maxHeight: '800px' }} />
        </div>
      </div>
    </div>
  );
};

export default Error;
