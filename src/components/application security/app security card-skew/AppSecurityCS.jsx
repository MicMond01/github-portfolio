import React from "react";

const AppSecurityCS = () => {
  return (
    <div className="overflow-hidden rounded-lg mb-8 mx:mb-4 z-[1] relative">
      <div className="color-bg-subtle borderNew p-10 mx:p-2 relative feature-card-mktg">
        <div className="color-fg-subtle p-6">
          <div className="f5 font-medium">cmake.yml</div>
          <span className="f6">on: push</span>
        </div>

        <div className="relative flex mx:flex-col flex-row my-10 mx:my-0 mx-auto mx:w-full w-5/6 gutter-spacious">
          <div className="col-6 w-2/4 mx:w-full">
            <div
              className="p-6 rounded-md mt-8 box-shadow-mktg-xl mb-10"
              style={{ background: "rgba(235, 245, 255, 0.2)" }}
            >
              <ul className="list-none mb-6">
                <li className="mb-6 f4-mktg flex items-center justify-between ">
                  <div className="flex items-center">
                    <svg
                      aria-hidden="true"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      width="24"
                      data-view-component="true"
                      className="octicon octicon-check-circle-fill color-fg-success mr-2"
                    >
                      <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path>
                    </svg>
                    <span className="font-medium">Build</span>
                  </div>
                  <span className="f5 color-fg-muted block sm:hidden">
                    1m 21s
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* ------------------------- */}

          <div
            className="home-campaign-ghas-connect mx:relative absolute z-1 flex items-center "
            style={{ transitionDelay: "400ms" }}
          >
            <div
              className="inline-block circle p-1 color-bg-emphasis"
              style={{ boxShadow: "0 0 0 2px #444D56" }}
            ></div>
            <div
              style={{ width: "40px", height: "2px", background: "#D1D5DA" }}
            ></div>
            <div
              className="inline-block circle p-1 color-bg-emphasis"
              style={{ boxShadow: "0 0 0 2px #444D56" }}
            ></div>
          </div>

          {/* ----------------------- */}

          <div className="col-md-6 w-1/2 mx:w-full">
            <div
              className="pt-2 pb-1 px-6 rounded-t-md inline-block font-medium"
              style={{ background: "rgba(235, 245, 255, 0.2)" }}
            >
              Steps
            </div>
            <div
              className="p-6 rounded-b-md rounded-tr-md  box-shadow-mktg-xl mb-10"
              style={{ background: "rgba(235, 245, 255, 0.2)" }}
            >
              <ul className="list-none mb-6">
                <li className="mb-6 f4-mktg flex items-center justify-between ">
                  <div className="flex items-center">
                    <svg
                      aria-hidden="true"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      width="24"
                      data-view-component="true"
                      className="octicon octicon-check-circle-fill color-fg-success mr-2"
                    >
                      <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path>
                    </svg>
                    <span className="font-medium">Initialize CodeQL</span>
                  </div>
                  <span className="f5 color-fg-muted sm:hidden block">
                    1m 42s
                  </span>
                </li>
                <li className="mb-6 f4-mktg flex items-center justify-between ">
                  <div className="flex items-center">
                    <svg
                      aria-hidden="true"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      width="24"
                      data-view-component="true"
                      className="octicon octicon-check-circle-fill color-fg-success mr-2"
                    >
                      <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path>
                    </svg>
                    <span className="text-medium">Autobuild</span>
                  </div>
                  <span className="f5 color-fg-muted sm:hidden block">
                    1m 24s
                  </span>
                </li>
                <li className="mb-6 f4-mktg flex items-center justify-between ">
                  <div className="flex items-center">
                    <svg
                      aria-hidden="true"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      width="24"
                      data-view-component="true"
                      className="octicon octicon-check-circle-fill color-fg-success mr-2"
                    >
                      <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path>
                    </svg>
                    <span className="text-medium">Perform CodeQL Analyses</span>
                  </div>
                  <span className="f5 color-fg-muted sm:hidden block">
                    1m 36s
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppSecurityCS;
