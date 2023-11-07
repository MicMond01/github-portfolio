import React from "react";
import eyebrow from "../../assets/images/eyebrow-23@2x.webp";
// import frameone from "../../assets/images/lines-hero.svg";
import frameone from "../../assets/images/Frame01.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HeroForm from "./HeroForm";
import { Button, Divider } from "@mui/material";
import TrustedOrgs from "./TrustedOrgs";

const Copilot = () => {
  return (
    <div className="flex columns-2 ">
      <div className="hero-imageArea flex flex-col  pointer-events-none w-[4.33%]  relative   top-20 md:-top-10">
        <img
          src={frameone}
          alt="frame"
          className="home-campaign-lines-hero mx-auto "
          // height="637"
          // width="437"
        />
        <div className=" my-4 home-campaign-glowing-icon ">
          <div className="relative inline-block z-1">
            <svg
              aria-hidden="true"
              height="24"
              viewBox="0 0 24 24"
              version="1.1"
              width="24"
              data-view-component="true"
              className="octicon octicon-code "
            >
              <path d="M15.22 4.97a.75.75 0 0 1 1.06 0l6.5 6.5a.75.75 0 0 1 0 1.06l-6.5 6.5a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L21.19 12l-5.97-5.97a.75.75 0 0 1 0-1.06Zm-6.44 0a.75.75 0 0 1 0 1.06L2.81 12l5.97 5.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.5-6.5a.75.75 0 0 1 0-1.06l6.5-6.5a.75.75 0 0 1 1.06 0Z"></path>
            </svg>
            <span
              className="gloww absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow -z-10"
              style={{
                backgroundColor: "#dd7df7",
                filter: "blur(17px)",
              }}
            ></span>
          </div>
        </div>

        <div
          className="home-campaign-git-line h-full w-[2px] ml-3 "
          style={{
            background:
              "linear-gradient(#d2a8ff, #a371f7 10%, #196c2e 70%, #2ea043 80%, #56d364)",
          }}
        ></div>
      </div>

      <div className="hero-textArea relative text-left z-10    top-8 pt-32 md:mt-10 mt-56  ">
        <div className="flex items-center justify-startborder-solid border-[#424B5B] border-2 max-w-[475px] rounded-[100px] px-[16px] py-[12px]  mb-6 bg-gradient-to-r from-[rgba(1,1,1,0.6)] via-[rgba(1,1,1,0.461139)] to-[rgba(1,1,1,0)] ">
          <img
            src={eyebrow}
            alt="eyebrow"
            loading="lazy"
            decoding="async"
            aria-hidden="true"
            className="eyebrow-banner-icon block w-auto flex-grow-0 flex-shrink-0 mr-4 "
          />
          <div className="copilot md:pr-0 pr-3 md:mr-1 md:pl-1">
            <p className="text-white  text-sm leading-tight font-semibold ">
              GitHub Ubiverse: Dive in to AI, security, and DevEx
            </p>
            <p className="text-[#6E7681] text-sm leading-tight ">
              Get your tickets now to join us on Nov. 8-9
            </p>
          </div>
          <ChevronRightIcon sx={{ color: "white" }} />
        </div>

        <div className="hero-heading">
          <h1 className="h0-mktg md:mt-4 mt-12 mb-6 sm:mb-2 relative z-2">
            Let's build from here
          </h1>
          <p className="f1-mktg  font-normal color-fg-muted  mb-4 md:mb-12 relative z-1">
            The AI-powered developer platform to build, scale, and deliver
            secure software.
          </p>
        </div>

        <div className="hero-form-container ">
          <HeroForm />

          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderColor: "#dd7df7", marginX: "1.5rem" }}
            className="hero-divider"
          ></Divider>

          <Button
            sx={{ color: "white", borderRadius: "0.357rem " }}
            className="home-campaign-enterprise py-4 h-[3.5rem] btn-muted-mktg "
          >
            State a free enterprise trial
          </Button>
        </div>

        <TrustedOrgs />
      </div>
    </div>
  );
};

export default Copilot;
