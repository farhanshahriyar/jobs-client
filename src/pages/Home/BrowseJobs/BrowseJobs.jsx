/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const tabs = [
  { name: 'Onsite Job', id: 'onsite-job' },
  { name: 'Remote', id: 'remote' },
  { name: 'Hybrid', id: 'hybrid' },
  { name: 'Part-Time', id: 'part-time' },
  { name: 'All Jobs', id: 'all-jobs' },
];

// Dummy data for job listings
const jobData = {
  'onsite-job': ['Onsite Job 1', 'Onsite Job 2'],
  'remote': ['Remote Job 1', 'Remote Job 2'],
  'hybrid': ['Hybrid Job 1', 'Hybrid Job 2'],
  'part-time': ['Part-Time Job 1', 'Part-Time Job 2'],
};

// get all jobs from jobData object
jobData['all-jobs'] = Object.values(jobData).flat();

const BrowseJobs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

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
                <li key={index} className="font-semibold text-gray-800 dark:text-gray-200">
                  {job}
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
