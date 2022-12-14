import React from 'react';
import Button from './Button';

const GetInTouch = () => {
  return (
    <section className="min-h-[80vh]">
      <div className="mt-16">
        <h2 className="text-[30px] text-center text-[#0029FF] font-bold md:text-[40px]">
          Get in touch
        </h2>
      </div>
      <h3 className="font-bold text-center text-[#111] text-[18px]">
        Reach out for any questions
      </h3>
      <form className="mt-8 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center md:flex-row">
          <div className="m-2">
            <input
              className="bg-[#F1F3FA] py-4 px-[32px] rounded-[10px]"
              type="text"
              name="name"
              placeholder="Name"
            />
          </div>
          <div className="m-2">
            <input
              className="bg-[#F1F3FA] py-4 px-[32px] rounded-[10px]"
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
        </div>
        <div>
          <textarea
            className="bg-[#F1F3FA] p-4 rounded-[10px]"
            name="help"
            rows="8"
            cols="55"
            placeholder="How can we help you?"
          ></textarea>
        </div>
        <div className="my-8">
          <Button text="Send" />
        </div>
      </form>
    </section>
  );
};

export default GetInTouch;
