/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvider';
import DatePicker from 'react-datepicker';

const UpdateJob = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [dates, setDates] = useState(new Date());
  const updatedJob = useLoaderData();
  const {
    _id,
    banner,
    cname,
    title,
    category,
    salary,
    date,
    description,
    postingDate
  } = updatedJob;
  // const jobData = useLoaderData();
  // const [formData, setFormData] = useState({
  //   banner: '',
  //   cname: '',
  //   title: '',
  //   category: '',
  //   salary: '',
  //   date: '',
  //   description: '',
  //   postingDate: ''
  // });

  // useEffect(() => {

  // //   if (jobData) {
  // //     setFormData({ ...jobData });
  // //   }
  // // }, [jobData]);

  // // const handleChange = (e) => {
  // //   const { name, value } = e.target;
  // //   setFormData(prevState => ({
  // //     ...prevState,
  // //     [name]: value
  // //   }));
  // // }
  // // const handleChange = (e) => {
  // //   const { name, value } = e.target;
  // //   setFormData(prevState => ({
  // //     ...prevState,
  // //     [name]: value
  // //   }));
  // // };
  // })
  

  const handleUpdate = async (e) => {
    e.preventDefault();
    // try {
    //   const response = await fetch(`https://server-ewpifyj7q-farhanshahriyar.vercel.app/jobs/${id}`, {
    //     method: 'PUT',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData)
    //   });

    //   if (response.ok) {
    //     const result = await response.json();
    //     console.log(result); 
    //     navigate('/my-jobs'); 
    //   } else {
    //     throw new Error('Something went wrong with the update');
    //   }
    // } catch (error) {
    //   console.error('There was an error updating the job', error);
    // }
    const form = e.target;
    const banner = form.banner.value;
    const cname = form.cname.value;
    const title = form.title.value;
    const uname = form.uname.value;
    const email = form.email.value;
    const category = form.category.value;
    const salary = form.salary.value;
    const description = form.description.value;
    const date = form.date.value;
    const postingDate = dates;

    const updatedJob = {
      banner,
      cname,
      title,
      uname,
      email,
      category,
      salary,
      description,
      date,
      postingDate
      // applicationNumber: 0,
  }
  console.log(updatedJob) 
}

  return (
    <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <form onSubmit={handleUpdate}>
        <div className="bg-white rounded-xl shadow dark:bg-slate-900">
          <h2 className="text-lg font-medium text-gray-800 dark:text-gray-200 bg-white dark:bg-slate-900 px-4 py-5 sm:px-6 rounded-t-xl border-b border-gray-200 dark:border-gray-700">Update Your Job</h2>
          <div className="mt-3 p-4 sm:pt-0 sm:p-7">

            <div className="space-y-4 sm:space-y-6">
            <div className="space-y-2">
                <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                  Job Banner Link
                </label>
    
                <input id="af-submit-app-project-name" type="text" defaultValue={banner}name='banner' className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Upload job banner link"/>
              </div>
           
              <div className="space-y-2">
                <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                  Job Title
                </label>
    
                <input id="af-submit-app-project-name" type="text" defaultValue={title} name='title' className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Enter Job Position Title. Example : Frontend Developer Intern"/>
              </div>

              <div className="space-y-2">
                <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                  Company Name
                </label>
    
                <input id="af-submit-app-project-name" type="text" defaultValue={cname} name='cname' className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Company Name"/>
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
                  Category
                </label>
    
                <select name='category' defaultValue={category} id="af-submit-app-category" className="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                  <option selected>Select a Job Category</option>
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
    
                <input id="af-submit-project-url" type="text" defaultValue={salary}  name='salary' className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder=" $90k - $130k or $100k - $150k"/>
              </div>
            
                <div className="space-y-2">
                <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                 Job Description
                </label>
    
                <textarea id="af-submit-app-description" defaultValue={description}  name='description' className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" rows="6" placeholder="A detailed summary will better explain your jobs to the audiences. Our users will see this in your dedicated jobs in page."></textarea>
              </div>

              <div className="space-y-2">
                <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                    Job Application Deadline
                </label>
                <DatePicker
                    name='date'
                    defaultValue={date} 
                    selected={postingDate}
                    onChange={(date) => setDates(date)}
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
  )
}

export default UpdateJob
