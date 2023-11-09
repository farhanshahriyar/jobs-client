/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {  Link, useNavigate } from 'react-router-dom'; // assuming react-router is being used
import Error from '../Error/Error';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import useTitle from '../../hook/useTitle';

const AllJobs = () => {
  useTitle('All Jobs')
  const [error, setError] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // fetching job data from the backend
    const fetchJobs = async () => {
      const response = await fetch('https://jobs-backend-iota.vercel.app/jobs/'); 
      const data = await response.json();
      setJobs(data);
     
    };

    fetchJobs();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
  const filteredJobs = searchTerm
    ? jobs.filter((job) => job.title.toLowerCase().includes(searchTerm.toLowerCase()))
    : jobs;
  }

//   const handleDetailsClick = (jobId) => {
    const viewDetails = (jobId) => {
    // for checking if the user is logged in
    const isLoggedIn = false; // This should be replaced with actual authentication check

    if (!isLoggedIn) {
      // Redirect to login and then to details page after successful login
    //   navigate('/login', { from: 'jobs', detailsId: jobId });
    } else {
    //   navigate(`/jobs/${jobId}`); // Redirect to job details page
    }
  };

  return (
  // show error page if no data found
  error ? <Error/> :
  // show loading if data is not loaded
  !jobs.length ? <LoadingSpinner/> :


<div className="max-w-[85rem] mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-3">All Jobs</h2>
      <form
        onSubmit={handleSearch}
        className="flex flex-col sm:flex-row gap-y-6 sm:gap-x-4 items-center"
      >
        <input
          type="text"
          placeholder="Search your dream job"
          maxLength="256"
          required
          className="w-full pl-4 pr-10 py-3 border rounded-l-md sm:h-12 bg-white border-gray-300 placeholder-gray-400 text-gray-700 focus:ring-blue-500 focus:border-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* <button
          type="submit"
          className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-medium text-sm rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Search
        </button> */}
      </form>
        <h3 className="text-xl font-semibold text-gray-800 mt-10 mb-6">Search Results for "{searchTerm}"</h3>
      <div className="grid lg:grid-cols-2 gap-6">
        {jobs.filter(
          (job) => job.title.toLowerCase().includes(searchTerm.toLowerCase())
        ).map((job, index) => (
          <Link to={`/jobs/${job._id}`} key={index} className="group relative block rounded-xl bg-white shadow-lg p-6">
          <div key={index} className="group relative block rounded-xl bg-white shadow-lg p-6">
            <div className="flex flex-col">
              <h4 className="font-semibold text-gray-800">{job.uname} posted a job</h4>
              <h3 className="text-lg font-semibold"> {job.title}</h3>
              <p className="text-sm text-gray-600">Posted on: {job.postingDate.split('T')[0]}</p>
              <p className="text-sm text-gray-600">Category: {job.category}</p>
              <p className="text-sm text-gray-600">Salary: {job.salary}</p>
              <p className="text-sm text-gray-600">Deadline: {job.date}</p>
              <p className="text-sm text-gray-600">Applicants: {job.applicationNumber}</p>
              <button
                onClick={() => viewDetails(job.id)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                View Details
              </button>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
