/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const EventVenue = ({ serviceCard }) => {
    const { ServiceID, ServiceName, Image, Price, Description, venuePic } =
    serviceCard || {};
    return (
        <div className="h-[900px] md:h-[1100px] lg:h-[900px] flex flex-col md:flex-col lg:flex-row justify-center items-center md:w-[700px] lg:w-[1400px] w-[370px] mx-auto gap-12 mb-[1px]">
            <div>
                <img className="w-[350px] h-[350px] md:w-[550px] md:h-[550px] rounded-3xl mt-12  lg:mt-0" src={venuePic} alt="" />
            </div>
            <div className="w-[400px] md:w-[500px] text-white md:text-left text-center">
                <hr className="w-[180px]  border-4 rounded md:ml-0 ml-[110px]" />
                <h1 className="text-xl font-bold mt-5 mb-3">Conference Hall</h1>
                <h1 className="text-5xl font-bold mb-4">{ServiceName}</h1>
                <p className="text-lg font-semibold text-gray-300">{Description}</p>
            </div>
        </div>
    );
};

export default EventVenue;