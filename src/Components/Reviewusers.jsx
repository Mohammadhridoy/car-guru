

const Reviewusers = () => {
    return (
            <div className=" px-4 lg:px-12 py-4 lg:py-16 dark:bg-black ">
                <h1 className="font-bold text-center pb-5 dark:text-white ">Why Only Choose cargurus</h1>

                <div className="md:grid md:grid-cols-3 gap-8  ">
                <a
                href="#" 
                className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 mb-3 lg:mb-0"
                >
                <span
                    className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                ></span>

              

                <div className="mt-4">
                   <div className="flex items-center ">
                    <img className="dark:bg-white" src="https://i.ibb.co/vz2bVQh/affordable.png" alt="" />
                    <h1 className="font-bold ml-2 dark:text-white"> Affordable Price </h1>
                   </div>
                </div>
                <div className="mt-4">
                    <p className="max-w-[40ch] text-sm text-gray-500 dark:text-white md:text-[18px]">
                    An affordable price for a luxury car may be significantly higher than an affordable price for a 
                    budget car...
                    </p>
                </div>

               
                </a>

                <a
                href="#" 
                className=" relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 mb-3 lg:mb-0"
                >
                <span
                    className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                ></span>

              

                <div className="mt-4">
                   <div className="flex items-center ">
                    <img  className="dark:bg-white" src="https://i.ibb.co/94f8bmz/warranty.png" alt="" />
                    <h1 className="font-bold ml-2 dark:text-white"> 8 Month Warranty </h1>
                   </div>
                </div>
                <div className="mt-4 ">
                    <p className="max-w-[40ch] text-sm text-gray-500 dark:text-white md:text-[18px]">
                    During this 8-month period, if the product fails to function properly due to a defect or malfunction...
                    </p>
                </div>

               
                </a>

                <a
                href="#" 
                className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 mb-3 lg:mb-0"
                >
                <span
                    className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                ></span>

              

                <div className="mt-4">
                   <div className="flex items-center ">
                    <img  className="dark:bg-white" src="https://i.ibb.co/LdKXRz9/guarantee.png " alt="" />
                    <h1 className="font-bold ml-2 dark:text-white"> Money Back Guarantee</h1>
                   </div>
                </div>
                <div className="mt-4">
                    <p className="max-w-[40ch] md:text-[18px] text-gray-500 dark:text-white">
                    Some may offer a full refund with no questions asked, others may require the customer to provide...
                    </p>
                </div>

               
                </a>

                </div>
                
                
            </div>
    );
};

export default Reviewusers;