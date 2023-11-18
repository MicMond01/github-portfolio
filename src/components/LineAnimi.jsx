import React from "react";

const LineAnimi = () => {
  return (
    <div className="flex columns-2 ">
      <div className=" flex flex-col items-center  pointer-events-none w-[8.33%]  relative  ">
        <div
          className="home-campaign-git-line h-[160px] w-[2px]  "
          style={{
            background: "linear-gradient(transparent, #33B3AE 40%)",
          }}
        ></div>
      </div>

      <div className="relative text-left z-[1]     w-[91.6%]"></div>
    </div>
  );
};

export default LineAnimi;
