/* eslint-disable no-unused-vars */
import React, { useContext, useRef, useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../../providers/AuthProvider';
import Swal from 'sweetalert2';

const JobDetails = () => {
  const jobData = useLoaderData()
  const [job, setJob] = useState(jobData);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const ref = useRef();
    console.log(job)

    const appliedJobHandler = (e) => {
      e.preventDefault();
      // console.log("Job Applied e click porse mama"); //working
      // get all data from the form
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const rclink = form.rclink.value;

      // passing info
      const newAppliedJob = {
          name,
          email,
          rclink,
          cname: job.cname,
          uname: job.uname,
          category: job.category,
          title: job.title,
          salary: job.salary,
          date: job.date,
          jobId: job._id,
          // applicationNumber: job.applicationNumber,
      }
      // console.log(newAppliedJob) //data passing successfully
      fetch('http://localhost:5000/appliedjobs',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newAppliedJob)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.insertedId){
            // alert('New Job added successfully')
            // navigate('/')
            Swal.fire({
              title: 'Success!',
              text: 'Job applied successfully',
              icon: 'success',
              confirmButtonText: 'Done'

            })
            setJob({...job, applicationNumber: job.applicationNumber + 1})
            ref.current.click();
        } else {
            // alert('Something went wrong')
            Swal.fire({
              title: 'Error!',
              text: 'Do you want to continue',
              icon: 'error',
              confirmButtonText: 'Back'
            })
        }
    })


    // clear the form
    form.reset()
    }

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
        {/* <button 
        data-ripple-light="true"
        data-dialog-target="dialog"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Apply Now
        </button> */}
        <div className="text-center">
          <button type="button" disabled={job.email==user.email || new Date() > new Date(job.date)} className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-modal-recover-account">
            Apply Now
          </button>
          {
            job.email==user.email && <p className='text-xs text-red-600 mt-2'>You can't apply to your own job</p>
           
          }
          {
            new Date() > new Date(job.date) && <p className='text-xs text-red-600 mt-2'>Deadline has passed</p>
          }
        </div>
      </div>
      {/* modal */}
      <div id="hs-modal-recover-account" ref={ref} className="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto">
  <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <div className="p-4 sm:p-7">
        <div className="text-center">
          <h2 className="block text-2xl font-bold text-gray-800 dark:text-gray-200">Applying for {job.title}</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {job.cname} is looking for a {job.title} with salary range of {job.salary} and deadline of {job.date}
            {/* <a className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="../examples/html/modal-signin.html">
              Sign in here
            </a> */}
          </p>
        </div>

        <div className="mt-5">

          <form onSubmit={appliedJobHandler}>
            <div className="grid gap-y-4">
              <div>
                <label className="block text-sm mb-2 dark:text-white">Name</label>
                <div className="relative">
                  <input type="text" id="text" name="name" readOnly disabled value={user.displayName} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required/>
                  <div className="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                    <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                    </svg>
                  </div>
                </div>
                
              </div>
              <div>
                <label className="block text-sm mb-2 dark:text-white">Email</label>
                <div className="relative">
                  <input type="text" id="text" name="email" readOnly disabled value={user.email} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required/>
                  <div className="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                    <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                    </svg>
                  </div>
                </div>
                <p className="hidden text-xs text-red-600 mt-2">Please include a valid cv or  resume link address so we can get back to you</p>
              </div>
              <div>
                <label className="block text-sm mb-2 dark:text-white">Send Resume/CV Link</label>
                <div className="relative">
                  <input type="text" id="text" name="rclink" placeholder='enter your cv or resume link' className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required/>
                  <div className="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                    <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                    </svg>
                  </div>
                </div>
                <p className="hidden text-xs text-red-600 mt-2">Please include a valid cv or  resume link address so we can get back to you</p>
              </div>


              <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Submit</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  </div>
</div>
{/* modal */}
    </div>
  );
};

export default JobDetails;

