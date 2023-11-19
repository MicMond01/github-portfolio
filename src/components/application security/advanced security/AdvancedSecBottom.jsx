import React from "react";

const AdvancedSecBottom = () => {
  return (
    <div
      className="py-4 text-left sm:w-full md:w-4/6 mx:w-7/12 w-3/6   js-build-in-item build-in-slideX-left build-in-animate"
      style={{ transitionDelay: "600ms" }}
    >
      <div
        className="gradient-border-mktg inline-block z-1 relative px-2 py-2 leading-tight text-white f6-mktg"
        style={{ top: "-1px" }}
      >
        <span className="text-[#33b3ae] font-semibold">Did you know?</span>
      </div>

      <h3
        style={{ fontWeight: 500 }}
        className="text-[#33b3ae] mb-2 mt-4 h1-mktg font-medium override-h1-mktg"
      >
        7x faster
      </h3>
      <p className="mb-4 f2-mktg font-medium lg:max-w-[41.25rem] max-w-[40.5rem] text-white">
        vulnerability fixes with GitHub <sup>1</sup>
      </p>
    </div>
  );
};

export default AdvancedSecBottom;
