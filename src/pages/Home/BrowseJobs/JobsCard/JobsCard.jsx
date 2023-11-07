/* eslint-disable no-unused-vars */
import React from 'react';

const JobsCard = () => {

  const viewDetails = (e) => {
    e.preventDefault();
    console.log("View Details e click porse mama");
  };
  // Sample data for job postings - you might fetch this from an API in a real-world application
  const jobPostings = [
    {
      name: "Gloria",
      title: "Senior Software Engineer",
      postingDate: "Jan 09, 2021",
      category: "on-site",
      applicationDeadline: "Jan 30, 2021",
      salaryRange: "$100k - $150k",
      applicantsNumber: "25 applicants",
    },
    {
      name: "Gloria",
      title: "Product Manager",
      postingDate: "May 30, 2021",
      category: "remote",
      applicationDeadline: "Jun 15, 2021",
      salaryRange: "$90k - $130k",
      applicantsNumber: "40 applicants",
    }
  ];

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid lg:grid-cols-2 gap-6">
        {jobPostings.map((job, index) => (
          <div key={index} className="group relative block rounded-xl bg-white shadow-lg p-6">
            <div className="flex flex-col">
              <h4 className="font-semibold text-gray-800">{job.name} posted a job</h4>
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <p className="text-sm text-gray-600">Posted on: {job.postingDate}</p>
              <p className="text-sm text-gray-600">Category: {job.category}</p>
              <p className="text-sm text-gray-600">Apply by: {job.applicationDeadline}</p>
              <p className="text-sm text-gray-600">Salary: {job.salaryRange}</p>
              <p className="text-sm text-gray-600">{job.applicantsNumber}</p>
              <button onClick={viewDetails}
               className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsCard;
