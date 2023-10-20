// import { Link } from "react-router-dom";
import Swal from 'sweetalert2'


const Addproduct = () => {

    const handleAdd =  e =>{
        e.preventDefault()
        const form = e.target
        
        const brand = form.brand.value
        const type = form.type.value
        const name = form.name.value
        const image = form.image.value
        const price = form.price.value
        const description = form.description.value
        const rating  = form.rating.value
        console.log( brand, type, name, image, price, description, rating)

        const products = {brand, type, name, image, price, description, rating}
        console.log(products)

        fetch('http://localhost:5000/products', {
            method:"POST",
            headers:{
              'content-type':'application/json'
            },
            body: JSON.stringify(products)
          })
          .then(res=>res.json())
          .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: ' product Added successfully ',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
              form.reset()
            }
          })
    }


    return (
        <div className="px-4 md:px-12 py-4 md:py-2">



            <section className="bg-white  lg:w-[100%]">
            <div className=" lg:min-h-screen  ">

                {/* left form section  */}
                <main
                // className=" flex items-center justify-center px-4 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                className=" flex items-center  px-4 py-8 sm:px-12 lg:w-4/5 lg:mx-auto lg:px-16 lg:py-10 xl:col-span-6"
                >
                <div className="max-w-xl lg:max-w-3xl lg:w-4/5 ml-[90px] lg:mx-auto">
                    <a className=" text-blue-600 flex items-center lg:justify-center" href="/">
                    <span className="sr-only">Home</span>
                    <img className="w-8 md:w-10 " src="https://i.ibb.co/tH0GWV4/carguru-prev-ui.png" alt="" />
                    <a className=" cursor-pointer  normal-case  md:text-xl text-[#46D993] md:text-red-400 font-bold  ml-1 ">Car<span className="md:text-[#46D993] text-red-400 ">gurus</span></a>
                   
                    </a>

                    <h1
                    className="mt-6 text-2xl font-bold text-gray-900 lg:text-center sm:text-3xl md:text-4xl"
                    >
                    Add Product
                    </h1>

                    

                    <form onSubmit={handleAdd} className="mt-8 space-y-3 md:space-y-6 lg:w-4/5 lg:pl-[80px] ">
                     {/* brand option section start */}
                     <div>
                            <label htmlFor="HeadlineAct" className="block text-sm font-medium text-gray-900">
                                Brand Name
                            </label>

                            <select
                                name="brand"
                                id="Brand"
                                className="mt-1.5 w-full rounded-lg  text-gray-700 sm:text-sm p-2  border border-[#46D993] shadow-md"
                            >
                                <option value="">Please select</option>
                                <option value="Toyota">Toyota</option>
                                <option value="TATA">TATA</option>
                                <option value="Tesla">Tesla</option>
                                <option value="Mazda">Mazda</option>
                                <option value="Kia">Kia</option>
                                <option value="Mercedes-Benz">Mercedes-Benz</option>
                            </select>
                    </div>
                      {/* brand option section end */}

                          {/* type option section start */}
                     <div>
                            <label htmlFor="HeadlineAct" className="block text-sm font-medium text-gray-900">
                                 Type
                            </label>

                            <select
                                name="type"
                                id="Type"
                                className="mt-1.5 w-full rounded-lg  text-gray-700 sm:text-sm p-2  border border-[#46D993] shadow-md"
                            >
                                <option value="">Please select</option>
                                <option value="Cars">Cars</option>
                                <option value="Trucks">Trucks</option>
                                <option value="SUVs">SUVs</option>
                                <option value="Electrified">Electrified</option>
                            </select>
                    </div>
                      {/* type option section end */}



                    <div className="col-span-6 sm:col-span-3">
                        <label
                        htmlFor="Name"
                        className="block text-sm font-medium text-gray-700"
                        >
                         Name
                        </label>

                        <input
                        type="text"
                        id="Name"
                        name="name"
                        className="mt-1 lg:w-full  rounded-md  bg-white text-sm text-gray-700  p-2  border border-[#46D993] shadow-md"
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-3 " >
                        <label
                        htmlFor="image"
                        className="block text-sm font-medium text-gray-700"
                        >
                        Image Link
                        </label>

                        <input
                        type="text"
                        id="image"
                        name="image"
                        className="mt-1 lg:w-full rounded-md  p-2  border border-[#46D993] shadow-md bg-white text-sm text-gray-700 "
                        />
                    </div>

                   

                    <div className="col-span-6">
                        <label htmlFor="Price" className="block text-sm font-medium text-gray-700">
                        Price
                        </label>

                        <input
                        type="text"
                        id="Price"
                        name="price"
                        className="mt-1 lg:w-full rounded-md  bg-white text-sm text-gray-700  p-2  border border-[#46D993] shadow-md"
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700"
                        >
                        Short description
                        </label>

                        <input
                        type="text"
                        id="description"
                        name="description"
                        className="mt-1 lg:w-full rounded-md  bg-white text-sm text-gray-700  p-2  border border-[#46D993] shadow-md"
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <label
                        htmlFor="Rating"
                        className="block text-sm font-medium text-gray-700"
                        >
                        Rating
                        </label>

                        <input
                        type="text"
                        id="Rating"
                        name="rating"
                        className="mt-1 lg:w-full rounded-md  bg-white text-sm text-gray-700  p-2  border border-[#46D993] shadow-md"
                        />
                    </div>

                 
                   

                    <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                    
                        <button
                        className="inline-block shrink-0 rounded-md lg:w-full  bg-[#46D993] px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-red-500 hover:border-none focus:outline-none focus:ring active:text-blue-500"
                        >
                        Add Product
                        </button>
                       
                    </div>
                    </form>
                </div>
                </main>
            </div>
            </section>

            
        </div>
    );
};

export default Addproduct;