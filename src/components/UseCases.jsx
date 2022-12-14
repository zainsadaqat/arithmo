import React from 'react';
import BankDataIcon from '../assets/UseCasesAssets/BankDataIcon.png';
import BillIcon from '../assets/UseCasesAssets/BillIcon.png';
import CatalogsIcon from '../assets/UseCasesAssets/CatalogsIcon.png';
import ConfirmationIcon from '../assets/UseCasesAssets/ConfirmationIcon.png';
import ContractIcon from '../assets/UseCasesAssets/ContractIcon.png';
import MoreIcon from '../assets/UseCasesAssets/MoreIcon.png';
import PurchaseIcon from '../assets/UseCasesAssets/PurchaseIcon.png';
import ReportIcon from '../assets/UseCasesAssets/ReportIcon.png';
import UseCaseImage from './UseCases/UseCaseImage';
import UseCaseText from './UseCases/UseCaseText';

const UseCases = () => {
  return (
    <section className="bg-[#F1F3FA]">
      <div className="max-w-6xl m-auto px-4 py-2">
        <h2 className="my-[8px] font-bold text-center text-[#111] text-[18px]">
          Use Cases
        </h2>
        <article className="mt-8 flex justify-evenly items-center flex-wrap">
          {/* Card 1 */}
          <div className="bg-[#fff] m-[4px] p-4 rounded-[12px] min-w-[100px] min-h-[170px]">
            <div className="flex flex-col justify-center items-center">
              <div className="my-2">
                <UseCaseImage Image={ReportIcon} />
              </div>
              <div className="my-2">
                <UseCaseText text="Reports" />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#fff] m-[4px] p-4 rounded-[12px] min-w-[100px] min-h-[170px]">
            <div className="flex flex-col justify-center items-center">
              <div className="my-2">
                <UseCaseImage Image={ConfirmationIcon} />
              </div>
              <div className="my-2">
                <UseCaseText text="Confirmation" />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#fff] m-[4px] p-4 rounded-[12px] min-w-[100px] min-h-[170px]">
            <div className="flex flex-col justify-center items-center">
              <div className="my-2">
                <UseCaseImage Image={CatalogsIcon} />
              </div>
              <div className="my-2">
                <UseCaseText text="Catalog" />
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#fff] m-[4px] p-4 rounded-[12px] min-w-[100px] min-h-[170px]">
            <div className="flex flex-col justify-center items-center">
              <div className="my-2">
                <UseCaseImage Image={PurchaseIcon} />
              </div>
              <div className="my-2">
                <UseCaseText text="Purchase Order" />
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-[#fff] m-[4px] p-4 rounded-[12px] min-w-[100px] min-h-[170px]">
            <div className="flex flex-col justify-center items-center">
              <div className="my-2">
                <UseCaseImage Image={BillIcon} />
              </div>
              <div className="my-2">
                <UseCaseText text="Delivery Bill" />
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-[#fff] m-[4px] p-4 rounded-[12px] min-w-[100px] min-h-[170px]">
            <div className="flex flex-col justify-center items-center">
              <div className="my-2">
                <UseCaseImage Image={ContractIcon} />
              </div>
              <div className="my-2">
                <UseCaseText text="Contract Data" />
              </div>
            </div>
          </div>

          {/* Card 7 */}
          <div className="bg-[#fff] m-[4px] p-4 rounded-[12px] min-w-[120px] min-h-[170px]">
            <div className="flex flex-col justify-center items-center">
              <div className="my-2">
                <UseCaseImage Image={BankDataIcon} />
              </div>
              <div className="my-2">
                <UseCaseText text="Bank Data" />
              </div>
            </div>
          </div>

          {/* Card 8 */}
          <div className="bg-[#fff] m-[4px] p-4 rounded-[12px] min-w-[120px] min-h-[170px]">
            <div className="flex flex-col justify-center items-center">
              <div className="my-2">
                <UseCaseImage Image={MoreIcon} />
              </div>
              <div className="my-2">
                <UseCaseText text="Add many more..." />
              </div>
            </div>
          </div>
        </article>
        <div className="mt-8 mb-4">
          <h3 className="text-[#2E2E48] text-center text-[20px] font-extrabold">
            in 20+ Latin Alphabet Languages (English, German, Spanish, French,
            Portugese, Italian, etc.)
          </h3>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
