import React from "react";
import shape2 from "../../../assets/images/shape-2-f30dcc9bd35c.svg";

const AppSecurityHero = () => {
  return (
    <div className="flex relative">
      <div className=" flex flex-col  pointer-events-none w-[8.33%]  relative   items-center">
        <div className=" my-4 home-campaign-glowing-icon ">
          <div className="relative inline-block z-1">
            <svg
              aria-hidden="true"
              height="24"
              viewBox="0 0 24 24"
              version="1.1"
              width="24"
              data-view-component="true"
              className="octicon octicon-lock"
            >
              <path d="M6 9V7.25C6 3.845 8.503 1 12 1s6 2.845 6 6.25V9h.5a2.5 2.5 0 0 1 2.5 2.5v8a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 19.5v-8A2.5 2.5 0 0 1 5.5 9Zm-1.5 2.5v8a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-13a1 1 0 0 0-1 1Zm3-4.25V9h9V7.25c0-2.67-1.922-4.75-4.5-4.75-2.578 0-4.5 2.08-4.5 4.75Z"></path>
            </svg>

            <span
              className="gloww circle absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow -z-[1]"
              style={{
                backgroundColor: "#33b3ae",
                filter: "blur(18px)",
              }}
            ></span>
          </div>
        </div>

        <div
          className="home-campaign-git-line h-full w-[2px]  build-in-scale-top build-in-animate rounded-md"
          style={{
            background: "linear-gradient(rgb(51, 179, 174) 40%, transparent)",
            transitionDelay: "500ms",
          }}
        ></div>
      </div>

      <div className=" relative text-left w-[91.6%]">
        <div className="w-7/12 mx:w-11/12 pr-4 mx:pr-0 mb-16 mx:mb-10 ml-0 mx:ml-2">
          <div className="h2-animation-container">
            <h2
              className="h5-mktg mb-6 text-white  build-in-slideX-left build-in-animate font-medium"
              style={{ transitionDelay: "200ms" }}
            >
              Application security
            </h2>
          </div>
          <h3
            className="h3-mktg mb-6 text-white font-medium "
            style={{ transitionDelay: "300ms" }}
          >
            <span className="text-[#33b3ae] ">Empower developers </span>
            With GitHub, you can secure code in minutes.
          </h3>
        </div>
      </div>

      <img
        alt=""
        aria-hidden="true"
        width="595"
        height="595"
        className="absolute h-auto mx:hidden block w-2/3 pointer-events-none"
        style={{ top: "-10%", right: "-25%" }}
        loading="lazy"
        decoding="async"
        src={shape2}
      ></img>
    </div>
  );
};

export default AppSecurityHero;
