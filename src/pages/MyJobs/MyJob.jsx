/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const MyJob = () => {
    const [myjobs, setMyJobs] = useState([]);

  //   const handleDelete = async (jobId) => {
  //     // swal with a confirmation before deleting the job
  //     const confirmation = 
  //     Swal.fire({
  //         title: 'Are you sure?',
  //         text: "You won't be able to revert this!",
  //         icon: 'warning',
  //         showCancelButton: true,
  //         confirmButtonColor: '#6366F1',
  //         cancelButtonColor: '#EF4444',
  //         confirmButtonText: 'Yes, delete it!'
  //     });

  //     if (confirmation) {
  //         try {
  //             // const response = await fetch(`http://localhost:5000/jobs/${jobId}`, {
  //             //     method: 'DELETE',
  //             // });
  //             const response = await fetch(`http://localhost:5000/jobs/${jobId}`, {
  //               method: 'DELETE',
  //             });
  
  //             if (!response.ok) {
  //                 throw new Error(`Error: ${response.status}`);
  //             }
  
  //             // Remove the job from the list in the frontend
  //             setMyJobs(currentJobs => currentJobs.filter(job => job._id.toString() !== jobId));
  
  //             console.log('Job deleted successfully');
  //         } catch (error) {
  //             console.error("Failed to delete the job:", error);
  //         }
  //     }
  // };

  const handleDelete = async (jobId) => {
    // Swal with a confirmation before deleting the job
    const confirmation = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#6366F1',
      cancelButtonColor: '#EF4444',
      confirmButtonText: 'Yes, delete it!'
    });
  
    if (confirmation.value) { // Check if user confirmed the deletion
      try {
        const response = await fetch(`http://localhost:5000/jobs/${jobId}`, {
          method: 'DELETE',
        });
  
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
  
        // Remove the job from the list in the frontend
        setMyJobs(currentJobs => currentJobs.filter(job => job._id.toString() !== jobId));
  
        console.log('Job deleted successfully');
        // Optional: Show success message
        Swal.fire('Deleted!', 'The job has been deleted.', 'success');
      } catch (error) {
        console.error("Failed to delete the job:", error);
        // Optional: Show error message
        Swal.fire('Error!', 'There was a problem deleting the job.', 'error');
      }
    } else {
      console.log('Job deletion was canceled.');
    }
  };
  
  
      
    // render all posted the jobs
    useEffect(() => {
        // Fetching job data from the backend
        const fetchMyJobs = async () => {
          try {
            const response = await fetch('http://localhost:5000/jobs'); // Fetch data from the backend
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setMyJobs(data);
          } catch (error) {
            console.error("Failed to fetch applied jobs:", error);
          }
        };
    
        fetchMyJobs();
      }, []);


    return (
    <div className='mt-5 '>
    <h2 className="text-2xl font-semibold leading-tight text-center">You have posted {myjobs.length} jobs</h2>
    <div className="flex flex-col mt-5">
        <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 mb-10">
                <thead>
                    <tr>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Job ID</th>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Company Name</th>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Position</th>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Salary</th>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Category</th>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Application Dateline</th>
                    <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Delete Job</th>
                    <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Update Job</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {myjobs.map((job) => ( // Use map to iterate over the array
                    <tr key={job._id}> {/* Use a unique key; assuming each job has a unique _id */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{job._id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{job.cname}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{job.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{job.salary}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{job.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{job.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                    <button onClick={() => handleDelete(job._id)}
                        type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                        Delete
                    </button>

                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <Link to = {`/update-jobs/${job._id}`} >
                        <button
                         type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Update</button>
                        </Link>
                    </td>
                    </tr>
                ))}
                   
                </tbody>
                </table>
            </div>
            </div>
        </div>
        </div>
</div>
)
}

export default MyJob
