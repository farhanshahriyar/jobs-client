/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { usePDF } from 'react-to-pdf';
import useTitle from '../../hook/useTitle';

const AppliedJobs = () => {
  useTitle('Applied Jobs')
  const [appliedjobs, setAppliedJobs] = useState([]);
  const { toPDF, targetRef } = usePDF({filename: 'appliedjobs.pdf'});
  const [filteredJobs, setFilteredJobs] = useState([]);
  const { user } = useContext(AuthContext);
  const handleOnChange = (e) => {
    if (e.target.value != 'all'){
      const Jobs = filteredJobs.filter(job => job.category === e.target.value)
      setAppliedJobs(Jobs)
    }else {
      setAppliedJobs([...filteredJobs])
    }
  }

  useEffect(() => {
    // Fetching job data from the backend
    const fetchAppliedJobs = async () => {
      try {
        const response = await fetch(`http://localhost:5000/appliedjobs?email=${user?.email}`); // Fetch data from the backend
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAppliedJobs(data);
        setFilteredJobs(data)
      } catch (error) {
        console.error("Failed to fetch applied jobs:", error);
      }
    };

    if (user) {
      fetchAppliedJobs();
    }
  }, [user]);

  console.log(appliedjobs)
  return (
    <div className='mt-5 '>
      <h2 className="text-2xl font-semibold leading-tight text-center">
        You have applied to {appliedjobs.length} jobs
      </h2>

    <div className='flex justify-end'>
      <button onClick={() => toPDF()} 
      className='py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
      >Download Summary</button>
      </div>

      <div className="flex justify-center mt-5">
      <select onChange={handleOnChange}
      className="py-3 px-4 pe-9 block max-w-[300px] bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600">
  <option selected value={'all'}>All Jobs</option>
  <option>On-Site</option>
  <option>Remote</option>
  <option>Part-Time</option>
  <option>Hybrid</option>
</select>
      </div>

      <div className="flex flex-col mt-5" ref={targetRef}>
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
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                      <a href={job.rclink} className='underline text-blue-500' target='_blank'>
                        Resume Link
                      </a></td>
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

