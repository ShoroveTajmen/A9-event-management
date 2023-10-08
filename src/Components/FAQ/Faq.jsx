const Faq = () => {
  return (
    <div className="p-5">
      <div className=" mt-16 p-5">
        <h1 className="text-white flex justify-center items-center font-bold">FAQs</h1>
        <h1 className="text-5xl font-bold text-blue-700 flex justify-center items-center">
          Frequently asked questions
        </h1>
        <div className="flex justify-center items-center mt-5 mb-12">
          <hr className="w-[280px]  border-4 rounded" />
        </div>
      </div>
      <div className="text-white w-[900px] mx-auto">
        <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" checked="checked" />
            <div className="collapse-title text-xl font-medium bg-blue-700">
            What services do your rate plans include?
            </div>
            <div className="collapse-content">
              <p>Rate plans for tech conferences typically include access to conference sessions, keynote presentations, workshops, networking events, and some may include meals or refreshments. Specific inclusions can vary depending on the conference organizer and the pricing tier chosen by attendees.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium bg-blue-700">
            Do I need to bring a laptop?
            </div>
            <div className="collapse-content">
              <p>Whether you need to bring a laptop to a tech conference depends on your preferences and goals. It can be beneficial for taking notes, accessing digital materials, and networking, but its not always mandatory.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium bg-blue-700">
            What are my payment options - credit card and/or invoicing?
            </div>
            <div className="collapse-content">
              <p>Your payment options include using a credit card to make an immediate payment or selecting invoicing, which allows you to receive a bill and pay at a later date, typically within a specified time frame, often used for business transactions to manage cash flow.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
