/* eslint-disable no-unused-vars */
import React from 'react'
import Swal from 'sweetalert2'

const Subscribe = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-16 mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="max-w-md">
          <h2 className="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">Subscribe</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Subscribe Jobs to get the latest news, announcements and special offers about your dream jobs.
          </p>
        </div>
    
        <form>
          <div className="w-full sm:max-w-lg md:ms-auto">
            <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
              <div className="w-full">
                <label className="sr-only">Search</label>
                <input type="text" id="hero-input" name="hero-input" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Enter your email"/>
              </div>
              <a onClick={() => {
                Swal.fire({
                    title: 'Subscribed!',
                    text: 'You have been subscribed to our newsletter.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                    })
                }
              }
               className="w-full sm:w-auto whitespace-nowrap py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                Subscribe
              </a>
            </div>
            <p className="mt-3 text-sm text-gray-500">
              No spam, unsubscribe at any time
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Subscribe
