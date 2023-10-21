// import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
// import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";


const ProductsDetails = () => {
    const loadedSingleData = useLoaderData()
    
    const {image, name, price, rating, brand, type } = loadedSingleData || { }

    
    // const {user} = useContext(AuthContext)
    // // const userEmail= user.email
    // // console.log(userEmail)
    
 

   const handleCart = (image, name, price, rating, brand, type,  ) =>{
    const info ={
        image, name, price, rating, brand, type
    }

    fetch(`https://carguru-server-site-5tio91ia1-mohammadhridoy.vercel.app/cart`, {
        method:"POST",
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(info)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: ' Add to cart successfully ',
                icon: 'success',
                confirmButtonText: 'OK'
              })
       
        }
      })


   }

    return (
        <div className=" px-4 lg:px-12 py-3 md:py-12 ">
           <div className="relative">
            <img className="w-full " src={image} alt="" />
            <div className="absolute left-4 lg:left-10 bottom-7 lg:bottom-20 text-white">
                 <h2 className="font-bold md:text-2xl">{name}</h2>
                 <div className="flex items-center ">
                    <h3 className="font-bold md:text-2xl mr-2">${price}</h3>
                    <h4  className="font-semibold md:text-xl">Rating: {rating}</h4>
                 </div>
                 
                 <div className="flex items-center pb-3 ">
                 <h3 className="font-semibold md:text-xl mr-2">{brand}</h3>
                 <h3 className="font-semibold md:text-xl">{type}</h3>
                 </div>

                  {/* <Link to={`/cart/${loadedSingleData._id}`} > */}
                 <button 
                        onClick={ ()=> handleCart(image, name, price, rating, brand, type,  )}
                        className="inline-block shrink-0  rounded-md w-[60%] md:w-[80%]  bg-red-400 px-6 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-red-500 hover:border-none focus:outline-none focus:ring active:text-blue-500"
                        >
                         Cart 
                    </button>
                    {/* </Link> */}
            </div>
            
            
             
           </div>
           <div className="relative pt-4 md:w-[50%] text-gray-400">
                <p>{loadedSingleData.description}</p>
            </div>
            
        </div>
    );
};

export default ProductsDetails;