import { FaWpforms } from "react-icons/fa";
import { RiTicket2Fill, RiTicket2Line } from "react-icons/ri";
const BuyTicket = () => {
  return (
    <div className="bg-blue-950 h-[1700px] md:h-[1200px] mb-[1px]">
      <div className="relative w-full h-[400px]">
        {/* background image */}
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-[url('https://i.ibb.co/QrTcD11/TICKET.jpg')] bg-cover bg-center bg-no-repeat h-[400px] "></div>
        {/* white overlay */}
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-black opacity-60 "></div>
        <div className="relative">
          <h1 className="absolute text-white md:top-[150px] top-[170px] md:left-[170px] lg:left-[550px] font-bold md:text-4xl lg:text-5xl text-4xl ml-2 md:ml-0">
            BUY YOUR EVENT TICKET
          </h1>
          <h1 className="text-white absolute top-[230px] md:top-[210px] md:left-[280px] lg:left-[690px] left-[115px]">InnovateSpace Event Arena</h1>
        </div>
      </div>

      <div>
        <div className="flex justify-center items-center mt-16 p-5">
          <h1 className="text-5xl font-bold text-white">Get The Ticket</h1>
        </div>
        <div className="flex justify-center items-center mt-5">
          <hr className="w-[200px]  border-4 border-blue-700 rounded" />
        </div>
      </div>

      <div className="grid md:grid-cols-6 grid-cols-1 gap-5 text-white w-[300px] md:w-[700px] lg:w-[900px] mx-auto text-center mt-10">
        <div className="col-span-2 mb-12 md:mb-0">
          <h1>
            <FaWpforms className="w-[50px] h-[50px] text-blue-500 ml-[120px] md:ml-[90px] lg:ml-[110px]"></FaWpforms>
          </h1>
          <h1 className="text-2xl font-bold mt-5 mb-3">Submit The Form</h1>
          <p className="text-gray-300">
            To complete the form submission, press the Submit button provided,
            typically found at the end of the form. Verify the information for
            accuracy before submitting.
          </p>
        </div>
        <div className="col-span-2 mb-12 md:mb-0">
          <h1>
            <RiTicket2Fill className="w-[50px] h-[50px] text-blue-500 ml-[125px] md:ml-[90px] lg:ml-[110px]"></RiTicket2Fill>
          </h1>
          <h1 className="text-2xl font-bold mt-5 mb-3">Payment</h1>
          <p className="text-gray-300">
          Visit our websites payment page, choose your preferred payment method, provide payment details, including the amount, and confirm to complete the transaction.
          </p>
        </div>
        <div className="col-span-2 mb-12 md:mb-0">
          <h1>
            <RiTicket2Line className="w-[50px] h-[50px] text-blue-500 ml-[120px] md:ml-[90px] lg:ml-[110px]"></RiTicket2Line>
          </h1>
          <h1 className="text-2xl font-bold mt-5 mb-3">Get Your Ticket</h1>
          <p className="text-gray-300">
          To get your ticket, visit our event website and click on the Buy Tickets button. Follow the prompts to select your ticket type, provide necessary information, and complete the payment process.
          </p>
        </div>
      </div>
      <div className="ml-[135px] md:ml-[300px] lg:ml-[700px] mt-5 ">
        <button className="btn bg-blue-700 text-white font-bold">GET TICKET NOW!</button>
      </div>
    </div>
  );
};

export default BuyTicket;
