import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from 'firebase/auth';
import auth from '../Firebase/firebase';
import { Link } from 'react-router-dom';



const Singup = () => {

    const {createUser} = useContext(AuthContext)

    const handleSingup = (e) =>{
        e.preventDefault()
      const form = e.target
      const name = form.name.value
      const email = form.email.value
      const photo = form.image.value
      const password = form.password.value
      const accept = form.accept.checked
      
      console.log(name, email, photo, password, accept)

     if(!/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password)){
        toast("Invalid Passsword !",{
            position:"bottom-right",
            autoClose:2000,
        })
        return
      }
      else if(!accept){
        toast("Please accept our Tearm and Condition",{
            position:"bottom-right",
            autoClose:2000,
        })
        return
      }  

      createUser(email, password)
      .then(result =>{
        console.log(result.user)
        toast.success("successfully account  created",{
            position:"bottom-right",
            autoClose:2000,
        })
        

        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          }).then(() => {
            
          }).catch((error) => {
           console.log(error.message)
          });
          
          form.reset()  

      })
      .catch(error =>{
        console.log(error.message)
        toast.error("!opps something wrong",{
            position:"bottom-right",
            autoClose:2000,
        })
      })

       }




    return (
        <div>
             <div className=" lg:w-[1400px] mx-auto ">

                <form  onSubmit={handleSingup}

                        className="mb-14 mt-14 bg-white  w-96 mx-auto space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                        >
                        <p className="text-center text-lg font-medium text-black">Create your account</p>

                        <div>
                            {/* Name section */}
                        
                            <input
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 mb-4 pe-12 text-sm shadow-sm hover:shadow-md "
                                placeholder="Enter your name.." required name="name"
                            />

                                {/* Image section */}
                                <input
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 mb-4 pe-12 text-sm shadow-sm hover:shadow-md"
                                placeholder="Profile image... " required name="image"
                            />

                            {/* email section */}
                            <label htmlFor="email" className="sr-only">Email</label>

                            <div className="relative">
                            <input
                                type="email"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm hover:shadow-md"
                                placeholder="Enter email" required name="email"
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                />
                                </svg>
                            </span>

                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="sr-only ">Password</label>

                            <div className="relative">
                            <input
                                type="password"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm hover:shadow-md"
                                placeholder="Enter password" name="password" required
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                                </svg>
                            </span>
                            
                            </div>
                        </div>

                        {/* team and conditoin section */}
                        <input
                                type="checkbox"
                                name="accept"
                                className="h-4 w-4 rounded-md border-gray-200 bg-white shadow-sm" 
                            />
                            <span className="text-[16px] text-black ml-3">
                                Accept our terms and conditions.
                            </span>

                        <button
                            type="submit"
                            className="block w-full rounded-lg bg-white px-5 py-3 text-sm font-medium text-black hover:bg-[#46d993] hover:shadow-lg hover:text-white"
                        >
                            SING UP
                        </button>
                        


                        <p className="text-center text-[16px] text-black">
                        Already have an account? 
                            <Link className=" pl-1 text-xl font-bold text-[#46d993]" to={"/login"}>LOGIN</Link>
                        </p>
                        < ToastContainer></ToastContainer>
                    </form>




             </div>

            
        </div>
    );
};

export default Singup;