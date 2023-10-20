import Banner from "../Components/Banner";
import BrandCards from "../Components/BrandCards";
import Reviewusers from "../Components/Reviewusers";
import Service from "../Components/Service";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BrandCards></BrandCards>
            <Service></Service>
            <Reviewusers></Reviewusers>
        </div>
    );
};

export default Home;