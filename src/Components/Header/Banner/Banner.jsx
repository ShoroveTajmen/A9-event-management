const Banner = () => {
  return (
    <div>
      <div className="relative w-full h-[700px]">
        {/* background image */}
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-[url('https://i.ibb.co/Qk6nj8H/tech-bg.jpg')] bg-cover bg-center bg-no-repeat h-[700px] "></div>
        {/* white overlay */}
        <div className="absolute top-0 right-[300px] bottom-0 left-0 bg-white opacity-20 "></div>
        <div className="relative ml-[19px] md:ml-[160px] lg:ml-[40px]">
          <div className="absolute mt-[220px]  md:mt-[170px]">
            <h1 className=" text-white text-2xl md:text-3xl lg:text-2xl font-semibold mb-[10px] md:mb-[10px]">
              Tech Conference 2023
            </h1>{" "}
            <h1 className=" text-white text-2xl md:text-3xl lg:text-7xl font-bold mb-[10px] md:mb-[20px]">Elevating the Worldwide <br /> Tech Landscape</h1>
            <p className=" text-white text-2xl md:text-3xl lg:text-sm font-semibold mb-[10px] md:mb-[20px]">Tech conferences gather tech professionals to share insights and innovations, fostering industry <br /> knowledge and collaboration. Tech expos showcase the latest products and innovations, <br /> connecting companies with potential customers and partners.</p>
            <br />
            <button className="btn bg-white w-[200PX] h-[70px] text-blue-600 font-bold text-xl">GET TICKET</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
