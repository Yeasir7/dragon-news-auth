import React from 'react';
import Header from './shared/Header';
import Navbar from './shared/Navbar';
import RightSideNav from './shared/RightSideNav';

const SingleNewsDetails = () => {
    return (
      <div>
        <Header></Header>
        <Navbar></Navbar>
        <div className="grid grid-cols-4">
          <div className="col-span-3">
            <p>hello</p>
          </div>
          <div>
            <RightSideNav></RightSideNav>
          </div>
        </div>
      </div>
    );
};

export default SingleNewsDetails;