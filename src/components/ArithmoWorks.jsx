import React from 'react';
import ArithmoWorksImage from '../assets/ArithmoWorksImage.png';
import ArithmoProcessImage from '../assets/ArithmoProcess.png';
import ArithmoProcessGroup from '../assets/ArithmoProcessGroup.png';

const ArithmoWorks = () => {
  return (
    <section id="howitworks" className="px-4 py-2">
      <div className="mt-24 pb-16">
        <h2 className="text-[30px] text-center text-[#0029FF] font-bold md:text-[40px]">
          How arithmo works
        </h2>
        <p className="max-w-[800px] m-auto p-2 text-center">
          Arithmo identifies and extracts data from documents using cutting edge
          AI. You decide which data you need in the validation/selection step.
          Our advanced algorithms will take care of the rest.
        </p>
        <div className="mt-8 max-w-7xl ml-auto flex flex-col justify-center items-center md:flex-row">
          {/* Left Side */}
          <div className="my-8 p-4">
            <img
              src={ArithmoWorksImage}
              alt="How arithmo works image"
              width={800}
              height={700}
            />
          </div>

          {/* Right Side */}
          <div className="flex bg-[#F1F3FA] min-w-[400px] p-8 md:pr-[300px] rounded-md">
            <div className="flex items-center justify-center md:justify-start">
              <div className="">
                <img
                  src={ArithmoProcessGroup}
                  alt="Arithmo Process Group"
                  width={110}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="my-4 bg-white rounded-[10px] p-4 max-w-[200px]">
                  <p className="text-[10px]">
                    Upload Documents in A4 and PDF, PNG or JPEG/JPG Format
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="p-2">
                    <img
                      src={ArithmoProcessImage}
                      alt="Arithmo Process"
                      width={150}
                      height={300}
                    />
                  </div>
                  <div>
                    <p className="p-2 text-[#111] text-[26px] font-medium leading-8">
                      arithmo
                      <br />
                      processes
                    </p>
                  </div>
                </div>
                <div className="my-4 bg-white rounded-[10px] p-4 max-w-[200px]">
                  <p className="text-[10px]">
                    Validate and/or adjust the selections made by the AI{' '}
                  </p>
                </div>
                <div className="my-4 bg-white rounded-[10px] p-4 max-w-[200px]">
                  <p className="text-[10px]">
                    Download data in Excel, CSV or txt data format
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArithmoWorks;
