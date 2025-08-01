import React from "react";
import Header from "./shared/Header";
import Navbar from "./shared/Navbar";
import LeftSideNav from "./shared/LeftSideNav";
import RightSideNav from "./shared/RightSideNav";
import BrakingNews from "../components/BrakingNews";
import { useLoaderData } from "react-router-dom";
import Cards from "../components/Cards";

const Home = () => {
  const news = useLoaderData();
  console.log(news);
  return (
    <div>
      <Header></Header>
      <BrakingNews></BrakingNews>
      <Navbar></Navbar>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="col-span-2 flex flex-col gap-3">
          {news.map((singleNews) => (
            <Cards key={singleNews._id} singleNews={singleNews}></Cards>
          ))}
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
