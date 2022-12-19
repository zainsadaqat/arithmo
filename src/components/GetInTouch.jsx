import React from 'react';
import Button from './Button';

const GetInTouch = () => {
  return (
    <section id="contact" className="min-h-[100vh]">
      <div className="mt-24">
        <h2 className="text-[30px] text-center text-[#0029FF] font-bold md:text-[40px]">
          Get in touch
        </h2>
      </div>
      <h3 className="font-bold text-center text-[#111] text-[18px]">
        Reach out for any questions
      </h3>
      <form className="mt-8 max-w-3xl mx-auto">
        <div className="flex flex-col items-center justify-center">
          {/* Name and Email Wrapper Begins */}
          <div className="flex flex-col md:flex-row">
            {/* Name Wrapper Begins */}
            <div className="m-1">
              <input
                className="bg-[#F1F3FA] md:w-[350px] p-4 rounded-[10px]"
                type="text"
                name="name"
                placeholder="Name"
              />
            </div>
            {/* Name Wrapper Ends */}

            {/* Email Wrapper Begins */}
            <div className="m-1 flex">
              <input
                className="bg-[#F1F3FA] md:w-[350px] p-4 rounded-[10px]"
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            {/* Email Wrapper Ends */}
          </div>
          {/* Name and Email Wrapper Ends */}

          <div className="m-1">
            <textarea
              className="bg-[#F1F3FA] md:w-[720px] p-4 rounded-[10px]"
              name="help"
              rows="8"
              placeholder="How can we help you?"
            ></textarea>
          </div>
        </div>
        <div className="m-4 flex justify-center">
          <Button text="Send" />
        </div>
      </form>
    </section>
  );
};

export default GetInTouch;
