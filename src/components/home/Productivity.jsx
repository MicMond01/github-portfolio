import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/all";
// import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger);
gsap.config({ trialWarn: false });

const Productivity = () => {
  return (
    <div className="bg-[#0D1117]">
      <div className="flex columns-2 ">
        <div className="hero-imageArea flex flex-col  pointer-events-none w-[4.33%]  relative   top-20 md:-top-10">
          <div class=" my-4 home-campaign-glowing-icon ">
            <div class="relative inline-block z-1">
              <svg
                aria-hidden="true"
                height="24"
                viewBox="0 0 24 24"
                version="1.1"
                width="24"
                data-view-component="true"
                class="octicon octicon-briefcase"
              >
                <path d="M7.5 1.75C7.5.784 8.284 0 9.25 0h5.5c.966 0 1.75.784 1.75 1.75V4h4.75c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 21.25 22H2.75A1.75 1.75 0 0 1 1 20.25V5.75C1 4.784 1.784 4 2.75 4H7.5Zm-5 10.24v8.26c0 .138.112.25.25.25h18.5a.25.25 0 0 0 .25-.25v-8.26A4.235 4.235 0 0 1 18.75 13H5.25a4.235 4.235 0 0 1-2.75-1.01Zm19-3.24v-3a.25.25 0 0 0-.25-.25H2.75a.25.25 0 0 0-.25.25v3a2.75 2.75 0 0 0 2.75 2.75h13.5a2.75 2.75 0 0 0 2.75-2.75Zm-6.5-7a.25.25 0 0 0-.25-.25h-5.5a.25.25 0 0 0-.25.25V4h6Z"></path>
              </svg>

              <span
                class="gloww absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow -z-[1]"
                style={{
                  backgroundColor: "#7ee787",
                  filter: "blur(18px)",
                }}
              ></span>
            </div>
          </div>

          <div
            className="home-campaign-git-line h-full w-[2px] ml-3 build-in-scale-top build-in-animate rounded-md"
            style={{
              background: "linear-gradient(#56d364, #2ea043, #0D1117)",
              transitionDelay: "500ms",
            }}
          ></div>
        </div>

        <div className="hero-textArea productivity-textArea relative mb-10 text-left ">
          <div class="col-11 col-lg-9 ml-2 ml-md-0 mb-6 mb-md-10">
            <div className="h2-animation-container">
              <h2
                class="h5-mktg mb-6 text-white  build-in-slideX-left build-in-animate font-medium"
                style={{ transitionDelay: "200ms" }}
              >
                Productivity
              </h2>
            </div>
            <h3
              class="h3-mktg mb-6 text-white font-medium "
              style={{ transitionDelay: "300ms" }}
            >
              <span class="text-accent-primary ">
                Accelerate high-quality software development.
              </span>
              Our AI-powered platform drives innovation with tools that boost
              developer velocity.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productivity;
