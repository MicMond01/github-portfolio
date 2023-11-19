import React from "react";
import gitBranchSecurity from "../../../assets/images/git-branch-security-2-f6a799957581.svg";
import AdvancedSecTop from "./AdvancedSecTop";
import AdvancedSecBottom from "./AdvancedSecBottom";

const AdvancedSecurity = () => {
  return (
    <div className=" flex columns-2 ">
      <img
        alt=""
        aria-hidden="true"
        width="584"
        height="584"
        className="absolute h-auto block md:hidden w-7/12 events-none pointer-events-none home-shape-rotate"
        style={{ bottom: "-50%", right: "-20%", animationDuration: "300s" }}
        loading="lazy"
        decoding="async"
        src="https://github.githubassets.com/assets/shape-1-c219318e479a.svg"
      ></img>

      <div className=" flex flex-col  pointer-events-none w-[8.33%]  relative   items-center">
        <div
          className="home-campaign-git-line h-full relative z-[1] "
          style={{
            transitionDuration: "900ms",
            background:
              "linear-gradient(transparent, rgb(51, 179, 174), rgb(51, 179, 174), transparent)",
            transitionDelay: "0ms",
          }}
        ></div>
        <img
          alt=""
          aria-hidden="true"
          width="81"
          height="485"
          style={{
            left: "calc(50% - 2px)",
            height: "auto",
            maxWidth: "9vw",
            transitionDelay: "100ms",
          }}
          className="mx:hidden block absolute bottom-6 "
          loading="lazy"
          decoding="async"
          src={gitBranchSecurity}
        ></img>
      </div>

      <div className="relative text-left   mx:ml-2 ml-16 w-[91.6%]">
        <div className="flex  gutter gutter-spacious lg:my-12 my-16 md:my-12  relative flex-md-items-center mx:items-center flex-row  mx:flex-col-reverse mx:pb-6 pb-12 ">
          <AdvancedSecTop />
        </div>
        <div className="mx:mb-10 mb-12 pb-6">
          <AdvancedSecBottom />
        </div>
      </div>
    </div>
  );
};

export default AdvancedSecurity;
