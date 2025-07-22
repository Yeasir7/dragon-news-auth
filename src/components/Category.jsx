import React from 'react';

const Category = ({category}) => {
    return (
      <div className="text-xl font-medium text-[#9F9F9F] mb-5 ml-6">{category.name}</div>
    );
};

export default Category;