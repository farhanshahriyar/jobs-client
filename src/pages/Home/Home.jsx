/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Banner from './Banner/Banner'
import About from './AboutUs/About'
import BrowseJobs from './BrowseJobs/BrowseJobs'
import JobsCard from './BrowseJobs/JobsCard/JobsCard'
import Clients from './Clients/Clients'
import Success from './Success/Success'
import Subscribe from './Subscribe/Subscribe'
import Blogs from './Blogs/Blogs'

const Home = () => {
  return (
    <div>
       <Banner/>
       <BrowseJobs/>
       <JobsCard/>
       <About/>
       <Blogs/>
       <Clients/>
       <Success/>
       <Subscribe/>
    </div>
  )
}

export default Home
