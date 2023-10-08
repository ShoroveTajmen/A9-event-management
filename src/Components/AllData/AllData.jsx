/* eslint-disable react/prop-types */
import ServiceCards from "../ServiceCards/ServiceCards";
import AOS from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css';


const AllData = ({data}) => {
    
        useEffect(()=>{
          AOS.init({duration: 1000});
      },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:gap-5 w-full md:w-[700px] lg:w-[1300px] mx-auto mt-[30px] md:mt-[70px]" data-aos = "zoom-in">
            {
                data?.map(data => <ServiceCards key={data.ServiceID} data={data}></ServiceCards>)
            }
        </div>
    );
};

export default AllData;