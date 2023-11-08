/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from 'react';
// import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';

// const tabs = [
//   { name: 'On-Site', id: 'onsite-job' },
//   { name: 'Remote', id: 'remote' },
//   { name: 'Hybrid', id: 'hybrid' },
//   { name: 'Part-Time', id: 'part-time' },
//   { name: 'All-Jobs', id: 'all-jobs' },
// ];


// const BrowseJobs = () => {
//   const [activeTab, setActiveTab] = useState(tabs[0].id);
//   const [loading, setLoading] = useState(true); // to show loading spinner
//   const [jobData, setJobData] = useState({
//     'onsite-job': [],
//     'remote': [],
//     'hybrid': [],
//     'part-time': [],
//     'all-jobs': [],
//   });

//   // // Function to fetch job data
//   // const fetchJobs = async () => {
//   //   try {
//   //     const response = await fetch('http://localhost:5000/jobs/');
//   //     const data = await response.json();

//   //     // Organize data into an object with keys for each tab
//   //     const organizedData = data.reduce((acc, job) => {
//   //       // each job has a 'type' field which matches the ids in your tabs
//   //       if (acc[job.type]) {
//   //         acc[job.type].push(job);
//   //       }
//   //       // 'all-jobs' will accumulate all jobs
//   //       acc['all-jobs'].push(job);
//   //       return acc;
//   //     }, {
//   //       'onsite-job': [],
//   //       'remote': [],
//   //       'hybrid': [],
//   //       'part-time': [],
//   //       'all-jobs': [],
//   //     });

//   //     setJobData(organizedData);
//   //   } catch (error) {
//   //     console.error('Failed to fetch jobs:', error);
//   //   }
//   // };

//   // Function to fetch job data
//   const fetchJobs = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/jobs/');
//       const data = await response.json();
//       // Organize data into an object with keys for each tab
//       const organizedData = tabs.reduce((acc, tab) => {
//         acc[tab.id] = data.filter(job => job.category === tab.name);
//         return acc;
//       }, {
//         'onsite-job': [],
//         'remote': [],
//         'hybrid': [],
//         'part-time': [],
//         'all-jobs': [],
//       });
//       setJobData(organizedData);
//       setLoading(false); // Hide spinner after data is loaded
//     } catch (error) {
//       console.error('Failed to fetch jobs:', error);
//     }
//   };

//   // useEffect to fetch job data when component 
//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   return (
//     <div className='mt-[110px]'>
//       <div className="mt-5 border-b border-gray-200 px-4 dark:border-gray-700">
//         <nav className="flex justify-center space-x-2" aria-label="Tabs" role="tablist">
//           {tabs.map((tab) => (
//             <button
//               key={tab.id}
//               type="button"
//               onClick={() => setActiveTab(tab.id)}
//               className={`py-4 px-1 inline-flex items-center gap-x-2 border-b-2 text-sm whitespace-nowrap ${
//                 activeTab === tab.id
//                   ? 'font-semibold border-blue-600 text-blue-600'
//                   : 'border-transparent text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500'
//               }`}
//               aria-controls={`tab-panel-${tab.id}`}
//               role="tab"
//               aria-selected={activeTab === tab.id}
//             >
//               {tab.name}
//             </button>
//           ))}
//         </nav>
//       </div>

// {
//   loading && <LoadingSpinner /> // Show spinner while loading data
// }
 
// <div className="mt-3 p-4">
//         {tabs.map((tab) => (
//           <div
//             key={tab.id}
//             id={`tab-panel-${tab.id}`}
//             role="tabpanel"
//             aria-labelledby={tab.id}
//             className={`${activeTab === tab.id ? 'block' : 'hidden'}`}
//           >

//           <ul className="text-gray-500 dark:text-gray-400">
//   {jobData[tab.id].map((job, index) => (
//     <li key={index} className="mb-4 p-2 border rounded-md font-semibold text-gray-800 dark:text-gray-200">
//       <h3 className="text-lg">{job.cname} - {job.title}</h3>
//       <p>Posted by: {job.uname}</p>
//       <p>Posting Date: {job.date}</p>
//       <p>Application Deadline: {job.deadline || 'N/A'}</p>
//       <p>Salary Range: {job.salary}</p>
//       <p>Job Applicants: {job.applicants || 'N/A'}</p>
//       <button
//         type="button"
//         className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//       >
//         View Details
//       </button>
//     </li>
//   ))}
// </ul>

//           </div>
//         ))}
//       </div>

//     </div>
//   );
// };

// export default BrowseJobs;


import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';
import { Link } from 'react-router-dom';

const tabs = [
  { name: 'On-Site', id: 'onsite-job' },
  { name: 'Remote', id: 'remote' },
  { name: 'Hybrid', id: 'hybrid' },
  { name: 'Part-Time', id: 'part-time' },
  { name: 'All Jobs', id: 'all-jobs' }, // Make sure the name matches the category in your jobs data
];

const BrowseJobs = () => {
  // Set 'all-jobs' as the initial active tab
  const [activeTab, setActiveTab] = useState('all-jobs');
  const [loading, setLoading] = useState(true);
  const [jobData, setJobData] = useState({
    'onsite-job': [],
    'remote': [],
    'hybrid': [],
    'part-time': [],
    'all-jobs': [],
  });

  const fetchJobs = async () => {
    try {
      const response = await fetch('http://localhost:5000/jobs/');
      const data = await response.json();
      
      // Initialize a temporary object to hold filtered jobs
      let filteredData = {
        'onsite-job': [],
        'remote': [],
        'hybrid': [],
        'part-time': [],
        'all-jobs': data, // Directly assign all fetched data to 'all-jobs'
      };

      // Filter data for each job type except 'all-jobs'
      tabs.forEach((tab) => {
        if (tab.id !== 'all-jobs') {
          filteredData[tab.id] = data.filter(job => job.category === tab.name);
        }
      });

      setJobData(filteredData);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch jobs:', error);
    }
  };

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

{
  loading && <LoadingSpinner /> // Show spinner while loading data
}

      <div className="mt-3 p-4">
        {/* ... */}
        {tabs.map((tab) => (
          <div
            key={tab.id}
            id={`tab-panel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={tab.id}
            className={`${activeTab === tab.id ? 'block' : 'hidden'}`}
          >
          <div className="grid lg:grid-cols-2 gap-6">
            {jobData[tab.id].map((job, index) => (
              <div key={index} className="group relative block rounded-xl bg-white shadow-lg p-6">
              <p className='font-semibold text-gray-800'>{job.uname} posted a job</p>
              <h3 className="text-lg font-semibold">{job.cname} - {job.title}</h3>
              <p className='text-sm text-gray-600'>Posting Date: {job.date}</p>
              <p>Application Deadline: {job.deadline || 'N/A'}</p>
              <p className='text-sm text-gray-600'>Salary Range: {job.salary}</p>
              <p className='text-sm text-gray-600'>Job Applicants: {job.applicants || 'N/A'}</p>
              <Link to={`/jobs/${job._id}`} className="">
              <button
                type="button"
                className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                View Details
              </button>
              </Link>
            </div>
            ))}
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseJobs;
