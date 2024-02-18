import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import SpareParts from "../Pages/SpareParts/SpareParts";
import Blogs from "../Pages/Blogs/Blogs";
import AboutMe from "../Pages/AboutMe/AboutMe";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Shipment from "../Shared/Shipment/Shipment";
import Dashboard from "../layout/Dashboard";
import Cart from "../Pages/UserDashboard/Cart/Cart";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/parts',
        element: <SpareParts></SpareParts>
      },
      {
        path: '/blog',
        element: <Blogs></Blogs>
      },
      {
        path: '/about',
        element:<AboutMe></AboutMe>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signUp',
        element:<SignUp></SignUp>
      },
      {
        path:'/shipment',
        element:<PrivateRoute> <Shipment></Shipment></PrivateRoute>
      }
    ]
  },
  {
    path:'dashboard',
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:'cart',
        element:<Cart></Cart>
      }
    ]
  }
]);