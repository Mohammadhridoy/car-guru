
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const MyCart = () => {
    const loadedCart = useLoaderData()
    console.log(loadedCart)
    const [loadedCarts, setloadedCarts] = useState(loadedCart)



const handleDelete =(id) =>{

    console.log(id)


    
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {

        if (result.isConfirmed) {
        fetch(`https://carguru-server-site-5tio91ia1-mohammadhridoy.vercel.app/cart/${id}`,{
            method:"DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: ' Deleted successfully ',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
                  const remainingCart = loadedCarts.filter(cart => cart._id !=id)
                  setloadedCarts(remainingCart)
            }
    
        })


        }
      })
}


 



    return (
        <div className="">
            
          {
            loadedCarts.length == 0? <h2 className="py-5 md:py-12 text-center font-bold">No product add to card</h2>
            :     <section >
            <div className="  max-w-screen-xl mx-auto px-8 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="mx-auto max-w-3xl">
                <header className="text-center">
                    <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
                </header>
                <div className="lg:flex items-center gap-9  border-b-2  md:pt-10 hidden "> 
                    <h1 className="ml-14 pb-2">ITEM</h1>
                    <h1 className="ml-32">price</h1>
                    <h1 className="ml-20">quantity</h1>
                    <h1 className="ml-20">Subtotal</h1>
                    <h1 className="ml-8">remove</h1>
                </div>

                <div  className="mt-8">
                    <ul className="space-y-4">
               
                    {
                        loadedCarts.map((cart, index) => 
                      
                        <li key={index} className="flex items-center gap-4">
                        {/* product images  */}
                        <img
                        src={cart.image}
                        alt=""
                        className="h-16 w-16 rounded object-cover"
                        />
                        {/* product info */}
                        <div>
                        <h3 className="text-sm text-gray-900">{cart.brand}</h3>

                        <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                            <div>
                            <dt className="inline">{cart.type}</dt>
                            </div>
                        </dl>
                        </div>
                        {/* price */}
                        <div>
                            <h1 className="font-bold md:text-xl md:ml-28">${cart.price}</h1>
                        </div>
                        {/* quantity */}
                        <div className="md:flex flex-1 items-center justify-center gap-2 md:mr-4">
                        <form>
                            <label htmlFor="Line1Qty" className="sr-only"> Quantity </label>

                            <input 
                            type="number"
                            name="num"
                            min="1"
                            value="1"
                            id="Line1Qty"
                            className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                            />
                        </form>

                        
                        </div>
                        {/* subtotal */}
                        <div>
                            <h1 className="font-bold md:text-xl md:mr-20">$1250</h1>
                        </div>

                        {/* button delete */}
                        <button onClick={()=>handleDelete(cart._id)} className="text-gray-600 transition hover:text-red-600 md:mr-6 ">
                            <span className="sr-only">Remove item</span>

                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-4 w-4"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                            </svg>
                        </button>
                    </li>

                   
                   
                        
                        
                        )
                    }

                    </ul>

                    <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                    <div className="w-screen max-w-lg space-y-4">
                        <dl className="space-y-0.5 text-sm text-gray-700">


                        <div className="flex justify-between !text-base font-medium">
                            <dt>Total</dt>
                            <dd>£200</dd>
                        </div>
                        </dl>

                        <div className="flex justify-end">
                    
                        </div>

                        <div className="flex justify-end">
                        <a
                            href="#"
                            className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600 "
                        >
                            Checkout
                        </a>
                        </div>
                    </div>
                    </div>
                    </div>
                
                </div>
            </div>
            </section>
          
        
         




          }
            



            
        </div>
    );
};

export default MyCart;