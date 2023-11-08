/* eslint-disable no-unused-vars */
import React from 'react'
import { useLoaderData } from 'react-router-dom'

const JobDetails = () => {
    const job = useLoaderData()
    console.log(job)
  return (

    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      {/* job id: {job._id}
      job name : {job.cname} */} 
       
       <div className="mb-4">
        {/* Company Logo */}
        <img
          src={job.banner}
          alt="Company Logo"
          className="h-16 w-auto"
        />
      </div>
      <div className="mb-6">
        <img
          src="/path-to-your-banner-image.jpg"
          alt="Job Banner"
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>
      <div>
        {/* Job Title */}
        <h1 className="font-bold text-xl mb-2"><span className='font-light text-xl'>{job.cname} - </span>{job.title}</h1>
         {/* Salary Range */}
         <p className="text-gray-700 text-base font-bold">
          Salary Range: {job.salary}
        </p>
        {/* Number of Applicants */}
        <p className="font-bold text-base">
          Number of Applicants: {job.applicationNumber}
        </p>
        {/* Job Description */}
        <p className="font-bold text-base mb-4 underline">
          Job Description: 
        </p>
        <span className='text-gray-700 text-base font-normal  '>
          {job.description}</span>
        <p className="text-gray-700 text-base mb-4">
          
        </p>
       
        
      </div>
      <div className="flex items-center justify-between mt-6">
        {/* Apply Button */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobDetails;

