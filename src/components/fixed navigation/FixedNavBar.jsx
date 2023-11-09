import { Button } from "@mui/material";
import React from "react";

const FixedNavBar = () => {
  return (
    <div className=" sub-nav-mktg fixed z-30 w-full text-white top-0 left-0 pl-4 pr-8">
      <div className="flex items-center justify-between container-xl py-4">
        <ul className="fixed-nav-items flex  f4-mktg gap-6 flex-auto lg:flex-col flex-row ">
          <li className="fixed-nav-link">Productivity</li>
          <li className="fixed-nav-link">Collaboration</li>
          <li className="fixed-nav-link">Security</li>
        </ul>



        <div className="fixed-nav-buttons flex lg:ml-0 ml-4">
          <div className="fixed-nav-trialButton">
            <Button
              sx={{ color: "white", borderRadius: "0.357rem " }}
              className="home-campaign-enterprise py-4 h-[3.5rem] btn-muted-mktg "
            >
              State a free enterprise trial
            </Button>
          </div>
          <div className="fixed-nav-signup">
            <Button
              sx={{ color: "white", borderRadius: "0.357rem " }}
              className="home-campaign-enterprise py-4 h-[3.5rem] btn-muted-mktg "
            >
              State a free enterprise trial
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedNavBar;
