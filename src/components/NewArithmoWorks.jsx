import React from 'react';
import ArithmoWorksImage from '../assets/ArithmoWorksImage.png';
import ArithmoProcessImage from '../assets/ArithmoProcess.png';
import Group1 from '../assets/1-group-icon.png';
import Group2 from '../assets/2-group-icon.png';
import Group3 from '../assets/3-group-icon.png';

const NewArithmoWorks = () => {
  return (
    <section className="mt-40 min-h-[90vh]">
      <div>
        <h2 className="text-[30px] text-center text-[#0029FF] font-bold md:text-[40px]">
          How arithmo works
        </h2>
        <p className="max-w-[820px] font-medium m-auto p-2 text-center md:text-left">
          Arithmo identifies and extracts data from documents using cutting edge
          AI. You decide which data you need in the validation/selection step.
          Our advanced algorithms will take care of the rest.
        </p>
      </div>
      <div className="max-w-8xl ml-auto">
        <article className="my-8 flex justify-around flex-col md:flex-row">
          {/* Left Side */}
          <div>
            <img src={ArithmoWorksImage} alt="How Arithmo Works" width={1000} />
          </div>
          {/* Right Side */}
          <div className="bg-[#F1F3FA] lg:pr-[300px] p-8">
            <div className="flex justify-center items-center">
              <div>
                {/* Box 1 */}
                <div className="bg-white rounded-[10px] my-4 p-4 max-w-[400px]">
                  <div className="flex items-center">
                    <div className="pr-4">
                      {/* <img src={Group1} width={50} /> */}
                      <p className="text-[12px] font-medium pt-[4px] text-center w-[30px] h-[30px] border-2 rounded-[50%] border-[#F1F3FA]">
                        1
                      </p>
                    </div>
                    <p className="pr-4 text-[12px] font-medium leading-7 max-w-[300px]">
                      Upload Documents in A4 and PDF, PNG or JPEG/JPG Format
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center md:justify-end">
                  <img
                    src={ArithmoProcessImage}
                    alt="Arithmo Process"
                    width={80}
                  />
                  <p className="font-medium p-2 text-[#111] text-[20px] leading-8">
                    arithmo
                    <br />
                    processes
                  </p>
                </div>

                {/* Box 2 */}
                <div className="bg-white rounded-[10px] my-4 p-4 max-w-[400px]">
                  <div className="flex items-center">
                    <div className="pr-4">
                      {/* <img src={Group2} width={30} /> */}
                      <p className="text-[12px] font-medium pt-[4px] text-center w-[30px] h-[30px] border-2 rounded-[50%] border-[#F1F3FA]">
                        2
                      </p>
                    </div>
                    <p className="text-[12px] font-medium leading-7 max-w-[240px]">
                      Validate and/or adjust the selections made by the AI
                    </p>
                  </div>
                </div>

                {/* Box 3 */}
                <div className="bg-white rounded-[10px] my-4 p-4 max-w-[400px]">
                  <div className="flex items-center">
                    <div className="pr-4">
                      {/* <img src={Group3} width={40} /> */}
                      <p className="text-[12px] font-medium pt-[4px] text-center w-[30px] h-[30px] border-2 rounded-[50%] border-[#F1F3FA]">
                        3
                      </p>
                    </div>
                    <p className="text-[12px] font-medium leading-7 max-w-[242px]">
                      Download data in Excel, CSV or txt data format
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default NewArithmoWorks;
