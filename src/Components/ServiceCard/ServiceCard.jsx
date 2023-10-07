import { RiMoneyDollarBoxFill } from "react-icons/ri";

/* eslint-disable react/prop-types */
const ServiceCard = ({ data }) => {
  //destructure the data object
  const { ServiceID, ServiceName, Image, Price, Description } = data || {};
  return (
    <div className=" my-[20px]">
      <div className="card w-96 h-[550px] bg-base-100 shadow-xl shadow-indigo-500/50">
        <figure>
          <img className="w-full h-[230px]" src={Image} alt="Shoes" />
        </figure>
        <div className="p-5">
          <h2 className=" font-bold text-2xl mb-3">{ServiceName}</h2>
          <p>{Description}</p>
          <h2 className="flex items-center font-bold mt-3">
            <RiMoneyDollarBoxFill className="text-3xl mr-2 text-blue-700"></RiMoneyDollarBoxFill>
            {Price}
          </h2>
        </div>
       
          <button className="btn btn-outline btn-primary rounded-3xl w-[300px] mx-auto mt-3 font-bold">Service Detail</button>
  
      </div>
    </div>
  );
};

export default ServiceCard;
