import React from "react";
import GithubCodespace from "./GithubCodespace";
import GithubMobile from "./GithubMobile";

const CodeEnvironment = () => {
  return (
    <div className="flex flex-row gap-8 mx:flex-col w-full">
      <GithubCodespace />
      <GithubMobile />
    </div>
  );
};

export default CodeEnvironment;
