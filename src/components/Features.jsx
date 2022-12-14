import React from 'react';
import CheckMark from './CheckMark';

const Features = () => {
  return (
    <section className="max-w-7xl m-auto p-2">
      <div className="mt-8 flex items-center">
        <article className="m-8 p-8 bg-[#F1F3FA] flex justify-between items-center max-w-[900px] flex-wrap">
          {/* Box 1 */}
          <div className="m-4 p-2 bg-white flex items-center rounded-[10px]">
            <div className="p-4">
              <CheckMark />
            </div>
            <div className="">
              <h4 className="text-[16px] font-bold">GDPR Compliant</h4>
              <p className="text-[12px] max-w-[300px] leading-6">
                Protects your data in compliance with the European Union GDPR.
                Your Data will only be saved temporarly.
              </p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="m-4 p-2 bg-white flex justify-between items-center rounded-[10px]">
            <div className="p-2">
              <CheckMark />
            </div>
            <div className="p-2">
              <h4 className="text-[16px] font-bold">Fast & Time efficient</h4>
              <p className="text-[12px] max-w-[300px] leading-6">
                Helps to increase work efficency by a mimum of 10X and gives the
                freedom to focus on core business
              </p>
            </div>
          </div>

          {/* Box 3 */}
          <div className="m-4 p-2 bg-white flex justify-between items-center rounded-[10px]">
            <div className="p-2">
              <CheckMark />
            </div>
            <div className="p-2">
              <h4 className="text-[16px] font-bold">Fast & Time efficient</h4>
              <p className="text-[12px] max-w-[300px] leading-6">
                Helps to increase work efficency by a mimum of 10X and gives the
                freedom to focus on core business
              </p>
            </div>
          </div>

          {/* Box 4 */}
          <div className="m-4 p-2 bg-white flex justify-between items-center rounded-[10px]">
            <div className="p-2">
              <CheckMark />
            </div>
            <div className="p-2">
              <h4 className="text-[16px] font-bold">Fast & Time efficient</h4>
              <p className="text-[12px] max-w-[300px] leading-6">
                Helps to increase work efficency by a mimum of 10X and gives the
                freedom to focus on core business
              </p>
            </div>
          </div>

          {/* Box 5 */}
          <div className="m-4 p-2 bg-white flex justify-between items-center rounded-[10px]">
            <div className="p-2">
              <CheckMark />
            </div>
            <div className="p-2">
              <h4 className="text-[16px] font-bold">Fast & Time efficient</h4>
              <p className="text-[12px] max-w-[300px] leading-6">
                Helps to increase work efficency by a mimum of 10X and gives the
                freedom to focus on core business
              </p>
            </div>
          </div>

          {/* Box 6 */}
          <div className="m-4 p-2 bg-white flex justify-between items-center rounded-[10px]">
            <div className="p-2">
              <CheckMark />
            </div>
            <div className="p-2">
              <h4 className="text-[16px] font-bold">Fast & Time efficient</h4>
              <p className="text-[12px] max-w-[300px] leading-6">
                Helps to increase work efficency by a mimum of 10X and gives the
                freedom to focus on core business
              </p>
            </div>
          </div>
        </article>
        <div className="px-8">
          <h2 className="text-[30px] text-[#0029FF] font-bold md:text-[40px]">
            Features
          </h2>
          <h3 className="font-bold text-[#111] text-[18px]">of arithmo</h3>
        </div>
      </div>
    </section>
  );
};

export default Features;
