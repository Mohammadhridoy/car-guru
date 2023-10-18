import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const BrandCards = () => {

    const [brands, setbrands]=useState([])

    useEffect(()=>{
        fetch('brand.json')
        .then(res => res.json())
        .then(data => setbrands(data))
    },[])

    return (
        <div className="px-4 md:px-12 py-4  md:py-12">
            <div>
                <h1 className="text-black font-bold md:text-3xl  ">Brand Category</h1>
                <p className="text-gray-400 mt-2 md:text-xl">To get the most accurate and up-to-date information.</p>
                <div className="grid md:grid-cols-6 md:py-5">
                    {
                        brands.map(brand => <div key={brand.id} >
                            

                            <div className="relative flex flex-col mt-6 text-gray-700 bg-white  border hover:border-[#46d993] shadow-md w-48 h-48 rounded-xl bg-clip-border cursor-pointer">
                                
                                    <div className="pl-5 pt-5 mt-3">
                                    <img className="w-8 mb-3" src={brand.image} alt="" />
                                        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                        {brand.brand}
                                        </h5>
                                        
                                    </div>
                                    <div className="pl-2 pt-5 " >
                                    <Link to={'/'}>
                                    <button
                                        className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-black uppercase align-middle transition-all rounded-lg select-none hover:bg-[#46d993] active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                        type="button"
                                        data-ripple-dark="true"
                                    >
                                        View All
                                        <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-4 h-4"
                                        >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                        ></path>
                                        </svg>
                                    </button>
                                    </Link>
                               
                                    </div>

                                
                                

                              
                            </div>


                        </div>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default BrandCards;