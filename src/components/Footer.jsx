import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  return (
    <footer className="bg-[#0029FF] min-h-[40vh]">
      <article className="mx-auto max-w-6xl">
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
                    <a href="/">Home</a>
                  </li>
                  <li className="mt-1">
                    <a href="/about-us">About</a>
                  </li>
                  <li className="mt-1">
                    <a href="/features">Features</a>
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
                    <Link to="/blogs">Blog</Link>
                  </li>
                  <li className="mt-1">
                    <Link to="/faq">FAQs</Link>
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
                    <a href="/contact">Contact Us</a>
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
                    <Link to="/imprint">Imprint</Link>
                  </li>
                  <li className="mt-1">
                    <Link to="terms-and-condition">Terms & Condition</Link>
                  </li>
                  <li className="mt-1">
                    <Link to="privacy-policy">Privacy Policy</Link>
                  </li>
                  <li className="mt-1">
                    <Link to="cookie-policy">Cookie Policy</Link>
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
      </article>
    </footer>
  );
};

export default Footer;
