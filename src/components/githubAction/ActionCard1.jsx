import React from "react";

const ActionCard1 = () => {
  return (
    <div className="flex mx:block flex-col flex-1 pr-32 py-16 pl-16 mx:p-10 sm:p-8 w-1/2 mx:w-full justify-between">
      <p className="f2-mktg font-medium color-fg-muted mb-6 ">
        <em className="text-white">GitHub Actions</em> automates your build,
        test, and deployment workflow with simple and secure CI/CD.
      </p>

      <div>
        <button
          className="link-mktg text-semibold color-fg-default py-1 f3-mktg"
          href="#"
        >
          Discover GitHub Actions{" "}
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
        </button>
      </div>
    </div>
  );
};

export default ActionCard1;
