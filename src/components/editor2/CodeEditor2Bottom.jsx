import React from "react";

const CodeEditor2Bottom = () => {
  return (
    <div
      className="py-4 text-left sm:w-full md:w-4/6 mx:w-7/12 w-3/6   js-build-in-item build-in-slideX-left build-in-animate"
      style={{ transitionDelay: "600ms" }}
    >
      <div
        className="gradient-border-mktg inline-block z-1 relative px-2 py-2 leading-tight text-white f6-mktg"
        style={{ top: "-1px" }}
      >
        <span className="text-gradient-mktg font-semibold">Did you know?</span>
      </div>

      <h3
        style={{ fontWeight: 500 }}
        className="text-accent-primary mb-2 mt-4 h1-mktg font-medium override-h1-mktg"
      >
        22% increase
      </h3>
      <p className="mb-4 f2-mktg font-medium lg:max-w-[41.25rem] max-w-[40.5rem] text-white">
        in developer productivity after three years with GitHub
      </p>
      <div className="link-mktg font-semibold text-white py-1 f3-mktg" href="#">
        Read the report{" "}
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
      </div>
    </div>
  );
};

export default CodeEditor2Bottom;
