import { FaFacebook, FaTwitter, FaInstagramSquare } from "react-icons/fa";
const Speakers = () => {
  return (
    <div className="bg-blue-950">
      <div className="relative w-full h-[500px]">
        {/* background image */}
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-[url('https://i.ibb.co/YkwWPxf/HRTechx.webp')] bg-cover bg-center bg-no-repeat h-[500px] "></div>
        {/* white overlay */}
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-black opacity-60 "></div>
        <div className="relative">
          <h1 className="absolute text-white top-[190px] left-[520px] font-bold text-5xl">
            OUR HONORABLE SPEAKERS
          </h1>
          <h1 className="text-white absolute top-[250px] left-[700px]">
            InnovateSpace Event Arena
          </h1>
        </div>
      </div>

      <div>
        <div className=" mt-16 p-5">
          <h1 className="text-white font-bold flex justify-center items-center text-xl">
            Our Speakers
          </h1>
          <h1 className="flex justify-center items-center text-5xl font-bold text-blue-700">
            Get to Know Distinguished Speakers
          </h1>
        </div>
        <div className="flex justify-center items-center mt-5">
          <hr className="w-[200px]  border-4 rounded" />
        </div>
      </div>

      <div className="grid grid-cols-3 w-[800px] mx-auto mt-[100px]">
        <div className="text-white">
          <img className="w-[250px] h-[240px] rounded-3xl" src="https://i.ibb.co/C9ZFhyx/6.jpg" alt="" />
          <div className="text-center  my-4">
            <h1 className="text-2xl font-bold">Jane Smith</h1>
            <h1 className="mt-3 mb-3">Chief Technology Officer</h1>
            <div className="flex gap-3 ml-[100px]">
              {" "}
              <h1>
                <FaFacebook></FaFacebook>
              </h1>
              <h1>
                <FaTwitter></FaTwitter>
              </h1>
              <h1>
                <FaInstagramSquare></FaInstagramSquare>
              </h1>
            </div>
          </div>
        </div>
        <div className="text-white">
          <img className="w-[250px] h-[240px] rounded-3xl" src="https://i.ibb.co/CW0kfpS/1.jpg" alt="" />
          <div className="text-center  my-4">
            <h1 className="text-2xl font-bold">Emily Johnson</h1>
            <h1 className="mt-3 mb-3">Gaming Analyst and Consultant</h1>
            <div className="flex gap-3 ml-[100px]">
              {" "}
              <h1>
                <FaFacebook></FaFacebook>
              </h1>
              <h1>
                <FaTwitter></FaTwitter>
              </h1>
              <h1>
                <FaInstagramSquare></FaInstagramSquare>
              </h1>
            </div>
          </div>
        </div>
        <div className="text-white">
          <img className="w-[250px] h-[240px] rounded-3xl" src="https://i.ibb.co/RCRp98T/5.jpg" alt="" />
          <div className="text-center  my-4">
            <h1 className="text-2xl font-bold">Jane Smith</h1>
            <h1 className="mt-3 mb-3">Chief Technology Officer (CTO)</h1>
            <div className="flex gap-3 ml-[100px]">
              {" "}
              <h1>
                <FaFacebook></FaFacebook>
              </h1>
              <h1>
                <FaTwitter></FaTwitter>
              </h1>
              <h1>
                <FaInstagramSquare></FaInstagramSquare>
              </h1>
            </div>
          </div>
        </div>
 
      </div>
    </div>
  );
};

export default Speakers;
