import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Mainlayout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Singup from "../Pages/Singup";
import Addproduct from "../Pages/Addproduct";
import MyCart from "../Pages/MyCart";
import ToyotaProducts from "../Pages/ToyotaProducts";
import TeslaProducts from "../Pages/TeslaProducts";
import TataProducts from "../Pages/TataProducts";
import MazdaProducts from "../Pages/MazdaProducts";
import KiaProducts from "../Pages/KiaProducts";
import BenzProducts from "../Pages/BenzProducts";
import ProductsDetails from "../Pages/ProductsDetails";
import UpdateProducts from "../Pages/UpdateProducts";
import PrivateRoute from "../Pages/PrivateRoute";
import Error from "../Pages/Error";





const MyRoute = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement: <Error></Error>,
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
                element: <PrivateRoute><Addproduct></Addproduct></PrivateRoute>  
            },
            {
                path:"/cart",
                element: <PrivateRoute>  <MyCart></MyCart> </PrivateRoute> ,
                loader:() =>fetch("https://carguru-server-site-5tio91ia1-mohammadhridoy.vercel.app/cart")
            },
            {
                path:"/toyotaproducts",
                element: <ToyotaProducts></ToyotaProducts>,
                loader: ()=> fetch('https://carguru-server-site-5tio91ia1-mohammadhridoy.vercel.app/products')
            },
            
            {
                path:"/teslaproducts",
                element: <TeslaProducts></TeslaProducts>,
                loader: ()=> fetch('https://carguru-server-site-5tio91ia1-mohammadhridoy.vercel.app/products')
            },
            {
                path:"/tataproducts",
                element: <TataProducts></TataProducts>,
                loader:() => fetch('https://carguru-server-site-5tio91ia1-mohammadhridoy.vercel.app/products')
            },
            {
                path:"/mazdaproducts",
                element: <MazdaProducts></MazdaProducts>,
                loader:() => fetch('https://carguru-server-site-5tio91ia1-mohammadhridoy.vercel.app/products')
            },
            {
                path:"/kiaproducts",
                element: <KiaProducts></KiaProducts>,
                loader:() => fetch('https://carguru-server-site-5tio91ia1-mohammadhridoy.vercel.app/products')
            },
            {
                path:"/benzproducts",
                element: <BenzProducts></BenzProducts>,
                loader:() => fetch('https://carguru-server-site-5tio91ia1-mohammadhridoy.vercel.app/products')
            },
            {
                path:"/productsdetails/:id",
                element: <PrivateRoute> <ProductsDetails></ProductsDetails> </PrivateRoute>,
                loader:({params}) =>fetch(`https://carguru-server-site-5tio91ia1-mohammadhridoy.vercel.app/products/${params.id}`)
            },
            {
                path:"/updateinfo/:id",
                element: <PrivateRoute> <UpdateProducts> </UpdateProducts>    </PrivateRoute>  ,
                loader:({params}) =>fetch(`https://carguru-server-site-5tio91ia1-mohammadhridoy.vercel.app/products/${params.id}`)
            }

        ]
    }
])

export default MyRoute;