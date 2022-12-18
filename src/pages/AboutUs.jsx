import React from 'react';
import AboutUsImage from '../assets/AboutUsImage.jpg';

const AboutUs = () => {
  return (
    <section className="max-w-6xl m-auto my-8 px-4 py-2">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-[30px] text-center text-[#0029FF] font-bold md:text-[40px]">
            About Us
          </h2>
        </div>
        <div>
          <img src={AboutUsImage} alt="About Us" width={600} />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
