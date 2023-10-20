import { useLoaderData } from "react-router-dom";


const ProductsDetails = () => {
    const loadedSingleData = useLoaderData()
    console.log(loadedSingleData)

    return (
        <div className=" px-4 lg:px-12 py-3 md:py-12 ">
           <div className="relative">
            <img className="w-full" src={loadedSingleData.image} alt="" />
            <div className="absolute left-4 lg:left-10 bottom-7 lg:bottom-20 text-white">
                 <h2 className="font-bold md:text-2xl">{loadedSingleData.name}</h2>
                 <div className="flex items-center ">
                    <h3 className="font-bold md:text-2xl mr-2">${loadedSingleData.price}</h3>
                    <h4  className="font-semibold md:text-xl">Rating: {loadedSingleData.rating}</h4>
                 </div>
                 
                 <div className="flex items-center pb-3 ">
                 <h3 className="font-semibold md:text-xl mr-2">{loadedSingleData.brand}</h3>
                 <h3 className="font-semibold md:text-xl">{loadedSingleData.type}</h3>
                 </div>

                 <button 
                        className="inline-block shrink-0  rounded-md w-[60%] md:w-[80%]  bg-red-400 px-6 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-red-500 hover:border-none focus:outline-none focus:ring active:text-blue-500"
                        >
                         Cart 
                    </button>
            </div>
            
            
             
           </div>
           <div className="relative pt-4 md:w-[50%] text-gray-400">
                <p>{loadedSingleData.description}</p>
            </div>
            
        </div>
    );
};

export default ProductsDetails;