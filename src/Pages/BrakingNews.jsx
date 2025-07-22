import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const BrakingNews = () => {
    return (
      <div className="flex mb-5 bg-[#F3F3F3] p-4 rounded-lg">
        <button className="btn btn-primary">Latest</button>
        <Marquee speed={100} pauseOnHover={true}>
          <Link className="mx-5" to="/">
            this is the first news. this is the first news
          </Link>
          <Link className="mx-5" to="/">
            this is the Second news. this is the Second news
          </Link>
          <Link className="mx-5" to="/">
            this is the third news.this is the third news
          </Link>
        </Marquee>
      </div>
    );
};

export default BrakingNews;