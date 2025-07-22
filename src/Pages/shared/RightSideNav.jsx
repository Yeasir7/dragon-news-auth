import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import qZone1 from "../../assets/qZone1.png";
import qZone2 from "../../assets/qZone2.png";
import qZone3 from "../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="space-y-3 mb-7">
        <h2 className="text-2xl font-extrabold">Login With</h2>
        <button className="btn btn-outline btn-primary w-full">
          <FaGoogle></FaGoogle> Login With google
        </button>
        <button className="btn btn-outline btn-secondary w-full">
          <FaGithub></FaGithub> Login With github
        </button>
      </div>

      {/* find us */}
      <div>
        <h2 className="text-2xl font-extrabold mb-5">Find Us On</h2>
        <a className="flex items-center gap-1 p-4 border rounded-t-lg" href="">
          <FaFacebook></FaFacebook>
          <span>facebook</span>
        </a>
        <a className="flex items-center gap-1 p-4 border-x" href="">
          <FaTwitter></FaTwitter>
          <span>twitter</span>
        </a>
        <a className="flex items-center gap-1 p-4 border rounded-b-lg" href="">
          <FaInstagram></FaInstagram>
          <span>instagram</span>
        </a>
      </div>

      {/* q zone */}
      <div className="bg-[#F3F3F3] my-5 p-4 rounded-sm">
        <h2 className="text-2xl font-extrabold mb-5">Q-Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
