import React from 'react';
import BlogImage from '../assets/BlogImage.jpg';
import { Link } from 'react-router-dom';

const BlogPostView = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-2 my-16">
      <article>
        <div>
          <img src={BlogImage} alt="Blog" width="auto" />
        </div>
        <div className="mt-[20px]">
          <Link to="#">
            <h3 className="max-w-[800px] text-[32px] text-[#0029FF] font-bold leading-10">
              A Gendered Dilemma: The Unspoken Smiles Fellowship as an Avenue of
              Equality
            </h3>
          </Link>
        </div>
        <div>
          <span className="text-[#111] text-[10px]">
            December 6, 2022 No Comments
          </span>
        </div>
      </article>
    </section>
  );
};

export default BlogPostView;
