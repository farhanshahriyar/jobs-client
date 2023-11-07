/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const tabs = [
  { name: 'Onsite Job', id: 'onsite-job' },
  { name: 'Remote', id: 'remote' },
  { name: 'Hybrid', id: 'hybrid' },
  { name: 'Part-Time', id: 'part-time' },
  { name: 'All Jobs', id: 'all-jobs' },
];


const BrowseJobs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [jobData, setJobData] = useState({
    'onsite-job': [],
    'remote': [],
    'hybrid': [],
    'part-time': [],
    'all-jobs': [],
  });

  // Function to fetch job data
  const fetchJobs = async () => {
    try {
      const response = await fetch('http://localhost:5000/jobs/');
      const data = await response.json();

      // Organize data into an object with keys for each tab
      const organizedData = data.reduce((acc, job) => {
        // each job has a 'type' field which matches the ids in your tabs
        if (acc[job.type]) {
          acc[job.type].push(job);
        }
        // 'all-jobs' will accumulate all jobs
        acc['all-jobs'].push(job);
        return acc;
      }, {
        'onsite-job': [],
        'remote': [],
        'hybrid': [],
        'part-time': [],
        'all-jobs': [],
      });

      setJobData(organizedData);
    } catch (error) {
      console.error('Failed to fetch jobs:', error);
    }
  };

  // useEffect to fetch job data when component 
  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className='mt-[110px]'>
      <div className="mt-5 border-b border-gray-200 px-4 dark:border-gray-700">
        <nav className="flex justify-center space-x-2" aria-label="Tabs" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-1 inline-flex items-center gap-x-2 border-b-2 text-sm whitespace-nowrap ${
                activeTab === tab.id
                  ? 'font-semibold border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500'
              }`}
              aria-controls={`tab-panel-${tab.id}`}
              role="tab"
              aria-selected={activeTab === tab.id}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

<div className="mt-3 p-4">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            id={`tab-panel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={tab.id}
            className={`${activeTab === tab.id ? 'block' : 'hidden'}`}
          >
          <ul className="text-gray-500 dark:text-gray-400">
  {jobData[tab.id].map((job, index) => (
    <li key={index} className="mb-4 p-2 border rounded-md font-semibold text-gray-800 dark:text-gray-200">
      <h3 className="text-lg">{job.cname} - {job.title}</h3>
      <p>Posted by: {job.uname}</p>
      <p>Posting Date: {job.date}</p>
      <p>Application Deadline: {job.deadline || 'N/A'}</p>
      <p>Salary Range: {job.salary}</p>
      <p>Job Applicants: {job.applicants || 'N/A'}</p>
      <button
        type="button"
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        View Details
      </button>
    </li>
  ))}
</ul>

          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseJobs;