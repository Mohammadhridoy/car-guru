import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Pages/AuthProvider";
// import { BsCartCheck } from "react-icons/bs";


const Navbar = () => {

    const {user, logOut} =useContext(AuthContext)

    const handlelogOut =() =>{
        logOut()
    }

    return (
        <div>

            <div className="  mx-auto z-10 bg-white   lg:py-2 md:sticky top-0 shadow-sm ">

            <div className="navbar px-4 lg:px-12 ">
                <div className="navbar-start ">
                    <div className="dropdown">
                        {/* Nav icon link  */}
                    <label tabIndex={0} className="btn btn-ghost lg:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    {/* small device dropdown manu  */}
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box  w-52">
                    <li className="px-3 font-semibold text-3xl text-black"> <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""}>
                                    Home
                        </NavLink></li>
                        
                          <div>
                                    <li  className="px-3 font-semibold text-[16px]  text-black">
                                    <NavLink
                                            to="/addproduct"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "active" : ""}>
                                                Add Product
                                        </NavLink>
                                    </li>
                
                                    <li  className="px-3 font-semibold text-[16px] text-black">
      
                                    <NavLink
                                            to="/cart"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "active" : ""}>
                                                
                                                Cart  
                                        </NavLink>
                                    </li>   
                                </div>
                        


                    </ul>
                    </div>
                    <div className="flex items-center">
                        <img className="w-8 md:w-10" src="https://i.ibb.co/tH0GWV4/carguru-prev-ui.png" alt="" />
                    <a className=" cursor-pointer  normal-case  md:text-xl text-[#46D993] md:text-red-400 font-bold  ml-1 ">Car<span className="md:text-[#46D993] text-red-400 ">gurus</span></a>

                    </div>
                   
                </div>
                    

                {/* md and lg device manu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-2">

                        <li className="px-3 font-semibold text-[16px] text-black"><NavLink
                            to="/" 
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active " : "" } >
                                    Home
                        </NavLink></li>
                        
                            <div className="flex">
                                    <li  className="px-3 font-semibold text-[16px] text-black">
                                    <NavLink
                                            to="/addproduct"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "active" : ""}>
                                                Add Product
                                        </NavLink>
                                    </li>
                
                                    <li  className="px-3 font-semibold text-[16px] text-black">
                                    <NavLink
                                            to="/cart"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "active" : ""}>
                                                Cart  
                                        </NavLink>
                                    </li>   
                                </div>
                        

                    </ul>
                </div>

                {/* md and lg device button */}
                <div className="navbar-end">
                  {  
                      user ?   <div className="flex">
                        <div className=" mr-3 flex items-center gap-3 text-[16px] text-black font-semibold">
                            <h6>{user.displayName}</h6>
                            <div className="border-black border-2 rounded-full"> 
                                <img className="w-12  rounded-full" src={user.photoURL} alt="photo" />
                            </div>
                            
                        </div>
                        <button onClick={handlelogOut} className="btn px-4 bg-[#ee626b] border-none text-white hover:bg-[#46d993] shadow-md ">Sign Out</button>
                </div>
                 : <div className="">
                    <Link to={"/login"} >
                    <button className="btn px-5 md:px-5 bg-[#ee626b] border-none text-white hover:bg-[#46D993] md:shadow-md text-xs lg:text-[16px] ">Login</button>
                    </Link>
                </div>  }
                    
                    
                
                
                

                    
                </div>
            </div>


            </div>
            
        </div>
    );
};

export default Navbar;