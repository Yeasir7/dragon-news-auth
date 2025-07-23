import React from 'react';
import Header from './shared/Header';
import Navbar from './shared/Navbar';
import LeftSideNav from './shared/LeftSideNav';
import RightSideNav from './shared/RightSideNav';
import BrakingNews from '../components/BrakingNews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BrakingNews></BrakingNews>
            <Navbar></Navbar>

            <div className='grid grid-cols-1 md:grid-cols-4'>
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='col-span-2'>
                    <p className="text-2xl">text coming soon</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;