import React from "react";
import bannerImgLeft from "../../assets/vector1.png";
import bannerImgRight from "../../assets/vector2.png";

const Banner = ({ selectedTickets, resolvedTasks }) => {
  return (
    <div className="grid grid-cols-2 gap-6 max-w-[1440px] mx-auto my-[50px] md:my-[80px]">
      {/* left */}
      <div className="px-[40px] py-[67.5px] rounded-[8px] text-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white relative">
        <img
          src={bannerImgLeft}
          className="absolute top-0 left-0 h-full"
          alt=""
        />
        <img
          src={bannerImgRight}
          className="absolute top-0 right-0 h-full"
          alt=""
        />
        <h3 className="mb-4 text-2xl">In-Progress</h3>
        <h1 className="text-6xl font-semibold">{selectedTickets.length}</h1>
      </div>

      {/* right */}
      <div className="px-[40px] py-[67.5px] rounded-[8px] text-center bg-gradient-to-r from-[#54CF68] to-[#00827A] text-white relative">
        <img
          src={bannerImgLeft}
          className="absolute top-0 left-0 h-full"
          alt=""
        />
        <img
          src={bannerImgRight}
          className="absolute top-0 right-0 h-full"
          alt=""
        />
        <h3 className="mb-4 text-2xl">Resolved</h3>
        <h1 className="text-6xl font-semibold">{resolvedTasks.length}</h1>
      </div>
    </div>
  );
};

export default Banner;
