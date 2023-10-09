import { AiFillPhone } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="bg-blue-950 h-[900px] md:h-[600px] lg:h-[500px]">
      {/* footer container div */}
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 ml-[90px] md:ml-[40px] lg:ml-[150px] text-white pt-[100px] ">
        {/* 1st part */}
        <div className="col-span-2 w-[300px] md:w-[200px] lg:w-[300px]">
          <h1 className="text-3xl font-bold mb-3 md:mb-7">Tech/Cons</h1>
          <p className="md:mb-0 mb-12">
            A tech conference is a gathering of industry professionals and
            experts to explore the latest trends, innovations, and insights in
            technology and related fields, fostering networking and knowledge
            exchange. {" "}
          </p>
        </div>
        {/* 2nd part */}
        <div className="col-span-2 w-[300px] md:w-[200px] lg:w-[300px]">
          <h1 className="text-3xl font-bold mb-3 md:mb-7">Our Address</h1>
          <p >
            49 West 32nd Street, Dhaka, 4.9 mi / 7.9 km from Downtown, Bangladesh
          </p>
          <h1 className="mt-5">Monday — Friday: 8AM — 5PM</h1>
          <h1 className="md:mb-0 mb-12">Saturday: 10AM — 3PM</h1>
        </div>
        {/* 3rd part */}
        <div className="col-span-2 w-[300px] md:w-[200px] lg:w-[300px]">
          <h1 className="text-3xl font-bold mb-3 md:mb-7">Our Contact</h1>
          <p>If you have any question please contact us noreply@gmail.com</p>
          <h1 className="mt-5 flex items-center"><AiFillPhone className="mr-4 text-3xl text-blue-500"></AiFillPhone> +008247775799</h1>
          <h1 className="flex items-center"><BiLogoGmail className="mr-4 text-3xl text-blue-500"></BiLogoGmail> techcons@gmail.com </h1>
        </div>    
      </div>
      <h1 className="mt-[150px] text-white text-center">&copy; 2023 Tech/Cons & Gaming Events. All Rights Reserved.</h1>
    </div>
  );
};

export default Footer;
