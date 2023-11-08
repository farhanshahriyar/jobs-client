/* eslint-disable no-unused-vars */
import React from 'react'
import { useLoaderData } from 'react-router-dom'

const JobDetails = () => {
    const job = useLoaderData()
    console.log(job)
  return (

    <div>
       job id: {job._id}
       job name : {job.cname}
       
    </div>
  )
}

export default JobDetails
