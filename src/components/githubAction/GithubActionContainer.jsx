import React from "react";
import ActionCard1 from "./ActionCard1";
import ActionCard2 from "./ActionCard2";

const GithubActionContainer = () => {
  return (
    <div className="relative overflow-hidden rounded-lg  mx:mb-4 mb-8 w-full">
      <div className="feature-card-mktg flex mx:block h-full w-full relative justify-between flex-row color-bg-subtle borderNew">
        <ActionCard1 />
        <ActionCard2 />
      </div>
    </div>
  );
};

export default GithubActionContainer;
