import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Mainlayout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Singup from "../Pages/Singup";
import Addproduct from "../Pages/Addproduct";
import MyCart from "../Pages/MyCart";


const MyRoute = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:"/",
                element: <Home></Home>
            },
            {
                path:"/login",
                element: <Login></Login>
            },
            {
                path:"/singup",
                element: <Singup></Singup>
            },
            {
                path:"/addproduct",
                element: <Addproduct></Addproduct>
            },
            {
                path:"cart",
                element: <MyCart></MyCart>
            }
        ]
    }
])

export default MyRoute;