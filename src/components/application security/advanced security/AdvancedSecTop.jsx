import React from "react";
import bgGlowBlue from "../../../assets/images/bg-glow-blue-036b8dc2d1ce.png";
import illuGhasList from "../../../assets//images/illu-ghas-list-84af1f1ce2b8.png";

const AdvancedSecTop = () => {
  return (
    <>
      <div
        className="mx:w-full  mx:mt-8 w-1/2 py-3 mb-2 js-build-in-item  text-left  build-in-slideX-right build-in-animate"
        style={{ transitionDelay: "0ms" }}
      >
        <div className="pr-6 mx:pr-0">
          <h2 className=" mb-4 f2-mktg color-fg-muted">
            <em className="text-white">GitHub Advanced Security </em> enables
            you to find and fix vulnerabilities with ease and ship secure code
            quickly.
          </h2>

          <a
            className="no-underline link-mktg font-semibold text-white py-1 f3-mktg"
            href="/features/copilot"
            data-analytics-event='{"category":"Explore GitHub Copilot","action":"click to Explore GitHub Copilot","label":"ref_cta:Explore GitHub Copilot;"}'
          >
            ive into GitHub Advanced Security{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="octicon arrow-symbol-mktg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill="currentColor"
                d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
              ></path>
              <path
                className="octicon-chevrow-stem"
                stroke="currentColor"
                d="M1.75 8H11"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
            </svg>
          </a>
        </div>
      </div>

      <div className="relative col-12 py-4 mx:w-full w-1/2">
        <div className=" relative">
          <div className="flex flex-col relative">
            <div
              className="overflow-hidden borderNew left-10 rounded-lg relative z-[10] "
              style={{
                maxWidth: "541px",
                marginTop: "-30%",
                transitionDelay: "100ms",
              }}
            >
              <img
                src={illuGhasList}
                loading="lazy"
                width="960"
                height="1222"
                alt=""
                decoding="async"
                className="w-full block h-auto"
              />
            </div>

            {/* <div
            className="js-build-in-item build-in-slideX-right overflow-hidden rounded-lg absolute right-4 bottom-36 sm:bottom-[15rem] xsm:bottom-[17rem] z-10 mx:block hidden  build-in-animate"
            style={{ maxWidth: "60%", transitionDelay: "200ms" }}
          >
            <img
              //   src={illuCopilotSidebar}
              loading="lazy"
              width="960"
              height="1222"
              alt=""
              decoding="async"
              className="w-full block h-auto"
            />
          </div> */}

            <img
              alt=""
              aria-hidden="true"
              className="max-w-[1000px] w-[1000px] h-[1000px] absolute mx:hidden block  events-none z-1"
              style={{
                bottom: "-160px",
                right: "-220px",
              }}
              loading="lazy"
              decoding="async"
              src={bgGlowBlue}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvancedSecTop;
