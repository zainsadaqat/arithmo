import React from 'react';
import AboutUsImage from '../assets/AboutUsImage.jpg';

const AboutUs = () => {
  return (
    <section className="max-w-6xl m-auto my-8 px-4 py-2">
      <div className="flex justify-between flex-wrap">
        <div>
          <h2 className="text-[32px] text-[#0029FF] font-bold md:text-[40px]">
            About Us
          </h2>
          <div className="max-w-[500px]">
            <p className="my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              necessitatibus veritatis, quia maiores, porro quod architecto eum
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellat, autem?
            </p>
            <p className="my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              necessitatibus veritatis, quia maiores, porro quod architecto eum
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
              error!
            </p>
          </div>
        </div>
        <div>
          <img src={AboutUsImage} alt="About Us" width={600} />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
