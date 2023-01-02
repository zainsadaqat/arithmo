import React from 'react';
import GraphUp from '../assets/graphUp.png';
import GraphDown from '../assets/graphDown.png';

const Stats = () => {
  return (
    <section className="flex flex-col justify-end min-h-[70vh] ">
      <h2 className="text-[30px] text-center text-[#0029FF] font-bold md:text-[40px]">
        Save Time & Create Value
      </h2>
      <h3 className="text-center font-bold text-[#111] text-[18px]">
        Focus on the important parts of your business
      </h3>
      <div className="flex flex-col justify-center md:flex-row">
        <div className="flex justify-center items-center border-[#f2f3fb] border-[6px] rounded-lg px-4 m-4">
          <span className="px-2 text-[14px] font-bold">MIN</span>
          <span className="px-2 font-bold text-[36px] text-[#0029FF]">
            10X*
          </span>
          <span className="px-2 text-[14px] font-bold">FASTER</span>
          <div className="p-2">
            <img src={GraphUp} alt="Graph Up Image" width={80} height={80} />
          </div>
        </div>
        <div className="flex justify-center items-center border-[#f2f3fb] border-[6px] rounded-lg px-4 m-4">
          <div className="p-4">
            <img src={GraphDown} alt="Graph Up Image" width={80} height={80} />
          </div>
          <span className="px-2 text-[14px] font-bold">MIN</span>
          <span className="px-2 font-bold text-[36px] text-[#0029FF]">
            70X*
          </span>
          <span className="px-2 text-[14px] font-bold">CHEAPER</span>
        </div>
      </div>
      <p className="text-[14px] text-center pb-8 uppercase">
        *compared to manual labor work
      </p>
    </section>
  );
};

export default Stats;
