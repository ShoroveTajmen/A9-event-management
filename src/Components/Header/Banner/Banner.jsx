import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div className="relative w-full h-[700px]">
        {/* background image */}
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-[url('https://i.ibb.co/Qk6nj8H/tech-bg.jpg')] bg-cover bg-center bg-no-repeat h-[750px] md:h-[700px]"></div>
        {/* white overlay */}
        <div className="absolute top-0 right-0 md:right-0 lg:right-[300px] bottom-0 left-0 bg-black opacity-40 "></div>
        <div
          className="relative ml-[19px] md:ml-[100px] lg:ml-[40px]"
          data-aos="zoom-in"
        >
          <div className="absolute mt-[180px] md:mt-[140px]  lg:mt-[170px] ">
            <h1 className=" text-white text-2xl md:text-2xl lg:text-2xl font-semibold mb-[10px] md:mb-[10px]">
              Tech and Gaming Events 2023
            </h1>{" "}
            <h1 className=" text-white text-5xl md:text-5xl lg:text-7xl font-bold mb-[10px] md:mb-[20px]">
              Elevating the Worldwide <br /> Tech Landscape
            </h1>
            <p className=" text-gray-300 text-sm md:text-xl lg:text-lg font-semibold mb-[10px] md:mb-[20px]">
              Tech conferences gather tech professionals to share insights and
              innovations, fostering industry <br /> knowledge and
              collaboration. Tech expos showcase the latest products and
              innovations, <br /> connecting companies with potential customers
              and partners.
            </p>
            <br />
            <Link to='/ticket'>
              {" "}
              <button className="btn bg-white w-[200PX] h-[70px] text-blue-600 font-bold text-xl">
                GET TICKET
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
