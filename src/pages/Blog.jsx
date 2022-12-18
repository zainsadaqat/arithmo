import React from 'react';
import { Link } from 'react-router-dom';
import BlogImage from '../assets/BlogImage.jpg';

const Blog = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-2 mt-8">
      <div className="flex items-start justify-center flex-wrap">
        <article>
          <div>
            <h2 className="text-[48px] text-center text-[#0029FF] font-bold">
              Blogs
            </h2>
          </div>
          <div>
            <img src={BlogImage} alt="Blog" width="auto" />
          </div>
          <div className="mt-[20px]">
            <Link to="#">
              <h3 className="max-w-[800px] text-[32px] text-[#0029FF] font-bold leading-10">
                A Gendered Dilemma: The Unspoken Smiles Fellowship as an Avenue
                of Equality
              </h3>
            </Link>
          </div>
          <div>
            <span className="text-[#111] text-[10px]">
              December 6, 2022 No Comments
            </span>
          </div>
        </article>
        <div className="m-2">
          <div className="">
            <article className="max-w-[300px] m-4">
              <div>
                <h2 className="text-[32px] text-center text-[#0029FF] font-bold">
                  Recent
                </h2>
              </div>
              <div>
                <img src={BlogImage} alt="Blog" width={300} />
              </div>
              <div className="mt-4">
                <Link to="#">
                  <h3 className="text-[18px] text-[#0029FF] font-bold leading-6">
                    A Gendered Dilemma: The Unspoken Smiles Fellowship as an
                    Avenue of Equality
                  </h3>
                </Link>
              </div>
              <div>
                <span className="text-[#111] text-[10px]">
                  December 6, 2022 No Comments
                </span>
              </div>
            </article>
            <article className="max-w-[300px] m-4 mt-[24px]">
              <div>
                <img src={BlogImage} alt="Blog" width={300} />
              </div>
              <div className="mt-4">
                <Link to="#">
                  <h3 className="text-[18px] text-[#0029FF] font-bold leading-6">
                    A Gendered Dilemma: The Unspoken Smiles Fellowship as an
                    Avenue of Equality
                  </h3>
                </Link>
              </div>
              <div>
                <span className="text-[#111] text-[10px]">
                  December 6, 2022 No Comments
                </span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
