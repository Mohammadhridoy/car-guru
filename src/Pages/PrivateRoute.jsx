import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from './AuthProvider';
import { useContext } from 'react';



const PrivateRoute = ({children}) => {

    const {user, loading}= useContext(AuthContext)

    // const location = useLocation()
    // console.log(location)

    if(loading){
        return <div className="w-96 mx-auto my-11 "><span className="loading loading-spinner  text-32 p-20 loading-lg"></span> </div>
       
      
     }
     
     if(user){
         return children; 
     }



     return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

PrivateRoute.propTypes = {
    children:PropTypes.array
}

export default PrivateRoute;