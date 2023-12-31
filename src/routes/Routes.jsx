import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AboutUs from "../pages/AboutUs/AboutUs";
import Careers from "../pages/Careers/Careers";
import Contact from "../pages/Contact/Contact";
import AddJobs from "../pages/AddJobs/AddJobs";
// import MyJobs from "../pages/MyJobs/MyJobs";
import AllJobs from "../pages/AllJobs/AllJobs";
import Error from "../pages/Error/Error";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import JobDetails from "../pages/Home/BrowseJobs/SingleJobs/JobDetails";
import MyJob from "../pages/MyJobs/MyJob";
import AppliedJobs from "../pages/AppliedJobs/AppliedJobs";
import Blogs from "../pages/Home/Blogs/Blogs";
import UpdateJob from "../pages/UpdateJobs/UpdateJob";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <Error/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "*",
          element: <Error/>,
        },
        {
          path: "/about-us",
          element: <AboutUs/>,
        },
        {
          path: "/login",
          element: <Login/>,
        },
        {
          path: "/register",
          element: <Register/>,
        },
        {
          path: "/blogs",
          element: <Blogs/>,
        },
        {
          path: "/careers",
          element: <Careers/>,
        },
        {
          path: "/contact",
          element: <Contact/>
        }, 
        {
          path: "/jobs/:id",
          element: <ProtectedRoute>
            <JobDetails/>
          </ProtectedRoute>,
          loader: ({params}) => fetch(`https://jobs-backend-iota.vercel.app/jobs/${params.id}`).then(res => res.json()),
        },
        {
          path: "/add-jobs",
          // element: <AddJobs/>,
          element:
            <ProtectedRoute>
              <AddJobs></AddJobs>
            </ProtectedRoute>
        },
        {
          path: "/all-jobs",
          element: <AllJobs/>,
        },
        {
          path: "/my-jobs",
          element: <ProtectedRoute>
            <MyJob/>
          </ProtectedRoute>,
         
        },
        {
          path: "/applied-jobs",
          element: <ProtectedRoute>
            <AppliedJobs/>
          </ProtectedRoute>,
          
        },
        {
          path: "/update-jobs/:id",
          element: <ProtectedRoute>
            <UpdateJob/>
          </ProtectedRoute>,
          loader: ({params}) => fetch(`https://jobs-backend-iota.vercel.app/jobs/${params.id}`).then(res => res.json()),
        }
      ],
    },
  ]);

export default router;