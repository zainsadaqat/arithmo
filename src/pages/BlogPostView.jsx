import React from 'react';
import BlogImage from '../assets/BlogImage.jpg';
import { Link } from 'react-router-dom';

const BlogPostView = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-2 my-8">
      <article>
        <div className="flex flex-col items-center justify-center">
          <div>
            <img src={BlogImage} alt="Blog" width="auto" />
          </div>
          <div className="mt-2">
            <Link to="#">
              <h3 className="max-w-[800px] text-[32px] text-[#0029FF] font-bold leading-10 px-4">
                A Gendered Dilemma: The Unspoken Smiles Fellowship as an Avenue
                of Equality
              </h3>
            </Link>
          </div>
        </div>
      </article>
      <div className="my-8">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
          sequi minus similique beatae assumenda officia quos, cumque ut?
          Inventore molestiae et, sunt neque doloremque nisi laudantium eum,
          alias mollitia reiciendis quidem, excepturi quisquam? Similique
          molestias ex asperiores hic unde sequi veniam perferendis expedita
          dolorem, voluptate deleniti accusantium, molestiae ad cupiditate nulla
          aut qui architecto facilis error eveniet explicabo vitae repellat!
        </p>
        <div className="my-4">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In,
            exercitationem delectus? Cumque in distinctio ratione, suscipit
            inventore quibusdam quas. Fugiat quibusdam molestiae dicta ratione.
            Facere voluptas natus minus, ipsa doloribus aliquam dolore, earum
            commodi recusandae enim deserunt quam in culpa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogPostView;
