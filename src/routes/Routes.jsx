import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AboutUs from "../pages/AboutUs/AboutUs";
import Careers from "../pages/Careers/Careers";
import Contact from "../pages/Contact/Contact";
import AddJobs from "../pages/AddJobs/AddJobs";
import MyJobs from "../pages/MyJobs/MyJobs";
import AllJobs from "../pages/AllJobs/AllJobs";
// import Error from "../pages/Error/Error";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
    //   errorElement: <Error/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/about-us",
          element: <AboutUs/>,
        },
        // {
        //     path: "/error",
        //     element: <Error/>
        // }
        {
          path: "/login",
          element: <Login/>,
        },
        {
          path: "/register",
          element: <Register/>,
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
          path: "/add-jobs",
          element: <AddJobs/>,
        },
        {
          path: "/my-jobs",
          element: <MyJobs/>,
          // loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`).then(res => res.json()),
        },
        {
          path: "/all-jobs",
          element: <AllJobs/>,
        }
      ],
    },
  ]);

export default router;