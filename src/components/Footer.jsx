import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0029FF] min-h-[40vh]">
      <div className="flex flex-col justify-between">
        <article>
          <div className="p-8 flex flex-col justify-evenly items-start flex-wrap md:flex-row">
            {/* Col 1 */}
            <div className="text-white p-4">
              <div>
                <h2 className="font-bold">General</h2>
              </div>
              <ul>
                <li className="mt-1">
                  <a href="#">Home</a>
                </li>
                <li className="mt-1">
                  <a href="#">About</a>
                </li>
                <li className="mt-1">
                  <a href="#">Features</a>
                </li>
              </ul>
            </div>

            {/* Col 2 */}
            <div className="text-white p-4">
              <div>
                <h2 className="font-bold">Resources</h2>
              </div>
              <ul>
                <li className="mt-1">
                  <a href="#">Blog</a>
                </li>
                <li className="mt-1">
                  <a href="#">FAQs</a>
                </li>
                <li className="mt-1">
                  <a href="#">Explain Video</a>
                </li>
                <li className="mt-1">
                  <a href="#">Help</a>
                </li>
              </ul>
            </div>

            {/* Col 3 */}
            <div className="text-white p-4">
              <div>
                <h2 className="font-bold">Contact & Press</h2>
              </div>
              <ul>
                <li className="mt-1">
                  <a href="#">Contact Us</a>
                </li>
                <li className="mt-1">
                  <a href="#">Download PressKit</a>
                </li>
              </ul>
            </div>

            {/* Col 4 */}
            <div className="text-white p-4">
              <div>
                <h2 className="font-bold">Legal</h2>
              </div>
              <ul>
                <li className="mt-1">
                  <a href="#">Imprint</a>
                </li>
                <li className="mt-1">
                  <a href="#">Terms & Condition</a>
                </li>
                <li className="mt-1">
                  <a href="#">Privacy Policy</a>
                </li>
                <li className="mt-1">
                  <a href="#">Cookie Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </article>
        <div>
          <p className="p-4 mt-24 text-white text-center font-bold">
            © 2022 Arithmo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
