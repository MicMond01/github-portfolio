import { Button } from "@mui/material";
import React, { useEffect } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Scrollspy from "react-scrollspy";

const FixedNavBar = () => {
  //   window.onscroll = function () {
  //     scrollFunction();
  //   };

  //   function scrollFunction() {
  //     if (
  //       document.body.scrollTop > 200 ||
  //       document.documentElement.scrollTop > 200
  //     ) {
  //       document.getElementById("fixed-navbar").style.top = "0";
  //     } else {
  //       document.getElementById("fixed-navbar").style.top = "-100px";
  //     }
  //   }

  useEffect(() => {
    const targetElement = document.getElementById("productivity");

    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "100px",
      threshold: 1, // 0.5 means at least 50% of the target element must be visible
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Target element is in the viewport
          document.getElementById("fixed-navbar").style.top = "0";
        } else {
          // Target element is not in the viewport
          document.getElementById("fixed-navbar").style.top = "-100px";
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (targetElement) {
      observer.observe(targetElement);
    }

    // Cleanup the observer when the component is unmounted
    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
      }
    };
  }, []); // Empty dependency array ensures this effect runs once after initial render

  return (
    <div
      id="fixed-navbar"
      className=" sub-nav-mktg fixed z-30 w-full text-white top-0 left-0 pl-4 pr-8"
    >
      <div className="flex items-center justify-between container-xl py-4">
        <ul className="fixed-nav-items flex  f4-mktg gap-6 flex-auto lg:flex-col flex-row ">
          <Scrollspy
            items={["productivity", "collaboration", "security"]}
            currentClassName="is-current"
          >
            <li className="fixed-nav-link cursor-pointer">
              <a href="productivity">Productivity</a>
            </li>
            <li className="fixed-nav-link cursor-pointer">
              <a href="collaboration">Collaboration</a>
            </li>
            <li className="fixed-nav-link cursor-pointer">
              <a href="security">Security</a>
            </li>
          </Scrollspy>
        </ul>

        <div className="fixed-nav-buttons flex lg:ml-0 ml-4">
          <div className="fixed-nav-trialButton">
            <Button
              sx={{
                color: "white",
                borderRadius: "0.357rem ",
                fontWeight: 700,
                padding: "0.9rem 1.5rem 1.1rem",
                fontSize: "1rem",
                // border: "1px solid #424B5B",
              }}
              className=" py-4 h-[3.5rem] btn-muted-mktg btn-mktg inline-block lg:block lg:mt-2 mt-0 ml-2 lg:ml-0"
            >
              State a free enterprise trial
              <ArrowForwardIosIcon sx={{ width: 16, height: 16 }} />
            </Button>
          </div>
          <div className="fixed-nav-signup">
            <Button
              sx={{
                color: "black",
                borderRadius: "0.357rem ",
                ml: "8px",
                backgroundColor: "#f6f8fa",
                fontWeight: 700,
                padding: "0.9rem 1.5rem 1.1rem",
                fontSize: "1rem",
              }}
              className=" py-4 h-[3.5rem]  btn-mktg inline-block lg:block lg:mt-2 mt-0 ml-2 lg:ml-0"
            >
              Sing up for GitHub
              <ArrowForwardIosIcon sx={{ width: 16, height: 16 }} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedNavBar;
