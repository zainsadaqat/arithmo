import React from 'react';
import AFontImage from '../assets/AFontImage.png';
import TableImage from '../assets/TableImage.png';

const Structure = () => {
  return (
    <section className="max-w-6xl m-auto px-4 py-2">
      <div className="min-h-[50vh] flex flex-col justify-end">
        <div className="flex justify-evenly items-center flex-wrap">
          <div>
            <h2 className="max-w-[350px] leading-10 text-center text-[30px] text-[#0029FF] font-bold md:text-[40px] md:text-left">
              Structure any Document
            </h2>
            <h3 className="mb-[8px] font-bold text-center text-[#111] text-[18px] max-w-[800px] md:text-left">
              scanned or unscanned
            </h3>
          </div>
          <div>
            <img src={AFontImage} alt="Font Image" width={200} height={200} />
          </div>
          <div>
            <span className="font-bold text-[#2E2E48] text-[40px] text-center">
              and/or
            </span>
          </div>
          <div>
            <img src={TableImage} alt="Table Image" width={200} height={200} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Structure;
