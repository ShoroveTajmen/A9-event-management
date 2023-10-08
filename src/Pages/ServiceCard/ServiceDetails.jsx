/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const ServiceDetails = ({ serviceCard }) => {
  // console.log(serviceCard);
  const { ServiceID, ServiceName, Image, Price, Description } =
    serviceCard || {};

  return (
    <div>
      <div className="relative w-full h-[400px]">
        {/* background image */}
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-[url('https://i.ibb.co/BNpwrWG/event.jpg')] bg-cover bg-center bg-no-repeat h-[400px] "></div>
        {/* white overlay */}
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-black opacity-60 "></div>
        <div className="relative">
            <h1 className="absolute text-white top-[150px] left-[550px] font-bold text-5xl">VENUE OF THE EVENT</h1>
            <h1 className="text-white absolute top-[210px] left-[690px]">InnovateSpace Event Arena</h1>
        </div>
      </div>
      
    </div>
  );
};

export default ServiceDetails;
