import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AboutUs from "../pages/AboutUs/AboutUs";
import Careers from "../pages/Careers/Careers";
import Contact from "../pages/Contact/Contact";
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
        }
      ],
    },
  ]);

export default router;