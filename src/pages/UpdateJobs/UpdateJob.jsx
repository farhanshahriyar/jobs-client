/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useTitle from '../../hook/useTitle';

const UpdateJob = () => {
  useTitle('Update Job')
  const updateJob = useLoaderData();
  const { id } = useParams(); // Get job ID from URL params
  const navigate = useNavigate();
  const [dates, setDates] = useState(new Date());
  // const [postingDate, setPostingDate] = useState(updateJob.date || new Date());
  const initialDate = updateJob.postingDate ? new Date(updateJob.postingDate) : new Date();
  const [postingDate, setPostingDate] = useState(initialDate);
  const { user } = useContext(AuthContext);

  // Function to call when the form is submitted
  const handleUpdateJob = async (event) => {
    event.preventDefault();
    const form = event.target;
    
    const updatedJob = {
      banner: form.banner.value,
      cname: form.cname.value,
      title: form.title.value,
      category: form.category.value,
      salary: form.salary.value,
      date: form.date.value,
      description: form.description.value,
      postingDate
    };

    try {
      const response = await fetch(`https://jobs-backend-iota.vercel.app/jobs/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedJob),
      });

      const result = await response.json();

      if (result.modifiedCount > 0) {
        Swal.fire({
          title: 'Success!',
          text: 'Job updated successfully',
          icon: 'success',
          confirmButtonText: 'Done',
        });
        navigate('/'); // Navigate back to the job list or dashboard
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'No changes were made or something went wrong.',
          icon: 'error',
          confirmButtonText: 'Back',
        });
      }
    } catch (error) {
      console.error('Failed to update job', error);
      Swal.fire({
        title: 'Error!',
        text: 'An error occurred while updating the job.',
        icon: 'error',
        confirmButtonText: 'Back',
      });
    }
  };


  return (
    <div>
      {/* Job Id is: {id} */} 
      <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <form onSubmit={handleUpdateJob}>
        <div className="bg-white rounded-xl shadow dark:bg-slate-900">
          <h2 className="text-lg font-medium text-gray-800 dark:text-gray-200 bg-white dark:bg-slate-900 px-4 py-5 sm:px-6 rounded-t-xl border-b border-gray-200 dark:border-gray-700">Update Jobs ID is {id}</h2>
          <div className="mt-3 p-4 sm:pt-0 sm:p-7">

            <div className="space-y-4 sm:space-y-6">
            <div className="space-y-2">
                <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                  Job Banner Link
                </label>
    
                <input id="af-submit-app-project-name" type="text" defaultValue={updateJob.banner} name='banner' className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Upload job banner link"/>
              </div>
           
              <div className="space-y-2">
                <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                  Job Title
                </label>
    
                <input id="af-submit-app-project-name" type="text" defaultValue={updateJob.title}  name='title' className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Enter Job Position Title. Example : Frontend Developer Intern"/>
              </div>

              <div className="space-y-2">
                <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                  Company Name
                </label>
    
                <input id="af-submit-app-project-name" type="text" defaultValue={updateJob.cname}  name='cname' className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Company Name"/>
              </div>
    
              <div className="space-y-2">
                <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                   Logged in username
                </label>
    
                <input id="af-submit-project-url" readOnly disabled type="text" name='uname' value={user.displayName}  className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Logged User. Example : MD.FARHAN SHAHRIYAR"/>
              </div>
    
              <div className="space-y-2">
                <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                   Logged in useremail
                </label>
    
                <input id="af-submit-project-url" readOnly disabled type="text" value={user.email} name='email' className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Logged User. Example : MD.FARHAN SHAHRIYAR"/>
              </div>
    
              <div className="space-y-2">
                <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                  Category of Job 
                </label>
    
                <select name='category' defaultValue={updateJob.category}  id="af-submit-app-category" className="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                  <option>Select a Job Category</option>
                  <option>On-Site</option>
                  <option>Remote</option>
                  <option>Part-Time</option>
                  <option>Hybrid</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                   Salary Range
                </label>
    
                <input id="af-submit-project-url" type="text" defaultValue={updateJob.salary} name='salary' className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder=" $90k - $130k or $100k - $150k"/>
              </div>
            
                <div className="space-y-2">
                <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                 Job Description
                </label>
    
                <textarea id="af-submit-app-description" defaultValue={updateJob.description} name='description' className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" rows="6" placeholder="A detailed summary will better explain your jobs to the audiences. Our users will see this in your dedicated jobs in page."></textarea>
              </div>

              <div className="space-y-2">
                <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                    Job Application Deadline
                </label>
                <DatePicker
                    defaultValue={updateJob.date}
                    name='date'
                    selected={postingDate}
                    onChange={(date) => setPostingDate(date)}
                    className="py-2 px-3 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                />
                </div>
    
              
            </div>

    
            <div className="mt-5 flex justify-center gap-x-2">
              <button type="submit" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                Update Job Details
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
};

export default UpdateJob;

