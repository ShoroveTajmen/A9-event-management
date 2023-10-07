

const EventVenue = ({ serviceCard }) => {
    const { ServiceID, ServiceName, Image, Price, Description, venuePic } =
    serviceCard || {};
    return (
        <div className="h-[700px] flex justify-center items-center w-[1400px] mx-auto gap-12 ">
            <div>
                <img className="w-[550px] h-[550px] rounded-3xl" src={venuePic} alt="" />
            </div>
            <div className="w-[500px] text-white">
                <hr className="w-[180px]  border-4 rounded" />
                <h1 className="text-xl font-bold mt-5 mb-3">Conference Hall</h1>
                <h1 className="text-5xl font-bold mb-4">{ServiceName}</h1>
                <p className="text-lg font-semibold text-gray-300">{Description}</p>
            </div>
        </div>
    );
};

export default EventVenue;