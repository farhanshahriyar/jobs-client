// /* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from 'react'
// import BlogsCard from './BlogsCard/BlogsCard'

// const Blogs = () => {
//   const [blogs, setBlogs] = useState([])

//   useEffect(() => {
//     fetch("https://jobs-backend-iota.vercel.app/blogs")
//       .then(res => res.json())
//       .then(data => setBlogs(data))
//       .catch(err => console.log(err)) 
//   },[])

//   return (

// <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
//   <div className="grid lg:grid-cols-2 gap-6">
//    {/* {
//     blogs.map(blog => (
//       <BlogsCard key={blog._id} blog={blog}/>
//     ))
//    } */}
//      <a className="group relative block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
//       <div className="flex-shrink-0 relative w-full rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
//         <img className="w-full h-full absolute top-0 start-0 object-cover" src='' alt="Image Description"/>
//       </div>
//       <div className="absolute top-0 inset-x-0 z-10">
//         <div className="p-4 flex flex-col h-full sm:p-6">
//           <div className="flex items-center">
//             <div className="flex-shrink-0">
//               <img className="h-[2.875rem] w-[2.875rem] border-2 border-white rounded-full" src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description"/>
//             </div>
//             <div className="ms-2.5 sm:ms-4">
//               <h4 className="font-semibold text-white">
//                 Gloria
//               </h4>
//               <p className="text-xs text-white/[.8]">
//                 Jan 09, 2021
//               </p>
//             </div>
//           </div>

//         </div>
//       </div>

//       <div className="absolute bottom-0 inset-x-0 z-10">
//         <div className="flex flex-col h-full p-4 sm:p-6">
//           asdasdasd
//           </h3>
//           <p className="mt-2 text-white/[.8]">
//             Facebook launched the Watch platform in August
//           </p>
//         </div>
//       </div>
//     </a>



//     <a className="group relative block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#"></a>

//   </div>
// </div>

//   )
// }

// export default Blogs

/* eslint-disable no-unused-vars */
import React from 'react'
import useTitle from '../../../hook/useTitle'

const Blogs = () => {
  useTitle('Blogs')
  return (

<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div className="grid lg:grid-cols-2 gap-6">
    <a className="group relative block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
      <div className="flex-shrink-0 relative w-full rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
        <img className="w-full h-full absolute top-0 start-0 object-cover" src="https://keenethics.com/wp-content/uploads/2022/05/Feature-image-for-nest.s.png" alt="Image Description"/>
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
                Nov 09, 2023
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 z-10">
        <div className="flex flex-col h-full p-4 sm:p-6">
          <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
          What is express js? What is Nest JS?
          </h3>
          <p className="mt-2 text-white/[.8]">
          Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It is widely known for its performance, minimalist structure, and extensive set of middleware, making it a popular choice for building RESTful APIs.

NestJS is a framework for building efficient, reliable, and scalable server-side applications.
          </p>
        </div>
      </div>
    </a>



    <a className="group relative block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
      <div className="flex-shrink-0 relative w-full rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
        <img className="w-full h-full absolute top-0 start-0 object-cover" src="https://stytch.com/blog/wp-content/uploads/2022/01/How-a-refresh-token-is-generated-and-used-1.png" alt="Image Description"/>
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
                Oct 30, 2023
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 z-10">
        <div className="flex flex-col h-full p-4 sm:p-6">
          <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
          What is an access token and refresh token? How do they work and where should we
store them on the client-side?
          </h3>
          <p className="mt-2 text-white/[.8]">
          An access token is a type of credential that is issued by an authorization server to a client, granting permission to access a protected resource. 

          </p>
        </div>
      </div>
    </a>

  </div>

</div>

  )
}

export default Blogs
