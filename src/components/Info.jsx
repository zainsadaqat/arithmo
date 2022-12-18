import React from 'react';
import ExcelIcon from '../assets/ExcelImage.png';
import CheckMark from './CheckMark';
import DatabaseIcon from '../assets/DatabaseImage.png';
import VisualizationIcon from '../assets/VisualizationImage.png';

const Info = () => {
  return (
    <section className="bg-[#F1F3FA]">
      <div className="max-w-6xl m-auto px-4 py-2">
        <h2 className="p-2 font-bold text-[#111] text-[18px] text-center">
          Structured Data can be used to create value
        </h2>

        <div className="my-[16px] flex justify-center items-center flex-wrap">
          {/* 1. Card Begins */}
          <div className="min-w-[220px] p-4 m-8 rounded-[12px] flex flex-col justify-center items-center bg-[#fff]">
            <div>
              <img src={ExcelIcon} alt="excel image" width={80} height={80} />
            </div>
            <div>
              <ul className="mt-4">
                <li className="flex items-center">
                  <div className="p-2">
                    <CheckMark />
                  </div>
                  <div className="p-2">
                    <span>Validation</span>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="p-2">
                    <CheckMark />
                  </div>
                  <div className="p-2">
                    <span>Comparison</span>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="p-2">
                    <CheckMark />
                  </div>
                  <div className="p-2">
                    <span>Reporting</span>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="p-2">
                    <CheckMark />
                  </div>
                  <div className="p-2">
                    <span>Editing</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* 1 Card Ends */}

          {/* 2. Card Begins */}
          <div className="min-w-[220px] p-4 m-8 rounded-[12px] flex flex-col justify-center items-center bg-[#fff]">
            <div>
              <img
                src={DatabaseIcon}
                alt="excel image"
                width={80}
                height={80}
              />
            </div>
            <div>
              <ul className="mt-4">
                <li className="flex items-center">
                  <div className="p-2">
                    <CheckMark />
                  </div>
                  <div className="p-2">
                    <span>Documentation</span>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="p-2">
                    <CheckMark />
                  </div>
                  <div className="p-2">
                    <span>Archiving</span>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="p-2">
                    <CheckMark />
                  </div>
                  <div className="p-2">
                    <span>Storing</span>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="p-2">
                    <CheckMark />
                  </div>
                  <div className="p-2">
                    <span>Searching</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* 2 Card Ends */}

          {/* 3. Card Begins */}
          <div className="min-w-[220px] p-4 m-8 pr-2 rounded-[12px] flex flex-col justify-center items-center bg-[#fff]">
            <div>
              <img
                src={VisualizationIcon}
                alt="excel image"
                width={80}
                height={80}
              />
            </div>
            <div>
              <ul className="mt-4">
                <li className="flex items-center">
                  <div className="p-2">
                    <CheckMark />
                  </div>
                  <div className="p-2">
                    <span>Visualization</span>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="p-2">
                    <CheckMark />
                  </div>
                  <div className="p-2">
                    <span>Data Analysis</span>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="p-2">
                    <CheckMark />
                  </div>
                  <div className="p-2">
                    <span>Machine Learning</span>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="p-2">
                    <CheckMark />
                  </div>
                  <div className="p-2">
                    <span>Forecasting</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* 3 Card Ends */}
        </div>
      </div>
    </section>
  );
};

export default Info;
