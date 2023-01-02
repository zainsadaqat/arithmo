import React from 'react';
import ArithmoRebuild from '../components/ArithmoRebuild';
import ArithmoWorks from '../components/ArithmoWorks';
import Features from '../components/Features';
import Footer from '../components/Footer';
import GetInTouch from '../components/GetInTouch';
import GetReady from '../components/GetReady';
import Hero from '../components/Hero';
import Info from '../components/Info';
import NewArithmoWorks from '../components/NewArithmoWorks';
import Stats from '../components/Stats';
import Structure from '../components/Structure';
import UseCases from '../components/UseCases';

const LandingPage = () => {
  return (
    <section>
      <main className="min-h-[80vh] pt-16 md:pt-32">
        <Hero />
        <Stats />
      </main>
      <div className="min-h-[80vh]">
        <Info />
        <Structure />
      </div>
      <UseCases />
      {/* <ArithmoWorks /> */}
      {/* <ArithmoRebuild /> */}
      <NewArithmoWorks />
      <GetReady />
      <Features />
      <div id="contact" className="max-w-5xl mx-auto">
        <GetInTouch />
      </div>
    </section>
  );
};

export default LandingPage;
