

const Banner = () => {
    return (
        <div className="  lg:px-8  dark:bg-black " >
            <div className=" mx-auto  bg-[url('https://i.ibb.co/71pPB8W/bannar2-bg.jpg')] bg-cover bg-center md:h-[600px]  md:rounded-3xl  "  >

                <div className=" min-h-screen pt-10 md:pt-48 md:pb-24  md:pl-5  ">
                <div className=" flex-col lg: lg:justify-between lg:items-center" >
                    
                    <div  >
                        <div>
                            <h1 className=" text-center text-xl  md:text-left md:text-5xl font-bold  text-white dark:text-black">The Largest Car Marketplace</h1>
                            
                        </div>
                    
                    <p className=" pl-8 md:pl-0 py-2 md:py-4 text-white dark:text-black md:text-xl  ">Car dealerships may sell new cars from one or several manufacturers,<br></br> as well as used cars.</p>
                    
                    </div>
                </div>
                </div>



            </div>
            
        </div>
    );
};

export default Banner;