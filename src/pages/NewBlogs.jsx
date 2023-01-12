import React from 'react';
import { Link } from 'react-router-dom';
import BlogImage from '../assets/BlogImage.jpg';
import SingleBlog1 from '../components/SingleBlog/SingleBlog1';
import SingleBlog2 from '../components/SingleBlog/SingleBlog2';
import SingleBlog3 from '../components/SingleBlog/SingleBlog3';
import SingleBlog4 from '../components/SingleBlog/SingleBlog4';
import SingleBlog5 from '../components/SingleBlog/SingleBlog5';
import SingleBlog6 from '../components/SingleBlog/SingleBlog6';

const NewBlogs = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-2 my-8">
      <div className="flex items-center justify-center flex-wrap">
        <SingleBlog1 />
        <SingleBlog2 />
        <SingleBlog3 />
        <SingleBlog4 />
        <SingleBlog5 />
        <SingleBlog6 />
      </div>
    </section>
  );
};

export default NewBlogs;
