import React, { useEffect, useState } from 'react';
import Category from '../../components/Category';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        fetch("categories.json")
          .then((res) => res.json())
          .then((data) => setCategories(data));
    },[])
    return (
      <div>
        <h2 className="text-2xl font-extrabold mb-5">
          All Category
        </h2>
        <div>
          <div>
            <h2 className="text-2xl font-bold py-4 px-12 rounded-md bg-[#E7E7E7] mb-4">
              National News
            </h2>
            {
                categories.map(category => <Category category={category}></Category>)
            }
          </div>
        </div>
      </div>
    );
};

export default LeftSideNav;