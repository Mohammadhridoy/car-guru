import { Link, useLoaderData } from "react-router-dom";

import 'react-slideshow-image/dist/styles.css'
import {  Slide } from 'react-slideshow-image';

const object =[
        {images:'https://i.ibb.co/VJhLrcx/slider-2-1.jpg'},
        {images:'https://i.ibb.co/n3Fdc8X/slider-2.jpg'},
        {images:'https://i.ibb.co/fHy7CkN/slider-3.jpg'}
]


const MazdaProducts = () => {

    const loadedProducts = useLoaderData()

    const filterProducts = loadedProducts.filter(products => products.brand == "Mazda" )



    return (
        <div className=" px-4 lg:px-12 py-3 md:py-12">

             <div className="slide-container ">
                <Slide >
                    {object.map((fadeImage, index) => (
                    <div key={index}>
                        <img style={{ width: '100%' }} src={fadeImage.images} />
                    </div>
                    ))}
                </Slide>
                </div>
            
        {/* cars section  */}

    {
      filterProducts.length==0 ?  <h4 className="text-center">No products available now</h4>
      :
      <div className="md:grid md:grid-cols-3 gap-16 py-4 md:py-12">
        {
            filterProducts.map((product, index )=>  <div key={index} >

            <a href="#" className="block rounded-lg p-4 shadow-md shadow-indigo-100">
            <img
                alt="Home"
                src={product.image}
                className="h-56 w-full rounded-md object-cover"
            />

            <div className="mt-2">
                <dl>
                <div>
                    <dt className="sr-only">Price</dt>

                    <dd className="text-sm text-gray-500">${product.price}</dd>
                </div>

                <div>
                   

                    <dd className="font-medium">{product.name}</dd>
                </div>
                </dl>

                <div className="flex items-center gap-4">
                    <h1 className="font-medium  ">Brand: {product.brand}</h1>
                    <h3 className="font-medium">Type: {product.type}</h3>
                    <h5 className="font-medium">Rating: {product.rating}</h5>
                </div>
                <div className="flex justify-between pt-3">
                <Link to={`/productsdetails/${product._id}`}>
                    <button 
                        className="inline-block shrink-0 rounded-md lg:w-[100%]  bg-[#46D993] px-6 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-red-500 hover:border-none focus:outline-none focus:ring active:text-blue-500"
                        >
                        Details 
                    </button>
                    </Link>

                    <Link to={`/updateinfo/${product._id}`}> 
                    <button 
                        className="inline-block shrink-0 rounded-md lg:w-[100%]  bg-red-400 px-6 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-red-500 hover:border-none focus:outline-none focus:ring active:text-blue-500"
                        >
                        Update 
                    </button>
                    </Link>
                </div>

             
            </div>
            </a>


        </div> 



           
     )
      }

      </div>

    }
      
      

        
    </div>
    );
};

export default MazdaProducts;