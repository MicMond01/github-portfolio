import React from "react";
import CodeEditor2Top from "./CodeEditor2Top";

const CodeEditor2 = () => {
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
          className="home-campaign-git-line h-[20rem] relative z-[1] js-build-in-item build-in-scale-top build-in-animate"
          style={{
            transitionDuration: "900ms",
            background:
              "linear-gradient(transparent, rgb(63, 185, 80), rgb(63, 185, 80), transparent)",
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
          className="md:hidden block absolute bottom-6 js-build-in-item build-in-scale-fade build-in-animate"
          loading="lazy"
          decoding="async"
          src="https://github.githubassets.com/assets/git-branch-productivity-c304b83d09c7.svg"
        ></img>
      </div>

      <div className="relative text-left   mx:ml-2 ml-16 w-[91.6%]">
        <div className="flex river-mktg js-build-in-trigger  gutter gutter-spacious lg:my-12 my-16 md:my-12  relative flex-md-items-center mx:items-center flex-row mx:flex-col mx:pb-6 pb-12 build-in-animate">
          <CodeEditor2Top />
        </div>
      </div>
    </div>
  );
};

export default CodeEditor2;
