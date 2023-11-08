/* eslint-disable no-unused-vars */
import React from 'react'

const AppliedJobs = () => {
  return (
    <div className='mt-5 '>
    <h2 className="text-2xl font-semibold leading-tight text-center">Apllied Jobs</h2>
    <div className="flex flex-col mt-5">
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
                    <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Jim Green</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">Weabers</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">Forward Response Developer</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">2500$</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">Remote</td>
                    
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">example@gmail.com</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">Dealine</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">Resume Link</td>
                    </tr>

                   
                </tbody>
                </table>
            </div>
            </div>
        </div>
        </div>
</div>
)
}

export default AppliedJobs
