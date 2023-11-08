/* eslint-disable no-unused-vars */
import React from 'react'

const BlogsCard = ({blog}) => {
    const {title, body, image} = blog
  return (
    <div>
       <a className="group relative block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
      <div className="flex-shrink-0 relative w-full rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
        <img className="w-full h-full absolute top-0 start-0 object-cover" src={image} alt="Image Description"/>
      </div>
      <div className="absolute top-0 inset-x-0 z-10">
        <div className="p-4 flex flex-col h-full sm:p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-[2.875rem] w-[2.875rem] border-2 border-white rounded-full" src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description"/>
            </div>
            <div className="ms-2.5 sm:ms-4">
              <h4 className="font-semibold text-white">
                Gloria
              </h4>
              <p className="text-xs text-white/[.8]">
                Jan 09, 2021
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 z-10">
        <div className="flex flex-col h-full p-4 sm:p-6">
          <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
            {title}
          </h3>
          <p className="mt-2 text-white/[.8]">
            Facebook launched the Watch platform in August
          </p>
        </div>
      </div>
    </a>



    <a className="group relative block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#"></a>
    </div>
  )
}

export default BlogsCard
