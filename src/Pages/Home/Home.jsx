import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import AllData from "../../Components/AllData/AllData";


const Home = () => {
    const data = useLoaderData();
    // console.log(data);
    return (
        <div className="">
            
            <Banner></Banner>
            <div className="flex justify-center items-center mt-[100px]">
                <h1 className="text-blue-700 font-bold text-5xl">Our Services</h1>
            </div>
            <AllData data={data}></AllData>
        </div>
    );
};

export default Home;