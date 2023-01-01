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

        <div className="mt-4 mb-[16px] flex justify-center items-center flex-wrap">
          {/* 1. Card Begins */}
          <div className="min-w-[220px] p-4 mx-8 my-4 rounded-[12px] flex flex-col justify-center items-center bg-[#fff]">
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
                    <span className="font-medium">Validation</span>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="p-2">
                    <CheckMark />
                  </div>
                  <div className="p-2">
                    <span className="font-medium">Comparison</span>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="p-2">
                    <CheckMark />
                  </div>
                  <div className="p-2">
                    <span className="font-medium">Reporting</span>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="p-2">
                    <CheckMark />
                  </div>
                  <div className="p-2">
                    <span className="font-medium">Editing</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* 1 Card Ends */}

          {/* 2. Card Begins */}
          <div className="min-w-[220px] p-4 mx-8 my-4 rounded-[12px] flex flex-col justify-center items-center bg-[#fff]">
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
                    <span className="font-medium">Documentation</span>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="p-2">
                    <CheckMark />
                  </div>
                  <div className="p-2">
                    <span className="font-medium">Archiving</span>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="p-2">
                    <CheckMark />
                  </div>
                  <div className="p-2">
                    <span className="font-medium">Storing</span>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="p-2">
                    <CheckMark />
                  </div>
                  <div className="p-2">
                    <span className="font-medium">Searching</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* 2 Card Ends */}

          {/* 3. Card Begins */}
          <div className="min-w-[220px] p-4 mx-8 my-4 pr-2 rounded-[12px] flex flex-col justify-center items-center bg-[#fff]">
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
                    <span className="font-medium">Visualization</span>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="p-2">
                    <CheckMark />
                  </div>
                  <div className="p-2">
                    <span className="font-medium">Data Analysis</span>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="p-2">
                    <CheckMark />
                  </div>
                  <div className="p-2">
                    <span className="font-medium">Machine Learning</span>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="p-2">
                    <CheckMark />
                  </div>
                  <div className="p-2">
                    <span className="font-medium">Forecasting</span>
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
