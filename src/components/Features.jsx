import React from 'react';
import CheckMark from './CheckMark';

const Features = () => {
  return (
    <section id="features" className="max-w-6xl mr-auto">
      <div className="my-16 flex justify-center items-center flex-wrap-reverse md:flex-nowrap">
        <article className="bg-[#F1F3FA] p-4 flex justify-center md:justify-end items-center max-w-[1100px] flex-wrap">
          {/* Box 1 */}
          <div className="m-4 py-4 bg-white flex items-center rounded-[10px]">
            <div className="p-4">
              <CheckMark />
            </div>
            <div className="p-2">
              <h4 className="text-[12px] font-bold">GDPR Compliant</h4>
              <p className="text-[12px] max-w-[230px] leading-6">
                Protects your data in compliance with the European Union GDPR.
                Your Data will only be saved temporarly.
              </p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="m-4 py-4 bg-white flex items-center rounded-[10px]">
            <div className="p-4">
              <CheckMark />
            </div>
            <div className="p-2">
              <h4 className="text-[12px] font-bold">Fast & Time efficient</h4>
              <p className="text-[12px] max-w-[230px] leading-6">
                Helps to increase work efficency by a mimum of 10X and gives the
                freedom to focus on core business
              </p>
            </div>
          </div>

          {/* Box 3 */}
          <div className="m-4 py-4 bg-white flex items-center rounded-[10px]">
            <div className="p-4">
              <CheckMark />
            </div>
            <div className="p-2">
              <h4 className="text-[12px] font-bold">Easy to use</h4>
              <p className="text-[12px] max-w-[230px] leading-6">
                Designed to be used by everybody. Requires no technical
                knowledge. No coding. If you need help just watch the
                explainatory video here
              </p>
            </div>
          </div>

          {/* Box 4 */}
          <div className="m-4 py-4 bg-white flex items-center rounded-[10px]">
            <div className="p-4">
              <CheckMark />
            </div>
            <div className="p-2">
              <h4 className="text-[12px] font-bold">
                Data Selection & Validation
              </h4>
              <p className="text-[12px] max-w-[230px] leading-6">
                You are in full control. You can at any point change selections,
                edit, etc. You decide which data is important to you
              </p>
            </div>
          </div>

          {/* Box 5 */}
          <div className="m-4 py-4 bg-white flex items-center rounded-[10px]">
            <div className="p-4">
              <CheckMark />
            </div>
            <div className="p-2">
              <h4 className="text-[12px] font-bold">
                No Installation required
              </h4>
              <p className="text-[12px] max-w-[230px] leading-6">
                Browser based. Use it online anytime and anywhere
              </p>
            </div>
          </div>

          {/* Box 6 */}
          <div className="m-4 py-4 bg-white flex items-center rounded-[10px]">
            <div className="p-4">
              <CheckMark />
            </div>
            <div className="p-2">
              <h4 className="text-[12px] font-bold">Free</h4>
              <p className="text-[12px] max-w-[230px] leading-6">
                Start the free version without any hidden costs. Just sign up
                and get started. No credit card required.
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
