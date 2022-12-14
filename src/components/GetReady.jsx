import React from 'react';
import Button from './Button';

const GetReady = () => {
  return (
    <section className="bg-[#F1F3FA]">
      <div className="p-8 flex justify-center items-center flex-wrap">
        <h2 className="m-[8px] font-bold text-center text-[#111] text-[18px] md:mr-8">
          Ready to get started?
        </h2>
        <Button text="Start for free" />
        <div className="m-2 md:ml-[8px]">
          <span className="text-[12px]">
            No credit card & installtion required
          </span>
        </div>
      </div>
    </section>
  );
};

export default GetReady;
