import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ singleNews }) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={singleNews.image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{singleNews.title}</h2>
        <p>
          {singleNews.details.length > 200 ? (
            <>
              {singleNews.details.slice(0, 200)}...
              <Link
                className="text-blue-600 ml-1"
                to={`/news/${singleNews._id}`}
              >
                read more
              </Link>
            </>
          ) : (
            singleNews.details
          )}
        </p>
      </div>
    </div>
  );
};

export default Cards;