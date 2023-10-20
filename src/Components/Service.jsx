

const Service = () => {
    return (
      <div className="  lg:px-8 ">
        <div className=" px-4 md:px-12 py-4  md:py-12 bg-[#f6f6f6] dark:bg-black md:rounded-3xl ">
            <h1 className="text-black dark:text-white font-bold md:text-4xl text-center">How Does It Work</h1>
            <p  className="text-gray-400 mt-2 md:text-xl text-center">Here are some of the featured cars in different categories</p>
            <div className="grid ml-20 md:ml-0 md:grid-cols-4 md:gap-8 md:py-9 px-3">
            <div className=" ">
                <div className="w-60 text-center md:py-7">
                    <div className=" w-3/5  text-center mx-auto py-2 ml-20">
                    <img className="bg-white p-4 rounded-full hover:bg-[#46d993] transition delay-300 duration-200 ease-in-out " src="https://i.ibb.co/kSBfQVH/loaction.png" alt="" />
                    </div>
                    <h1 className="text-black dark:text-white font-bold md:text-xl py-2">Choose Any where</h1>
                    <p className="text-gray-400  ">Car servicing is the regular maintenance and inspection of a vehicle to ensure.</p>
                </div>
            </div>
            
            <div>
                <div className="w-60 text-center py-7">
                    <div className=" w-3/5  text-center mx-auto py-2 ml-20">
                    <img className="bg-white p-4 rounded-full hover:bg-[#46d993] transition delay-300 duration-200 ease-in-out " src="https://i.ibb.co/JkDHMHr/contact.png" alt="" />
                    </div>
                    <h1 className="text-black dark:text-white font-bold md:text-xl py-2">Contact With Us</h1>
                    <p className="text-gray-400  ">Car servicing is the regular maintenance and inspection of a vehicle to ensure.</p>
                </div>
            </div>

            <div>
                <div className="w-60 text-center py-7">
                    <div className=" w-3/5  text-center mx-auto py-2 ml-20">
                    <img className="bg-white p-4 rounded-full hover:bg-[#46d993] transition delay-300 duration-200 ease-in-out " src="https://i.ibb.co/Xz7C2BR/pay.png" alt="" />
                    </div>
                    <h1 className="text-black dark:text-white  font-bold md:text-xl py-2">Pay For The Car</h1>
                    <p className="text-gray-400  ">Car servicing is the regular maintenance and inspection of a vehicle to ensure.</p>
                </div>
            </div>

            <div>
                <div className="w-60 text-center py-7">
                    <div className=" w-3/5  text-center mx-auto py-2 ml-20">
                    <img className="bg-white p-4 rounded-full hover:bg-[#46d993] transition delay-300 duration-200 ease-in-out " src="https://i.ibb.co/LQ2HFjn/recieve.png" alt="" />
                    </div>
                    <h1 className="text-black dark:text-white  font-bold md:text-xl py-2">Recieve The Car</h1>
                    <p className="text-gray-400  ">Car servicing is the regular maintenance and inspection of a vehicle to ensure.</p>
                </div>
            </div>
            </div>

        </div>
        </div>
    );
};

export default Service;