/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

const AppliedJobs = () => {
  const [appliedjobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    // Fetching job data from the backend
    const fetchAppliedJobs = async () => {
      try {
        const response = await fetch('https://server-ewpifyj7q-farhanshahriyar.vercel.app/appliedjobs'); // Fetch data from the backend
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAppliedJobs(data);
      } catch (error) {
        console.error("Failed to fetch applied jobs:", error);
      }
    };

    fetchAppliedJobs();
  }, []);

  return (
    <div className='mt-5 '>
      <h2 className="text-2xl font-semibold leading-tight text-center">
        You have applied to {appliedjobs.length} jobs
      </h2>
      <div className="flex flex-col mt-5">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 mb-10">
                <thead>

                  <tr>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Posted Name</th>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Company Name</th>
                   <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Position</th>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Salary</th>
                     <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Category</th>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Email</th>
                    <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Deadline</th>
                    <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Resume Link</th>
                    </tr>

                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {appliedjobs.map((job) => ( // Use map to iterate over the array
                    <tr key={job._id}> {/* Use a unique key; assuming each job has a unique _id */}
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{job.uname}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{job.cname}</td>
                   
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{job.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{job.salary}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{job.category}</td>
                    
                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{job.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{job.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{job.rclink}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppliedJobs;

