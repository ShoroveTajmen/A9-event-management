/* eslint-disable react/prop-types */
import ServiceCard from "../ServiceCard/ServiceCard";


const AllData = ({data}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:gap-5 w-full md:w-[700px] lg:w-[1300px] mx-auto mt-[30px] md:mt-[70px]">
            {
                data?.map(data => <ServiceCard key={data.ServiceID} data={data}></ServiceCard>)
            }
        </div>
    );
};

export default AllData;