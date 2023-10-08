/* eslint-disable react/prop-types */
import SponsorImg from "./SponsorImg";

const Sponsor = ({data}) => {
  return (
    <div className=" bg-blue-950 ">
      <div>
        <div className="flex justify-center items-center mt-16 p-5">
          <h1 className="text-5xl font-bold text-blue-700">
            The Sponsors Of Our Events
          </h1>
        </div>
        <div className="flex justify-center items-center mt-5">
          <hr className="w-[280px]  border-4 rounded" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:gap-5 w-full md:w-[700px] lg:w-[1000px] mx-auto mt-[30px] md:mt-[70px] p-10">
            {
                data?.map(data => <SponsorImg key={data.ServiceID} data={data}></SponsorImg>)
            }
        </div>
    </div>
  );
};

export default Sponsor;
