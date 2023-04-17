import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
  return (
    <div className="blog-setion">
      <div className=" trending-head">
        <h1>BLOG</h1>
      </div>
      <div className="blog-body">
        <div className="blog-contaion">
          <div className="blog-img-box">
            <img src="asstes/img/blog-home/1.png" alt="" />
          </div>
          <div className="blog-footer">
            <h1>Cool feature title</h1>
            <p className="">
              Learning curve network effects return on investment.
            </p>
            <Link to="blog">
              Explore page <i className="fas fa-arrow-right" />
            </Link>
          </div>
        </div>

        <div className="blog-contaion">
          <div className="blog-img-box">
            <img src="asstes/img/blog-home/3.png" alt="" />
          </div>
          <div className="blog-footer">
            <h1>Cool feature title</h1>
            <p className="">
              Learning curve network effects return on investment.
            </p>
            <Link to="blog">
              Explore page <i className="fas fa-arrow-right" />
            </Link>
          </div>
        </div>

        <div className="blog-contaion">
          <div className="blog-img-box">
            <img src="asstes/img/blog-home/2.png" alt="" />
          </div>
          <div className="blog-footer">
            <h1>Cool feature title</h1>
            <p className="">
              Learning curve network effects return on investment.
            </p>
            <Link to="blog">
              Explore page <i className="fas fa-arrow-right" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
