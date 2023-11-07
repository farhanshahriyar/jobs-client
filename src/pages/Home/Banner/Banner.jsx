/* eslint-disable no-unused-vars */
import React from 'react'

const Banner = () => {
  return (
    <div>
<div className="relative overflow-hidden">

  <div aria-hidden="true" className="flex absolute -top-96 start-1/2 transform -translate-x-1/2">
    <div className="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900"></div>
    <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70"></div>
  </div>


  <div className="relative z-10">
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      <div className="max-w-2xl text-center mx-auto">
        <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
            Jobs can hel you find the right opportunities and transform your career.
        </p>


        <div className="mt-5 max-w-2xl">
          <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
          Find Your Dream Job
          </h1>
        </div>


        <div className="mt-5 max-w-3xl">
          <p className="text-lg text-gray-600 dark:text-gray-400"> Explore thousands of job opportunities across top companies, industries and locations.
            </p>
        </div>

         {/* Search form section */}
         <div className="mt-10 max-w-2xl mx-auto">
        <form
          className="flex flex-col sm:flex-row gap-y-6 sm:gap-x-4 items-center">
          <input
            type="text"
            placeholder="search your dream job"
            maxLength="256"
            required
            className="w-full pl-4 pr-10 py-3 border rounded-l-md sm:h-12 bg-white border-gray-300 placeholder-gray-400 text-gray-700 focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            type="search"
            className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-medium text-sm rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  </div>
</div>
</div>
</div>
  );
};

export default Banner;



