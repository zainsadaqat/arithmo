import React from 'react';
import AFontImage from '../assets/AFontImage.png';
import TableImage from '../assets/TableImage.png';

const Structure = () => {
  return (
    <section className="max-w-6xl m-auto p-4">
      <div className="min-h-[40vh] flex flex-col justify-end">
        <div className="flex flex-col justify-evenly items-center flex-wrap md:flex-row">
          <div>
            <h2 className="max-w-[350px] leading-10 text-center text-[30px] text-[#0029FF] font-bold md:text-[40px] md:text-left">
              Structure any Document
            </h2>
            <h3 className="mb-[8px] font-bold text-center text-[#111] text-[18px] max-w-[800px] md:text-left">
              scanned or unscanned
            </h3>
          </div>
          <div>
            <img src={AFontImage} alt="Font" width={200} height={200} />
          </div>
          <div>
            <span className="font-bold text-[#2E2E48] text-[40px] text-center">
              and/or
            </span>
          </div>
          <div>
            <img src={TableImage} alt="Table" width={150} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Structure;
