import React from 'react';
import Button from './Button';
import HeroImage from '../assets/HeroImage.png';

const Hero = () => {
  return (
    <section id="home" className="max-w-6xl m-auto px-4 py-2">
      <div className="flex flex-col justify-center items-center flex-wrap md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <h1 className="mb-[16px] font-bold text-[#0029FF] text-[32px] md:max-w-[400px] leading-[40px] md:text-[40px]">
            Automate Manual Data Entry
          </h1>
          <h2 className="mb-[8px] font-bold text-[#111] text-[18px] max-w-[800px]">
            with the help of Artificial Intelligence
          </h2>
          <p className="text-center text-[#111] text-[16px] md:max-w-[400px] md:text-left">
            Extract data from any document type scanned or unscanned. Min. 10X
            faster compared to manual labor work.
          </p>
          <div className="flex flex-col justify-center items-center my-[32px] md:flex-row md:justify-start">
            <Button text="Start for free" />
            <span className="p-2 text-[12px] md:ml-[8px]">
              No credit card & installtion required
            </span>
          </div>
        </div>
        <div className="">
          <img src={HeroImage} alt="Hero Image" width={600} height={700} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
