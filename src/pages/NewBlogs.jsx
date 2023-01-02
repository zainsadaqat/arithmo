import React from 'react';
import { Link } from 'react-router-dom';
import BlogImage from '../assets/BlogImage.jpg';
import SingleBlog from '../components/SingleBlog';

const NewBlogs = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-2 my-8">
      <div className="flex items-center justify-center flex-wrap">
        <SingleBlog />
        <SingleBlog />
        <SingleBlog />
        <SingleBlog />
        <SingleBlog />
        <SingleBlog />
      </div>
    </section>
  );
};

export default NewBlogs;
