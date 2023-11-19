import React from "react";
import CodeScanCard1 from "./CodeScanCard1";
import CodeScanCard2 from "./CodeScanCard2";

const CodeScanning = () => {
  return (
    <div className="relative overflow-hidden rounded-lg  mx:mb-4 mb-8 w-full">
      <div className="feature-card-mktg flex mx:block h-full w-full relative justify-between flex-row color-bg-subtle borderNew">
        <CodeScanCard1 />
        <CodeScanCard2 />
      </div>
    </div>
  );
};

export default CodeScanning;
