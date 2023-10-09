/* eslint-disable react/prop-types */
import Faq from "../FAQ/Faq";
import SponsorImg from "./SponsorImg";

const Sponsor = ({data}) => {
  return (
    <div className=" bg-blue-950 ">
      <div>
        <div className="flex justify-center items-center mt-16 p-5">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mt-8">
            The Sponsors Of Our Events
          </h1>
        </div>
        <div className="flex justify-center items-center mt-5">
          <hr className="w-[280px]  border-4 border-blue-600 rounded" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:gap-5 w-full md:w-[700px] lg:w-[1000px] mx-auto mt-[30px] md:mt-[70px] p-10 ">
            {
                data?.map(data => <SponsorImg key={data.ServiceID} data={data}></SponsorImg>)
            }
        </div>
        <Faq></Faq>
    </div>
  );
};

export default Sponsor;
