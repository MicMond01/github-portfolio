import React from "react";
import Copilot from "./Copilot";

const Introduction = () => {
  return (
    <div>
      <div className="introducing relative container-xl">
        <Copilot />

        <main class="font-mktg">
          <div
            class="overflow-hidden"
            data-color-mode="dark"
            data-light-theme="light"
            data-dark-theme="dark"
          >
            <div class="container-xl position-relative">
              <picture>
                <source
                  media="(max-width: 768px)"
                  type="image/webp"
                  srcset="https://github.githubassets.com/assets/hero-bg-md-8b05fcf46a30.webp 1x, https://github.githubassets.com/assets/hero-bg-e49a8e86f714.webp 2x"
                />
                <source
                  media="(min-width: 1280px)"
                  type="image/webp"
                  srcset="https://github.githubassets.com/assets/hero-bg-e49a8e86f714.webp 1x, https://github.githubassets.com/assets/hero-bg-2x-a94895520866.webp 2x"
                />

                <img
                  alt=""
                  aria-hidden="true"
                  width="4377"
                  class="position-absolute top-0 events-none"
                  style="right: -1050px; max-width: calc(230vw + 1670px)"
                  src="https://github.githubassets.com/assets/hero-bg-e49a8e86f714.webp"
                />
              </picture>
            </div>

            <div class="px-3 home-campaign-hero">
              <div 
                class="position-relative pt-3 pt-md-8 pt-lg-12 container-xl js-build-in-trigger"
                data-hpc=""
              >
                <img
                  src="https://github.githubassets.com/assets/hero-drone-6f6778300d9b.webp"
                  alt=""
                  class="home-drone position-absolute top-12 right-0 events-none col-3 height-auto js-build-in-item"
                  width="500"
                  height="326"
                />

                <div class="d-flex">
                  <div class="col-1 d-flex flex-column events-none position-relative">
                    <img
                      alt=""
                      aria-hidden="true"
                      class="home-campaign-lines-hero position-relative"
                      width="437"
                      height="637"
                      src="https://github.githubassets.com/assets/lines-hero-6c09abf3dd42.svg"
                    />

                    <div class="mx-auto my-3 home-campaign-glowing-icon">
                      <div class="position-relative d-inline-block z-1">
                        <svg
                          aria-hidden="true"
                          height="24"
                          viewBox="0 0 24 24"
                          version="1.1"
                          width="24"
                          data-view-component="true"
                          class="octicon octicon-code"
                        >
                          <path d="M15.22 4.97a.75.75 0 0 1 1.06 0l6.5 6.5a.75.75 0 0 1 0 1.06l-6.5 6.5a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L21.19 12l-5.97-5.97a.75.75 0 0 1 0-1.06Zm-6.44 0a.75.75 0 0 1 0 1.06L2.81 12l5.97 5.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.5-6.5a.75.75 0 0 1 0-1.06l6.5-6.5a.75.75 0 0 1 1.06 0Z"></path>
                        </svg>
                        <span
                          class="position-absolute left-0 top-0 height-full width-full home-campaign-glowing-icon-glow z-n1"
                          style="background-color: var(--mktg-accent-primary); filter: blur(17px);"
                        ></span>
                      </div>
                    </div>

                    <div
                      style="background: linear-gradient(#d2a8ff, #a371f7 10%, #196c2e 70%, #2ea043 80%, #56d364);"
                      class="home-campaign-git-line height-full rounded mx-auto"
                    ></div>
                  </div>

                  <div class="col-11 text-left pt-12 mt-12 pl-2 pl-sm-0">
                    <div class="position-relative top-md-8 z-1">
                      <a
                        class="eyebrow-banner d-inline-block no-underline color-fg-on-emphasis f5-mktg mb-4 border position-relative z-1 arrow-target-mktg text-left"
                        data-analytics-event='{"category":"Eyebrow Banner","action":"click","label":"ref_cta:GitHub Universe: Dive in to AI, security, and DevEx;ref_loc:hero;"}'
                        href="https://githubuniverse.com/?utm_source=github&amp;utm_medium=banner&amp;utm_campaign=bannerlo"
                      >
                        <div class="d-flex flex-items-center">
                          <picture>
                            <source
                              srcset="https://github.githubassets.com/assets/eyebrow-23@2x-563f292d9e30.png?width=44&amp;format=webpll 44w,https://github.githubassets.com/assets/eyebrow-23@2x-563f292d9e30.png?width=35&amp;format=webpll 35w,https://github.githubassets.com/assets/eyebrow-23@2x-563f292d9e30.png?width=26&amp;format=webpll 26w,https://github.githubassets.com/assets/eyebrow-23@2x-563f292d9e30.png?width=22&amp;format=webpll 22w,https://github.githubassets.com/assets/eyebrow-23@2x-563f292d9e30.png?width=17&amp;format=webpll 17w,https://github.githubassets.com/assets/eyebrow-23@2x-563f292d9e30.png?width=8&amp;format=webpll 8w"
                              sizes="44px"
                              type="image/webp"
                            />
                            <source
                              srcset="https://github.githubassets.com/assets/eyebrow-23@2x-563f292d9e30.png 44w,https://github.githubassets.com/assets/eyebrow-23@2x-563f292d9e30.png?width=22 22w,https://github.githubassets.com/assets/eyebrow-23@2x-563f292d9e30.png?width=17 17w,https://github.githubassets.com/assets/eyebrow-23@2x-563f292d9e30.png?width=11 11w"
                              sizes="44px"
                              type="image/png"
                            />
                            <img
                              class="eyebrow-banner-icon d-block width-auto flex-grow-0 flex-shrink-0 mr-3"
                              width="44"
                              height="44"
                              loading="lazy"
                              decoding="async"
                              alt=""
                              aria-hidden="true"
                              src="https://github.githubassets.com/assets/eyebrow-23@2x-563f292d9e30.png"
                            />
                          </picture>
                          <div class="pr-3 mr-md-1 pl-md-1">
                            <div class="text-semibold lh-condensed">
                              GitHub Universe: Dive in to AI, security, and
                              DevEx
                            </div>
                            <div
                              class="color-fg-subtle lh-condensed"
                              data-test-selector="subtitle"
                            >
                              Get your tickets now to join us on Nov. 8-9.
                            </div>
                          </div>

                          <div class="ml-auto">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="octicon arrow-symbol-mktg"
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
                                class="octicon-chevrow-stem"
                                stroke="currentColor"
                                d="M1.75 8H11"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </a>
                    </div>

                    <h1 class="h0-mktg mt-sm-6 mt-md-11 mt-lg-9 mb-2 mb-sm-4 position-relative z-2">
                      Let’s build from&nbsp;here
                    </h1>

                    <p class="f1-mktg col-11 col-lg-10 text-normal color-fg-muted mr-lg-n4 mb-3 mb-md-4 mb-md-7 position-relative z-1">
                      The AI-powered developer platform to build, scale, and
                      deliver secure&nbsp;software.
                    </p>

                    <form
                      data-turbo="false"
                      class="mx-0 col-12 col-md-5 js-signup-form position-relative z-2"
                      autocomplete="off"
                      action="/signup"
                      accept-charset="UTF-8"
                      method="get"
                    >
                      {" "}
                      <div class="d-flex flex-column flex-md-row flex-items-center">
                        <dl class="col-12 my-0 mb-3 mb-md-0 flex-auto">
                          <dt>
                            <label for="user_email" class="sr-only">
                              Email address
                            </label>
                          </dt>
                          <dd>
                            <input
                              data-color-mode="light"
                              data-light-theme="light"
                              data-dark-theme="dark"
                              class="form-control f4-mktg width-full rounded-md-right-0"
                              style="height: 3rem"
                              placeholder="Email address"
                              type="email"
                              name="user_email"
                              id="user_email"
                              autocomplete="off"
                              spellcheck="false"
                            />
                          </dd>
                        </dl>
                        <input
                          type="hidden"
                          name="source"
                          value="form-home-signup"
                        />
                        <button
                          class="btn-mktg width-full width-md-auto mb-3 mb-md-0 rounded-md-left-0 home-campaign-signup-button btn-signup-mktg"
                          data-analytics-event='{"category":"Home campaign","action":"click to Sign up for GitHub","label":"ref_page:/;ref_cta:Sign up for GitHub;ref_loc:hero"}'
                          type="submit"
                        >
                          Sign up for GitHub
                        </button>
                      </div>
                    </form>

                    <div class="border-top border-md-left mx-md-3 mb-3 mb-md-0"></div>

                    <a
                      class="btn-mktg home-campaign-enterprise btn-muted-mktg"
                      data-analytics-event='{"category":"Start a free enterprise trial","action":"click to Start a free enterprise trial","label":"ref_cta:Start a free enterprise trial;"}'
                      href="/organizations/enterprise_plan?ref_cta=Start+a+free+enterprise+trial&amp;ref_loc=Home+campaign+hero&amp;ref_page=%2F"
                      data-test-selector="start-trial-button"
                    >
                      Start a free enterprise trial
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="octicon arrow-symbol-mktg"
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
                          class="octicon-chevrow-stem"
                          stroke="currentColor"
                          d="M1.75 8H11"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        ></path>
                      </svg>
                    </a>
                  </div>

                  <div class="my-10 my-md-12 build-in-animate col-12">
                    <p class="d-block color-fg-subtle f4-mktg">
                      Trusted by the world’s leading&nbsp;organizations&nbsp;↘︎
                    </p>

                    <div class="d-flex flex-wrap flex-justify-around flex-md-justify-between flex-items-center col-12 col-lg-11">
                      <img
                        src="https://github.githubassets.com/assets/stripe-e33f3c583b14.svg"
                        alt="Stripe logo"
                        height="44"
                        class="my-3"
                      />
                      <img
                        src="https://github.githubassets.com/assets/pinterest-20e7451b691f.svg"
                        alt="Pinterest logo"
                        height="44"
                        class="my-3"
                      />
                      <div class="col-12 d-sm-none"></div>
                      <img
                        src="https://github.githubassets.com/assets/kpmg-c249f20c5173.svg"
                        alt="KPMG logo"
                        height="44"
                        class="my-3"
                      />
                      <div class="col-12 d-none d-sm-block d-md-none"></div>
                      <img
                        src="https://github.githubassets.com/assets/mercedes-fcf97d2d6ec4.svg"
                        alt="Mercedes-Benz logo"
                        height="44"
                        class="my-3"
                      />
                      <div class="col-12 d-sm-none"></div>
                      <img
                        src="https://github.githubassets.com/assets/pg-f1f19955c4e4.svg"
                        alt="P&amp;G logo"
                        height="32"
                        class="my-3"
                      />
                      <img
                        src="https://github.githubassets.com/assets/telus-df0c2109df99.svg"
                        alt="Telus logo"
                        height="32"
                        class="my-3"
                      />
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>

          <div class="position-absolute">
            <div
              class="sub-nav-mktg js-toggler-container z-3 js-position-sticky top-0 width-full init-hidden scrollnav is-placeholder"
              data-original-top="0px"
              style="visibility: hidden; display: block; height: 65px; top: 0px !important;"
            ></div>
            <div
              class="sub-nav-mktg js-toggler-container z-3 js-sticky js-position-sticky top-0 width-full init-hidden scrollnav is-stuck"
              data-original-top="0px"
              style="top: -426px; position: fixed; left: 0px; width: 861.938px; margin-top: 0px;"
            >
              <div class="sub-nav-mktg-wrapper d-flex flex-items-center py-3 p-responsive container-xl">
                <button
                  type="button"
                  class="btn-octicon sub-nav-mktg-toggle d-lg-none p-1 flex-order-1 float-right js-toggler-target mr-n1"
                  aria-label="Toggle page navigation"
                >
                  <svg
                    aria-hidden="true"
                    height="24"
                    viewBox="0 0 24 24"
                    version="1.1"
                    width="24"
                    data-view-component="true"
                    class="octicon octicon-chevron-down on-hidden"
                  >
                    <path d="M5.22 8.22a.749.749 0 0 0 0 1.06l6.25 6.25a.749.749 0 0 0 1.06 0l6.25-6.25a.749.749 0 1 0-1.06-1.06L12 13.939 6.28 8.22a.749.749 0 0 0-1.06 0Z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    height="24"
                    viewBox="0 0 24 24"
                    version="1.1"
                    width="24"
                    data-view-component="true"
                    class="octicon octicon-x on-visible"
                  >
                    <path d="M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L13.06 12l5.22 5.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L12 13.06l-5.22 5.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06Z"></path>
                  </svg>
                </button>

                <div class="sub-nav-mktg-links flex-auto f4-mktg d-flex flex-column flex-lg-row gap-4">
                  <a
                    class="sub-nav-mktg-link Link--primary no-underline py-1 py-lg-2 js-scrollnav-item js-smoothscroll-anchor selected"
                    data-analytics-event='{"category":"Homepage","action":"click item to scroll to Productivity","label":"ref_cta:Productivity;"}'
                    href="#productivity"
                  >
                    Productivity
                  </a>
                  <a
                    class="sub-nav-mktg-link Link--primary no-underline py-1 py-lg-2 js-scrollnav-item js-smoothscroll-anchor"
                    data-analytics-event='{"category":"Homepage","action":"click item to scroll to Collaboration","label":"ref_cta:Collaboration;"}'
                    href="#collaboration"
                  >
                    Collaboration
                  </a>
                  <a
                    class="sub-nav-mktg-link Link--primary no-underline py-1 py-lg-2 js-scrollnav-item js-smoothscroll-anchor"
                    data-analytics-event='{"category":"Homepage","action":"click item to scroll to Security","label":"ref_cta:Security;"}'
                    href="#security"
                  >
                    Security
                  </a>
                </div>

                <div class="sub-nav-mktg-ctas ml-lg-3">
                  <a
                    class="btn-mktg ml-lg-2 mt-2 mt-lg-0 d-block d-lg-inline-block btn-muted-mktg"
                    data-analytics-event='{"category":"Homepage","action":"click to Start a free enterprise trial","label":"ref_cta:Start a free enterprise trial;ref_loc:Homepage;"}'
                    href="/organizations/enterprise_plan?ref_cta=Start+a+free+enterprise+trial&amp;ref_loc=homepage+sticky+nav&amp;ref_page=%2F"
                  >
                    Start a free enterprise trial
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="octicon arrow-symbol-mktg"
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
                        class="octicon-chevrow-stem"
                        stroke="currentColor"
                        d="M1.75 8H11"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </a>
                  <a
                    class="btn-mktg ml-lg-2 mt-2 mt-lg-0 d-block d-lg-inline-block"
                    data-analytics-event='{"category":"Homepage","action":"click to Sign up for GitHub","label":"ref_cta:Sign up for GitHub;ref_loc:Homepage;"}'
                    href="/join?ref_cta=Sign+up+for+GitHub&amp;ref_loc=homepage+sticky+nav&amp;ref_page=%2F&amp;source=homepage-sticky-nav"
                  >
                    Sign up for GitHub
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="octicon arrow-symbol-mktg"
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
                        class="octicon-chevrow-stem"
                        stroke="currentColor"
                        d="M1.75 8H11"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            class="home-campaign-productivity js-section overflow-hidden px-3 pb-8 pt-5"
            data-color-mode="dark"
            data-light-theme="light"
            data-dark-theme="dark"
            id="productivity"
          >
            <div class="container-xl">
              <div
                class="d-flex js-build-in-trigger build-in-animate"
                data-build-in-stagger="100"
              >
                <div class="col-1 d-flex flex-column flex-items-center">
                  <div
                    class="mb-4 position-relative home-campaign-glowing-icon js-build-in-item build-in-scale-fade build-in-animate"
                    style="transition-delay: 0ms;"
                  >
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
                      class="position-absolute left-0 top-0 height-full width-full home-campaign-glowing-icon-glow z-n1"
                      style="background-color: var(--mktg-accent-primary); filter: blur(18px);"
                    ></span>
                  </div>

                  <div
                    class="home-campaign-git-line height-full rounded js-build-in-item build-in-scale-top build-in-animate"
                    style="background: linear-gradient(#56d364, #2ea043, var(--color-canvas-default)); transition-delay: 500ms;"
                    data-build-delay="500"
                  ></div>
                </div>

                <div class="col-11 col-lg-9 ml-2 ml-md-0 mb-6 mb-md-10">
                  <h2
                    class="h5-mktg mb-4 text-medium js-build-in-item build-in-slideX-left build-in-animate"
                    style="transition-delay: 200ms;"
                  >
                    Productivity
                  </h2>
                  <h3
                    class="h3-mktg mb-4 text-medium js-build-in-item build-in-slideX-left build-in-animate"
                    style="transition-delay: 300ms;"
                  >
                    <span class="text-accent-primary">
                      Accelerate high-quality software development.
                    </span>
                    Our AI-powered platform drives innovation with tools that
                    boost developer velocity.
                  </h3>
                </div>
              </div>

              <div class="rounded-3 border box-shadow-active-border-inverse-mktg color-bg-subtle overflow-hidden position-relative">
                <div class="d-flex flex-items-center flex-justify-between border-bottom p-3">
                  <div class="d-none d-md-block">
                    <svg
                      aria-hidden="true"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      width="24"
                      data-view-component="true"
                      class="octicon octicon-chevron-left color-fg-muted"
                    >
                      <path d="M15.28 5.22a.75.75 0 0 1 0 1.06L9.56 12l5.72 5.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.25-6.25a.75.75 0 0 1 0-1.06l6.25-6.25a.75.75 0 0 1 1.06 0Z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      width="24"
                      data-view-component="true"
                      class="octicon octicon-chevron-right color-fg-muted"
                    >
                      <path d="M8.72 18.78a.75.75 0 0 1 0-1.06L14.44 12 8.72 6.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path>
                    </svg>
                  </div>
                  <div class="d-flex flex-items-center flex-justify-between border px-2 py-1 rounded color-bg-default width-full width-md-auto">
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      class="octicon octicon-lock color-fg-subtle"
                    >
                      <path d="M4 4a4 4 0 0 1 8 0v2h.25c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 12.25 15h-8.5A1.75 1.75 0 0 1 2 13.25v-5.5C2 6.784 2.784 6 3.75 6H4Zm8.25 3.5h-8.5a.25.25 0 0 0-.25.25v5.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25ZM10.5 6V4a2.5 2.5 0 1 0-5 0v2Z"></path>
                    </svg>
                    <div class="px-2 px-md-8 text-truncate">
                      mona-github-github-g59jpq2w5w7.github.dev
                    </div>
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      class="octicon octicon-sync color-fg-subtle"
                    >
                      <path d="M1.705 8.005a.75.75 0 0 1 .834.656 5.5 5.5 0 0 0 9.592 2.97l-1.204-1.204a.25.25 0 0 1 .177-.427h3.646a.25.25 0 0 1 .25.25v3.646a.25.25 0 0 1-.427.177l-1.38-1.38A7.002 7.002 0 0 1 1.05 8.84a.75.75 0 0 1 .656-.834ZM8 2.5a5.487 5.487 0 0 0-4.131 1.869l1.204 1.204A.25.25 0 0 1 4.896 6H1.25A.25.25 0 0 1 1 5.75V2.104a.25.25 0 0 1 .427-.177l1.38 1.38A7.002 7.002 0 0 1 14.95 7.16a.75.75 0 0 1-1.49.178A5.5 5.5 0 0 0 8 2.5Z"></path>
                    </svg>
                  </div>
                  <div class="d-none d-md-block">
                    <svg
                      aria-hidden="true"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      width="24"
                      data-view-component="true"
                      class="octicon octicon-plus color-fg-muted"
                    >
                      <path d="M11.75 4.5a.75.75 0 0 1 .75.75V11h5.75a.75.75 0 0 1 0 1.5H12.5v5.75a.75.75 0 0 1-1.5 0V12.5H5.25a.75.75 0 0 1 0-1.5H11V5.25a.75.75 0 0 1 .75-.75Z"></path>
                    </svg>
                  </div>
                </div>

                <div class="d-flex flex-items-stretch">
                  <div class="d-none d-lg-block p-4 border-right">
                    <svg
                      aria-hidden="true"
                      height="24"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="24"
                      data-view-component="true"
                      class="octicon octicon-three-bars color-fg-muted"
                    >
                      <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
                    </svg>
                  </div>

                  <div class="col-md-6 min-width-0">
                    <div class="border-bottom">
                      <ul class="list-style-none d-flex px-3 pt-3">
                        <li class="px-3 py-2 color-bg-default rounded-top-2">
                          index.html
                        </li>
                        <li class="px-3 py-2 color-fg-muted">script.js</li>
                        <li class="px-3 py-2 color-fg-muted">package.json</li>
                      </ul>

                      <div class="color-bg-default p-4 f4 text-mono">
                        <div class="d-flex ">
                          <div
                            class="color-fg-subtle text-right user-select-none"
                            style=""
                          >
                            <div class="pr-2">1</div>
                            <div class="pr-2">2</div>
                            <div class="pr-2">3</div>
                            <div class="pr-2">4</div>
                            <div class="pr-2">5</div>
                            <div class="pr-2">6</div>
                            <div class="pr-2">7</div>
                            <div class="pr-2">8</div>
                            <div class="pr-2">9</div>
                            <div class="pr-2">10</div>
                            <div class="pr-2">11</div>
                            <div class="pr-2">12</div>
                          </div>

                          <div class="flex-1 overflow-x-auto" tabindex="0">
                            <pre class="f4">
                              <span class="code-editor-line-mktg d-inline-block js-type-letters">
                                &lt;<span class="pl-ent">div</span>{" "}
                                <span class="pl-e">class</span>=
                                <span class="pl-s">
                                  <span class="pl-pds">"</span>position-absolute
                                  width-full color-bg-default
                                  <span class="pl-pds">"</span>
                                </span>{" "}
                                <span class="pl-e">style</span>=
                                <span class="pl-s">
                                  <span class="pl-pds">"</span>
                                  <span class="pl-s1">
                                    <span class="pl-c1">
                                      <span class="pl-c1">bottom</span>
                                    </span>
                                    :{" "}
                                    <span class="pl-c1">
                                      -4<span class="pl-k">rem</span>
                                    </span>
                                    ;
                                  </span>
                                  <span class="pl-pds">"</span>
                                </span>
                                &gt;
                              </span>
                            </pre>
                            <pre class="f4">
                              <span class="code-editor-line-mktg d-inline-block js-type-letters">
                                {" "}
                                &lt;<span class="pl-ent">div</span>{" "}
                                <span class="pl-e">class</span>=
                                <span class="pl-s">
                                  <span class="pl-pds">"</span>container-xl
                                  p-responsive<span class="pl-pds">"</span>
                                </span>
                                &gt;
                              </span>
                            </pre>
                            <pre class="f4">
                              <span class="code-editor-line-mktg d-inline-block js-type-letters">
                                {" "}
                                &lt;<span class="pl-ent">div</span>{" "}
                                <span class="pl-e">class</span>=
                                <span class="pl-s">
                                  <span class="pl-pds">"</span>d-flex
                                  flex-justify-center flex-lg-justify-end
                                  color-bg-default<span class="pl-pds">"</span>
                                </span>
                                &gt;
                              </span>
                            </pre>
                            <pre class="f4">
                              <span class="code-editor-line-mktg d-inline-block js-type-letters">
                                {" "}
                                &lt;<span class="pl-ent">div</span>{" "}
                                <span class="pl-e">class</span>=
                                <span class="pl-s">
                                  <span class="pl-pds">"</span>col-8 col-sm-7
                                  col-md-6 col-lg-5 position-relative z-2
                                  right-lg-n12 events-none
                                  <span class="pl-pds">"</span>
                                </span>
                                &gt;
                              </span>
                            </pre>
                            <pre class="f4">
                              <span class="code-editor-line-mktg d-inline-block js-type-letters">
                                {" "}
                                &lt;<span class="pl-ent">picture</span>&gt;
                              </span>
                            </pre>
                            <pre class="f4">
                              <span class="code-editor-line-mktg d-inline-block js-type-letters">
                                {" "}
                                &lt;<span class="pl-ent">source</span>{" "}
                                <span class="pl-e">srcset</span>=
                                <span class="pl-s">
                                  <span class="pl-pds">"</span>astro-mona.webp
                                  <span class="pl-pds">"</span>
                                </span>{" "}
                                <span class="pl-e">type</span>=
                                <span class="pl-s">
                                  <span class="pl-pds">"</span>image/webp
                                  <span class="pl-pds">"</span>
                                </span>
                                &gt;
                              </span>
                            </pre>
                            <pre class="f4">
                              <span class="code-editor-line-mktg d-inline-block js-type-letters">
                                {" "}
                                &lt;<span class="pl-ent">img</span>{" "}
                                <span class="pl-e">src</span>=
                                <span class="pl-s">
                                  <span class="pl-pds">"</span>astro-mona.svg
                                  <span class="pl-pds">"</span>
                                </span>{" "}
                                <span class="pl-e">width</span>=
                                <span class="pl-s">
                                  <span class="pl-pds">"</span>960
                                  <span class="pl-pds">"</span>
                                </span>{" "}
                                <span class="pl-e">height</span>=
                                <span class="pl-s">
                                  <span class="pl-pds">"</span>967
                                  <span class="pl-pds">"</span>
                                </span>{" "}
                                <span class="pl-e">class</span>=
                                <span class="pl-s">
                                  <span class="pl-pds">"</span>home-astro-mona
                                  width-full position-absolute bottom-0
                                  height-auto<span class="pl-pds">"</span>
                                </span>{" "}
                                <span class="pl-e">alt</span>=
                                <span class="pl-s">
                                  <span class="pl-pds">"</span>Mona looking at
                                  GitHub activity across the globe
                                  <span class="pl-pds">"</span>
                                </span>
                                &gt;
                              </span>
                            </pre>
                            <pre class="f4">
                              <span class="code-editor-line-mktg d-inline-block js-type-letters">
                                {" "}
                                &lt;/<span class="pl-ent">picture</span>&gt;
                              </span>
                            </pre>
                            <pre class="f4">
                              <span class="code-editor-line-mktg d-inline-block js-type-letters">
                                {" "}
                                &lt;/<span class="pl-ent">div</span>&gt;
                              </span>
                            </pre>
                            <pre class="f4">
                              <span class="code-editor-line-mktg d-inline-block js-type-letters">
                                {" "}
                                &lt;/<span class="pl-ent">div</span>&gt;
                              </span>
                            </pre>
                            <pre class="f4">
                              <span class="code-editor-line-mktg d-inline-block js-type-letters">
                                {" "}
                                &lt;/<span class="pl-ent">div</span>&gt;
                              </span>
                            </pre>
                            <pre class="f4">
                              <span class="code-editor-line-mktg d-inline-block js-type-letters">
                                &lt;/<span class="pl-ent">div</span>&gt;
                              </span>
                            </pre>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="p-4">
                      <ul class="list-style-none d-flex mb-3">
                        <li class="pr-3">Terminal</li>
                        <li class="pr-3 color-fg-muted">Output</li>
                        <li class="pr-3 color-fg-muted">Problems</li>
                        <li class="pr-3 color-fg-muted">Debug Console</li>
                      </ul>

                      <div
                        class="overflow-hidden f5 text-mono color-fg-muted js-type-in-trigger build-in-animate"
                        data-type-row-delay="50"
                      >
                        <div
                          class="no-wrap js-type-row row-is-visible"
                          style="visibility: visible;"
                        >
                          [<span class="color-fg-subtle">09:43:36</span>]
                          <span>Starting</span>'
                          <span class="color-fg-accent">
                            watch-extension:vscode-api-tests
                          </span>
                          ' ...
                        </div>
                        <div
                          class="no-wrap js-type-row row-is-visible"
                          style="visibility: visible;"
                        >
                          [<span class="color-fg-subtle">09:43:36</span>]
                          <span>Finished</span>'
                          <span class="color-fg-accent">
                            clean-extension:typescript-language-features
                          </span>
                          ' after
                          <span class="color-fg-done">248 ms</span>
                        </div>
                        <div
                          class="no-wrap js-type-row row-is-visible"
                          style="visibility: visible;"
                        >
                          [<span class="color-fg-subtle">09:43:36</span>]
                          <span>Starting</span>'
                          <span class="color-fg-accent">
                            watch-extension:typescript-language-features
                          </span>
                          ' ...
                        </div>
                        <div
                          class="no-wrap js-type-row row-is-visible"
                          style="visibility: visible;"
                        >
                          [<span class="color-fg-subtle">09:43:36</span>]
                          <span>Finished</span>'
                          <span class="color-fg-accent">
                            clean-extension:php-language-features
                          </span>
                          ' after
                          <span class="color-fg-done">384 ms</span>
                        </div>
                        <div
                          class="no-wrap js-type-row row-is-visible"
                          style="visibility: visible;"
                        >
                          [<span class="color-fg-subtle">09:43:36</span>]
                          <span>Starting</span>'
                          <span class="color-fg-accent">
                            watch-extension:php-language-features
                          </span>
                          ' ...
                        </div>
                        <div
                          class="no-wrap js-type-row row-is-visible"
                          style="visibility: visible;"
                        >
                          [<span class="color-fg-subtle">09:43:40</span>]
                          <span>Finished</span>'
                          <span class="color-fg-accent">
                            clean-extension:html-language-features-server
                          </span>
                          ' after
                          <span class="color-fg-done">4.66 s</span>
                        </div>
                        <div
                          class="no-wrap js-type-row row-is-visible"
                          style="visibility: visible;"
                        >
                          [<span class="color-fg-subtle">09:43:40</span>]
                          <span>Starting</span>'
                          <span class="color-fg-accent">
                            watch-extension:html-language-features-server
                          </span>
                          ' ...
                        </div>
                        <div
                          class="no-wrap js-type-row row-is-visible"
                          style="visibility: visible;"
                        >
                          [<span class="color-fg-subtle">09:43:43</span>]
                          <span>Finished</span>'
                          <span class="color-fg-accent">clean-client</span>'
                          after
                          <span class="color-fg-done">7.33 s</span>
                        </div>
                        <div
                          class="no-wrap js-type-row row-is-visible"
                          style="visibility: visible;"
                        >
                          [<span class="color-fg-subtle">09:43:43</span>]
                          <span>Starting</span>'
                          <span class="color-fg-accent">watch-client</span>' ...
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6 d-none d-md-block border-left">
                    <div class="d-flex flex-items-center flex-justify-between px-3 pt-3 pb-2">
                      <div>
                        <svg
                          aria-hidden="true"
                          height="16"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="16"
                          data-view-component="true"
                          class="octicon octicon-three-bars"
                        >
                          <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
                        </svg>
                      </div>
                      <div>
                        <svg
                          aria-hidden="true"
                          height="24"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="24"
                          data-view-component="true"
                          class="octicon octicon-mark-github"
                        >
                          <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                        </svg>
                      </div>
                      <div>
                        <svg
                          aria-hidden="true"
                          height="16"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="16"
                          data-view-component="true"
                          class="octicon octicon-bell"
                        >
                          <path d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Zm5-3.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01l.001.006c0 .002.002.004.004.006l.006.004.007.001h10.964l.007-.001.006-.004.004-.006.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.745 1.745 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5Z"></path>
                        </svg>
                      </div>
                    </div>

                    <div
                      class="height-full d-flex flex-items-center flex-justify-between px-6 js-build-in-trigger build-in-animate"
                      style="background: #040D21;"
                    >
                      <picture>
                        <source
                          srcset="https://github.githubassets.com/assets/globe-d6f3f4ee645a.jpg 1238w,https://github.githubassets.com/assets/globe-d6f3f4ee645a.jpg?width=990 990w,https://github.githubassets.com/assets/globe-d6f3f4ee645a.jpg?width=742 742w,https://github.githubassets.com/assets/globe-d6f3f4ee645a.jpg?width=619 619w,https://github.githubassets.com/assets/globe-d6f3f4ee645a.jpg?width=495 495w,https://github.githubassets.com/assets/globe-d6f3f4ee645a.jpg?width=247 247w"
                          sizes="(max-width: 600px) 90vw, 595px"
                          type="image/jpeg"
                        />
                        <img
                          class="width-full height-auto d-block js-build-in-item build-in-scale-up build-in-animate"
                          width="1238"
                          height="1404"
                          loading="lazy"
                          decoding="async"
                          alt="Planet earth with visualization of GitHub activity crossing the globe"
                          src="https://github.githubassets.com/assets/globe-d6f3f4ee645a.jpg"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="d-flex js-build-in-trigger position-relative"
                data-build-in-stagger="100"
              >
                <img
                  alt=""
                  aria-hidden="true"
                  width="2712"
                  height="2712"
                  class="position-absolute top-0 right-0 height-auto col-11 events-none"
                  loading="lazy"
                  decoding="async"
                  src="https://github.githubassets.com/assets/bg-stars-1-af032966b34f.webp"
                />

                <div class="col-1 d-flex flex-column flex-items-center position-relative">
                  <div
                    class="home-campaign-git-line height-full position-relative z-1 js-build-in-item build-in-scale-top"
                    style="transition-duration: 900ms; background: linear-gradient(var(--color-canvas-default), #2ea043, #2ea043, var(--color-canvas-default)); transition-delay: 0ms;"
                  ></div>
                  <img
                    alt=""
                    aria-hidden="true"
                    width="81"
                    height="485"
                    style="left: calc(50% - 2px); height: auto; max-width: 9vw; transition-delay: 100ms;"
                    class="d-none d-md-block position-absolute bottom-4 js-build-in-item build-in-scale-fade"
                    loading="lazy"
                    decoding="async"
                    src="https://github.githubassets.com/assets/git-branch-productivity-c304b83d09c7.svg"
                  />
                </div>

                <div class="col-11 ml-2 ml-md-6">
                  <div
                    class="river-mktg js-build-in-trigger d-flex gutter gutter-spacious my-5 my-sm-7 my-md-8 position-relative flex-column-reverse flex-md-items-center flex-md-row flex-column pb-4 pb-md-7"
                    data-build-in-stagger="100"
                  >
                    <div
                      class="col-12 py-3 mb-2 js-build-in-item col-sm-10 col-md-6 text-left col-lg-6 build-in-slideX-right"
                      style="transition-delay: 0ms;"
                    >
                      <div class="pr-md-4">
                        <h2 class="color-fg-default mb-3 f2-mktg color-fg-muted">
                          <em>GitHub Codespaces</em> offers a complete dev
                          environment in seconds, so you can code, build, test,
                          and open pull requests from any repo anywhere.
                        </h2>

                        <a
                          class="link-mktg text-semibold color-fg-default py-1 f3-mktg"
                          href="/features/codespaces"
                          data-analytics-event='{"category":"Check out GitHub Codespaces","action":"click to Check out GitHub Codespaces","label":"ref_cta:Check out GitHub Codespaces;"}'
                        >
                          Check out GitHub Codespaces{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="octicon arrow-symbol-mktg"
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
                              class="octicon-chevrow-stem"
                              stroke="currentColor"
                              d="M1.75 8H11"
                              stroke-width="1.5"
                              stroke-linecap="round"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>

                    <div class="col-12 py-3 col-md-6 col-lg-6">
                      <div class="position-relative">
                        <div class="d-flex flex-column position-relative">
                          <div
                            class="js-build-in-item build-in-slideX-left box-shadow-card-dark-mktg overflow-hidden rounded-2 position-relative z-2 flex-self-end"
                            style="max-width: 300px; margin-top: -30%; margin-right: 10%; transition-delay: 100ms;"
                          >
                            <img
                              src="https://github.githubassets.com/assets/illo-context-menu-51a3417d6621.png"
                              alt=""
                              width="600"
                              height="524"
                              loading="lazy"
                              decoding="async"
                              class="width-full d-block height-auto"
                            />
                            <img
                              src="https://github.githubassets.com/assets/illo-cursor-ad4eda534eba.png"
                              alt=""
                              loading="lazy"
                              decoding="async"
                              class="position-absolute js-build-in-item build-in-slideX-left height-auto"
                              width="60"
                              height="96"
                              style="right: 20%; bottom: 23%; width: 30px; transition-delay: 200ms;"
                            />
                          </div>
                          <div
                            class="js-build-in-item build-in-slideX-right box-shadow-card-dark-mktg overflow-hidden rounded-2 position-relative z-1 d-none d-sm-block"
                            style="max-width: 373px; margin-top: -20%; transition-delay: 300ms;"
                          >
                            <img
                              src="https://github.githubassets.com/assets/illo-ports-cb650eaf237c.png"
                              loading="lazy"
                              width="746"
                              height="368"
                              alt=""
                              decoding="async"
                              class="width-full d-block height-auto"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mb-6 mb-md-12 pb-3 js-build-in-trigger">
                    <div
                      class="py-3 js-build-in-item col-sm-10 col-md-6 text-left col-lg-6 build-in-slideX-left"
                      style="transition-delay: 600ms;"
                    >
                      <div
                        class="gradient-border-mktg d-inline-block z-1 position-relative px-2 lh-condensed f6-mktg"
                        style="top: -1px"
                      >
                        <span class="text-gradient-mktg text-semibold">
                          Did you know?
                        </span>
                      </div>

                      <h3 class="text-accent-primary mb-2 mt-3 h2-mktg text-medium">
                        22% increase
                      </h3>
                      <p class="mb-3 f3-mktg text-medium col-6-max">
                        in developer productivity
                        <br />
                        after three years with GitHub<sup>1</sup>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="position-relative z-1">
                <card-skew
                  class="overflow-hidden rounded-3 mb-3 mb-md-5"
                  data-catalyst=""
                  data-perspective="700"
                >
                  <div
                    class="feature-card-mktg d-md-flex rounded-3 color-bg-subtle border position-relative flex-justify-between z-1 height-full flex-row"
                    data-target="card-skew.bounding"
                  >
                    <div class="d-md-flex flex-column flex-1 p-5 p-sm-6 py-lg-8 pl-lg-8 pr-lg-12 col-md-6 flex-justify-between">
                      <p class="f2-mktg text-medium color-fg-muted mb-4">
                        <em>GitHub Copilot</em> is your AI pair programmer that
                        empowers you to complete tasks 55% faster by turning
                        natural language prompts into coding suggestions.
                      </p>

                      <div>
                        {" "}
                        <a
                          class="link-mktg text-semibold color-fg-default py-1 f3-mktg"
                          href="/features/copilot"
                          data-analytics-event='{"category":"Meet GitHub Copilot","action":"click to Meet GitHub Copilot","label":"ref_cta:Meet GitHub Copilot;"}'
                        >
                          Meet GitHub Copilot{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="octicon arrow-symbol-mktg"
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
                              class="octicon-chevrow-stem"
                              stroke="currentColor"
                              d="M1.75 8H11"
                              stroke-width="1.5"
                              stroke-linecap="round"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>

                    <div class="overflow-hidden col-md-6 rounded-right-3">
                      <div class="color-bg-subtle rounded-3 border text-left mb-8 ml-3 ml-sm-6 ml-md-0 mt-md-6 mr-3 mr-sm-6 box-shadow-card-mktg">
                        <tab-container>
                          <div class="tabnav pt-2 px-2 mb-0">
                            <nav
                              class="tabnav-tabs"
                              aria-label="Code editor files"
                              role="tablist"
                            >
                              <button
                                name="button"
                                type="button"
                                role="tab"
                                id="draw_scatterplot-py"
                                aria-selected="true"
                                class="tabnav-tab"
                                tabindex="0"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  role="img"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  class="octicon"
                                  width="16"
                                  height="16"
                                >
                                  <title>Python</title>
                                  <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"></path>
                                </svg>

                                <span>draw_scatterplot.py</span>
                              </button>{" "}
                              <button
                                name="button"
                                type="button"
                                role="tab"
                                id="time-js"
                                aria-selected="false"
                                class="tabnav-tab"
                                tabindex="0"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  role="img"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  class="octicon"
                                  width="16"
                                  height="16"
                                >
                                  <title>JavaScript</title>
                                  <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"></path>
                                </svg>

                                <span>time.js</span>
                              </button>{" "}
                              <button
                                name="button"
                                type="button"
                                role="tab"
                                id="memoize-go"
                                aria-selected="false"
                                class="tabnav-tab"
                                tabindex="0"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  role="img"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  class="octicon"
                                  width="16"
                                  height="16"
                                >
                                  <title>Go</title>
                                  <path d="M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07zm2.828 1.075c-.047 0-.059-.035-.035-.07l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082zm12.129-2.36c-.736.187-1.239.327-1.963.514-.176.046-.187.058-.34-.117-.174-.199-.303-.327-.548-.444-.737-.362-1.45-.257-2.115.175-.795.514-1.204 1.274-1.192 2.22.011.935.654 1.706 1.577 1.835.795.105 1.46-.175 1.987-.77.105-.13.198-.27.315-.434H10.47c-.245 0-.304-.152-.222-.35.152-.362.432-.97.596-1.274a.315.315 0 01.292-.187h4.253c-.023.316-.023.631-.07.947a4.983 4.983 0 01-.958 2.29c-.841 1.11-1.94 1.8-3.33 1.986-1.145.152-2.209-.07-3.143-.77-.865-.655-1.356-1.52-1.484-2.595-.152-1.274.222-2.419.993-3.424.83-1.086 1.928-1.776 3.272-2.02 1.098-.2 2.15-.07 3.096.571.62.41 1.063.97 1.356 1.648.07.105.023.164-.117.2m3.868 6.461c-1.064-.024-2.034-.328-2.852-1.029a3.665 3.665 0 01-1.262-2.255c-.21-1.32.152-2.489.947-3.529.853-1.122 1.881-1.706 3.272-1.95 1.192-.21 2.314-.095 3.33.595.923.63 1.496 1.484 1.648 2.605.198 1.578-.257 2.863-1.344 3.962-.771.783-1.718 1.273-2.805 1.495-.315.06-.63.07-.934.106zm2.78-4.72c-.011-.153-.011-.27-.034-.387-.21-1.157-1.274-1.81-2.384-1.554-1.087.245-1.788.935-2.045 2.033-.21.912.234 1.835 1.075 2.21.643.28 1.285.244 1.905-.07.923-.48 1.425-1.228 1.484-2.233z"></path>
                                </svg>

                                <span>memoize.go</span>
                              </button>{" "}
                            </nav>
                          </div>
                          <div
                            role="tabpanel"
                            aria-labelledby="draw_scatterplot-py"
                            class="code-editor-component position-relative text-mono color-bg-default rounded-bottom-3 f4 p-3 js-type-in"
                          >
                            <div class="d-flex ">
                              <div
                                class="color-fg-subtle text-right user-select-none"
                                style=""
                              >
                                <div class="pr-2">1</div>
                                <div class="pr-2">2</div>
                                <div class="pr-2">3</div>
                                <div class="pr-2">4</div>
                                <div class="pr-2">5</div>
                                <div class="pr-2">6</div>
                                <div class="pr-2">7</div>
                                <div class="pr-2">8</div>
                              </div>

                              <div class="flex-1 overflow-x-auto" tabindex="0">
                                <pre class="f4">
                                  <span class="code-editor-line-mktg d-inline-block">
                                    <span class="pl-k">import</span>{" "}
                                    <span class="pl-s1">matplotlib</span>.
                                    <span class="pl-s1">pyplot</span>{" "}
                                    <span class="pl-k">as</span>{" "}
                                    <span class="pl-s1">plt</span>
                                  </span>
                                </pre>
                                <pre class="f4">
                                  <span class="code-editor-line-mktg d-inline-block"></span>
                                </pre>
                                <pre class="f4">
                                  <span class="code-editor-line-mktg d-inline-block">
                                    <span
                                      class="pl-k js-type-letters"
                                      style="visibility: hidden;"
                                    >
                                      def
                                    </span>
                                    <span
                                      class="js-type-letters"
                                      style="visibility: hidden;"
                                    >
                                      {" "}
                                    </span>
                                    <span
                                      class="pl-en js-type-letters"
                                      style="visibility: hidden;"
                                    >
                                      draw_scatterplot
                                    </span>
                                    <span
                                      class="js-type-letters"
                                      style="visibility: hidden;"
                                    >
                                      (
                                    </span>
                                    <span
                                      class="pl-s1 js-type-letters"
                                      style="visibility: hidden;"
                                    >
                                      x_values
                                    </span>
                                    <span
                                      class="js-type-letters"
                                      style="visibility: hidden;"
                                    >
                                      ,{" "}
                                    </span>
                                    <span
                                      class="pl-s1 js-type-letters"
                                      style="visibility: hidden;"
                                    >
                                      y_values
                                    </span>
                                    <span
                                      class="js-type-letters"
                                      style="visibility: hidden;"
                                    >
                                      ):
                                    </span>
                                  </span>
                                </pre>
                                <pre class="f4">
                                  <span
                                    class="code-editor-line-mktg d-inline-block js-type-row code-editor-line-suggested-mktg color-bg-accent"
                                    data-type-row-delay="0"
                                    style="visibility: hidden;"
                                  >
                                    {" "}
                                    <span class="pl-s1">plt</span>.
                                    <span class="pl-en">scatter</span>(
                                    <span class="pl-s1">x_values</span>,{" "}
                                    <span class="pl-s1">y_values</span>,{" "}
                                    <span class="pl-s1">s</span>
                                    <span class="pl-c1">=</span>
                                    <span class="pl-c1">20</span>)
                                  </span>
                                </pre>
                                <pre class="f4">
                                  <span
                                    class="code-editor-line-mktg d-inline-block js-type-row code-editor-line-suggested-mktg color-bg-accent"
                                    data-type-row-delay="0"
                                    style="visibility: hidden;"
                                  >
                                    {" "}
                                    <span class="pl-s1">plt</span>.
                                    <span class="pl-en">title</span>(
                                    <span class="pl-s">"Scatter Plot"</span>)
                                  </span>
                                </pre>
                                <pre class="f4">
                                  <span
                                    class="code-editor-line-mktg d-inline-block js-type-row code-editor-line-suggested-mktg color-bg-accent"
                                    data-type-row-delay="0"
                                    style="visibility: hidden;"
                                  >
                                    {" "}
                                    <span class="pl-s1">plt</span>.
                                    <span class="pl-en">xlabel</span>(
                                    <span class="pl-s">"x values"</span>)
                                  </span>
                                </pre>
                                <pre class="f4">
                                  <span
                                    class="code-editor-line-mktg d-inline-block js-type-row code-editor-line-suggested-mktg color-bg-accent"
                                    data-type-row-delay="0"
                                    style="visibility: hidden;"
                                  >
                                    {" "}
                                    <span class="pl-s1">plt</span>.
                                    <span class="pl-en">ylabel</span>(
                                    <span class="pl-s">"y values"</span>)
                                  </span>
                                </pre>
                                <pre class="f4">
                                  <span
                                    class="code-editor-line-mktg d-inline-block js-type-row code-editor-line-suggested-mktg color-bg-accent"
                                    data-type-row-delay="0"
                                    style="visibility: hidden;"
                                  >
                                    {" "}
                                    <span class="pl-s1">plt</span>.
                                    <span class="pl-en">show</span>()
                                  </span>
                                </pre>

                                <div
                                  class="copilot-marker position-absolute color-fg-on-emphasis rounded color-bg-accent-emphasis text-bold d-flex flex-items-center js-type-row p-2 f5"
                                  style="visibility: hidden;"
                                >
                                  <svg
                                    width="16"
                                    height="15"
                                    viewBox="0 0 16 15"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    class="mr-1"
                                  >
                                    <path d="M5.5 8.75282C5.5 8.33863 5.83569 8.00282 6.25 8.00282C6.66415 8.00282 7 8.33861 7 8.75282V10.2489C7 10.6631 6.66431 10.9989 6.25 10.9989C5.83569 10.9989 5.5 10.6631 5.5 10.2489V8.75282Z"></path>
                                    <path d="M10.5 8.75282C10.5 8.33863 10.1643 8.00282 9.75 8.00282C9.33551 8.00282 9 8.33881 9 8.75282V10.2489C9 10.6631 9.33569 10.9989 9.75 10.9989C10.1643 10.9989 10.5 10.6631 10.5 10.2489V8.75282Z"></path>
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M5.04443 0.0297942C6.05371 -0.0606599 7.3667 0.00708908 8 0.919809C8.6333 0.00708908 9.94629 -0.0606599 10.9556 0.0297942C12.1118 0.145761 13.0854 0.543222 13.6328 1.12708C14.5825 2.1648 14.6267 4.34144 14.1685 5.5398C14.2146 5.74464 14.2585 5.95216 14.29 6.17176C15.1366 6.39482 16 7.59408 16 8.45167V10.0717C16 10.5215 15.79 10.9314 15.4199 11.2114C13.3044 12.7835 10.6672 14.0012 8 14.0012C5.33276 14.0012 2.69556 12.7835 0.580078 11.2114C0.209961 10.9314 0 10.5215 0 10.0717V8.45167C0 7.59408 0.863428 6.39482 1.70996 6.17176C1.7416 5.95216 1.7855 5.74461 1.83154 5.5398C1.37329 4.34144 1.41748 2.1648 2.36719 1.12708C2.91455 0.543222 3.88818 0.145761 5.04443 0.0297942ZM8 12.5014C9.93994 12.5014 11.8501 11.6426 13 11.0028V6.65907C11.1445 7.37782 9.00928 7.00721 8.00146 5.34229H7.99854C6.99072 7.00721 4.85547 7.37782 3 6.65907V11.0028C4.1499 11.6426 6.06006 12.5014 8 12.5014ZM5 5.49879C6.64062 5.49879 7 4.20582 7 3.01832C7 1.91517 6.8125 1.50392 5.53125 1.50392C3.31396 1.50392 3.04688 2.25282 3.04688 4.00282C3.04688 5.10597 3.35938 5.49879 5 5.49879ZM11 5.49879C9.35938 5.49879 9 4.20582 9 3.01832C9 1.91517 9.1875 1.50392 10.4688 1.50392C12.686 1.50392 12.9531 2.25282 12.9531 4.00282C12.9531 5.10597 12.6406 5.49879 11 5.49879Z"
                                    ></path>
                                  </svg>
                                  Copilot
                                </div>
                              </div>
                            </div>

                            <div
                              class="position-absolute width-full z-1 text-center bottom-0 left-0 mb-n6 f5-mktg js-type-row"
                              style="visibility: hidden;"
                            >
                              <button
                                type="button"
                                data-view-component="true"
                                class="js-type-restart btn-link color-fg-default no-underline"
                              >
                                {" "}
                                <svg
                                  aria-hidden="true"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  version="1.1"
                                  width="16"
                                  data-view-component="true"
                                  class="octicon octicon-sync mr-2"
                                >
                                  <path d="M1.705 8.005a.75.75 0 0 1 .834.656 5.5 5.5 0 0 0 9.592 2.97l-1.204-1.204a.25.25 0 0 1 .177-.427h3.646a.25.25 0 0 1 .25.25v3.646a.25.25 0 0 1-.427.177l-1.38-1.38A7.002 7.002 0 0 1 1.05 8.84a.75.75 0 0 1 .656-.834ZM8 2.5a5.487 5.487 0 0 0-4.131 1.869l1.204 1.204A.25.25 0 0 1 4.896 6H1.25A.25.25 0 0 1 1 5.75V2.104a.25.25 0 0 1 .427-.177l1.38 1.38A7.002 7.002 0 0 1 14.95 7.16a.75.75 0 0 1-1.49.178A5.5 5.5 0 0 0 8 2.5Z"></path>
                                </svg>
                                Replay
                              </button>{" "}
                            </div>
                          </div>{" "}
                          <div
                            role="tabpanel"
                            aria-labelledby="time-js"
                            hidden="hidden"
                            class="code-editor-component position-relative text-mono color-bg-default rounded-bottom-3 f4 p-3 js-type-in"
                          >
                            <div class="d-flex ">
                              <div
                                class="color-fg-subtle text-right user-select-none"
                                style=""
                              >
                                <div class="pr-2">1</div>
                                <div class="pr-2">2</div>
                                <div class="pr-2">3</div>
                                <div class="pr-2">4</div>
                                <div class="pr-2">5</div>
                                <div class="pr-2">6</div>
                                <div class="pr-2">7</div>
                              </div>

                              <div class="flex-1 overflow-x-auto" tabindex="0">
                                <pre class="f4">
                                  <span class="code-editor-line-mktg d-inline-block">
                                    <span class="pl-k">const</span>{" "}
                                    <span class="pl-s1">seconds</span>{" "}
                                    <span class="pl-c1">=</span>{" "}
                                    <span class="pl-c1">3600</span>
                                  </span>
                                </pre>
                                <pre class="f4">
                                  <span class="code-editor-line-mktg d-inline-block">
                                    <span
                                      class="pl-k js-type-letters"
                                      style="visibility: hidden;"
                                    >
                                      const
                                    </span>
                                    <span
                                      class="js-type-letters"
                                      style="visibility: hidden;"
                                    >
                                      {" "}
                                    </span>
                                    <span
                                      class="pl-s1 js-type-letters"
                                      style="visibility: hidden;"
                                    >
                                      minutes
                                    </span>
                                    <span
                                      class="js-type-letters"
                                      style="visibility: hidden;"
                                    >
                                      {" "}
                                    </span>
                                    <span
                                      class="pl-c1 js-type-letters"
                                      style="visibility: hidden;"
                                    >
                                      =
                                    </span>
                                    <span
                                      class="js-type-letters"
                                      style="visibility: hidden;"
                                    >
                                      {" "}
                                    </span>
                                    <span
                                      class="pl-s1 js-type-letters"
                                      style="visibility: hidden;"
                                    >
                                      seconds
                                    </span>
                                    <span
                                      class="js-type-letters"
                                      style="visibility: hidden;"
                                    >
                                      {" "}
                                    </span>
                                    <span
                                      class="pl-c1 js-type-letters"
                                      style="visibility: hidden;"
                                    >
                                      /
                                    </span>
                                    <span
                                      class="js-type-letters"
                                      style="visibility: hidden;"
                                    >
                                      {" "}
                                    </span>
                                    <span
                                      class="pl-c1 js-type-letters"
                                      style="visibility: hidden;"
                                    >
                                      60
                                    </span>
                                  </span>
                                </pre>
                                <pre class="f4">
                                  <span
                                    class="code-editor-line-mktg d-inline-block js-type-row code-editor-line-suggested-mktg color-bg-accent"
                                    data-type-row-delay="0"
                                    style="visibility: hidden;"
                                  >
                                    <span class="pl-k">const</span>{" "}
                                    <span class="pl-s1">hours</span>{" "}
                                    <span class="pl-c1">=</span>{" "}
                                    <span class="pl-s1">minutes</span>{" "}
                                    <span class="pl-c1">/</span>{" "}
                                    <span class="pl-c1">60</span>
                                  </span>
                                </pre>
                                <pre class="f4">
                                  <span
                                    class="code-editor-line-mktg d-inline-block js-type-row code-editor-line-suggested-mktg color-bg-accent"
                                    data-type-row-delay="0"
                                    style="visibility: hidden;"
                                  >
                                    <span class="pl-k">const</span>{" "}
                                    <span class="pl-s1">days</span>{" "}
                                    <span class="pl-c1">=</span>{" "}
                                    <span class="pl-s1">hours</span>{" "}
                                    <span class="pl-c1">/</span>{" "}
                                    <span class="pl-c1">24</span>
                                  </span>
                                </pre>
                                <pre class="f4">
                                  <span
                                    class="code-editor-line-mktg d-inline-block js-type-row code-editor-line-suggested-mktg color-bg-accent"
                                    data-type-row-delay="0"
                                    style="visibility: hidden;"
                                  >
                                    <span class="pl-k">const</span>{" "}
                                    <span class="pl-s1">weeks</span>{" "}
                                    <span class="pl-c1">=</span>{" "}
                                    <span class="pl-s1">days</span>{" "}
                                    <span class="pl-c1">/</span>{" "}
                                    <span class="pl-c1">7</span>
                                  </span>
                                </pre>
                                <pre class="f4">
                                  <span
                                    class="code-editor-line-mktg d-inline-block js-type-row code-editor-line-suggested-mktg color-bg-accent"
                                    data-type-row-delay="0"
                                    style="visibility: hidden;"
                                  >
                                    <span class="pl-k">const</span>{" "}
                                    <span class="pl-s1">months</span>{" "}
                                    <span class="pl-c1">=</span>{" "}
                                    <span class="pl-s1">days</span>{" "}
                                    <span class="pl-c1">/</span>{" "}
                                    <span class="pl-c1">30</span>
                                  </span>
                                </pre>
                                <pre class="f4">
                                  <span
                                    class="code-editor-line-mktg d-inline-block js-type-row code-editor-line-suggested-mktg color-bg-accent"
                                    data-type-row-delay="0"
                                    style="visibility: hidden;"
                                  >
                                    <span class="pl-k">const</span>{" "}
                                    <span class="pl-s1">years</span>{" "}
                                    <span class="pl-c1">=</span>{" "}
                                    <span class="pl-s1">months</span>{" "}
                                    <span class="pl-c1">/</span>{" "}
                                    <span class="pl-c1">12</span>
                                  </span>
                                </pre>

                                <div
                                  class="copilot-marker position-absolute color-fg-on-emphasis rounded color-bg-accent-emphasis text-bold d-flex flex-items-center js-type-row p-2 f5"
                                  style="visibility: hidden;"
                                >
                                  <svg
                                    width="16"
                                    height="15"
                                    viewBox="0 0 16 15"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    class="mr-1"
                                  >
                                    <path d="M5.5 8.75282C5.5 8.33863 5.83569 8.00282 6.25 8.00282C6.66415 8.00282 7 8.33861 7 8.75282V10.2489C7 10.6631 6.66431 10.9989 6.25 10.9989C5.83569 10.9989 5.5 10.6631 5.5 10.2489V8.75282Z"></path>
                                    <path d="M10.5 8.75282C10.5 8.33863 10.1643 8.00282 9.75 8.00282C9.33551 8.00282 9 8.33881 9 8.75282V10.2489C9 10.6631 9.33569 10.9989 9.75 10.9989C10.1643 10.9989 10.5 10.6631 10.5 10.2489V8.75282Z"></path>
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M5.04443 0.0297942C6.05371 -0.0606599 7.3667 0.00708908 8 0.919809C8.6333 0.00708908 9.94629 -0.0606599 10.9556 0.0297942C12.1118 0.145761 13.0854 0.543222 13.6328 1.12708C14.5825 2.1648 14.6267 4.34144 14.1685 5.5398C14.2146 5.74464 14.2585 5.95216 14.29 6.17176C15.1366 6.39482 16 7.59408 16 8.45167V10.0717C16 10.5215 15.79 10.9314 15.4199 11.2114C13.3044 12.7835 10.6672 14.0012 8 14.0012C5.33276 14.0012 2.69556 12.7835 0.580078 11.2114C0.209961 10.9314 0 10.5215 0 10.0717V8.45167C0 7.59408 0.863428 6.39482 1.70996 6.17176C1.7416 5.95216 1.7855 5.74461 1.83154 5.5398C1.37329 4.34144 1.41748 2.1648 2.36719 1.12708C2.91455 0.543222 3.88818 0.145761 5.04443 0.0297942ZM8 12.5014C9.93994 12.5014 11.8501 11.6426 13 11.0028V6.65907C11.1445 7.37782 9.00928 7.00721 8.00146 5.34229H7.99854C6.99072 7.00721 4.85547 7.37782 3 6.65907V11.0028C4.1499 11.6426 6.06006 12.5014 8 12.5014ZM5 5.49879C6.64062 5.49879 7 4.20582 7 3.01832C7 1.91517 6.8125 1.50392 5.53125 1.50392C3.31396 1.50392 3.04688 2.25282 3.04688 4.00282C3.04688 5.10597 3.35938 5.49879 5 5.49879ZM11 5.49879C9.35938 5.49879 9 4.20582 9 3.01832C9 1.91517 9.1875 1.50392 10.4688 1.50392C12.686 1.50392 12.9531 2.25282 12.9531 4.00282C12.9531 5.10597 12.6406 5.49879 11 5.49879Z"
                                    ></path>
                                  </svg>
                                  Copilot
                                </div>
                              </div>
                            </div>

                            <div
                              class="position-absolute width-full z-1 text-center bottom-0 left-0 mb-n6 f5-mktg js-type-row"
                              style="visibility: hidden;"
                            >
                              <button
                                type="button"
                                data-view-component="true"
                                class="js-type-restart btn-link color-fg-default no-underline"
                              >
                                {" "}
                                <svg
                                  aria-hidden="true"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  version="1.1"
                                  width="16"
                                  data-view-component="true"
                                  class="octicon octicon-sync mr-2"
                                >
                                  <path d="M1.705 8.005a.75.75 0 0 1 .834.656 5.5 5.5 0 0 0 9.592 2.97l-1.204-1.204a.25.25 0 0 1 .177-.427h3.646a.25.25 0 0 1 .25.25v3.646a.25.25 0 0 1-.427.177l-1.38-1.38A7.002 7.002 0 0 1 1.05 8.84a.75.75 0 0 1 .656-.834ZM8 2.5a5.487 5.487 0 0 0-4.131 1.869l1.204 1.204A.25.25 0 0 1 4.896 6H1.25A.25.25 0 0 1 1 5.75V2.104a.25.25 0 0 1 .427-.177l1.38 1.38A7.002 7.002 0 0 1 14.95 7.16a.75.75 0 0 1-1.49.178A5.5 5.5 0 0 0 8 2.5Z"></path>
                                </svg>
                                Replay
                              </button>{" "}
                            </div>
                          </div>{" "}
                          <div
                            role="tabpanel"
                            aria-labelledby="memoize-go"
                            hidden="hidden"
                            class="code-editor-component position-relative text-mono color-bg-default rounded-bottom-3 f4 p-3 js-type-in"
                          >
                            <div class="d-flex ">
                              <div
                                class="color-fg-subtle text-right user-select-none"
                                style=""
                              >
                                <div class="pr-2">1</div>
                                <div class="pr-2">2</div>
                                <div class="pr-2">3</div>
                                <div class="pr-2">4</div>
                                <div class="pr-2">5</div>
                                <div class="pr-2">6</div>
                                <div class="pr-2">7</div>
                                <div class="pr-2">8</div>
                                <div class="pr-2">9</div>
                                <div class="pr-2">10</div>
                                <div class="pr-2">11</div>
                              </div>

                              {/* <div class="flex-1 overflow-x-auto" tabindex="0">
        <pre class="f4"><span class="code-editor-line-mktg d-inline-block"><span class="pl-k">package</span> main</span></pre>
        <pre class="f4"><span class="code-editor-line-mktg d-inline-block"><span class="js-type-letters" style="visibility: hidden;">  </span><span class="pl-k js-type-letters" style="visibility: hidden;">func</span><span class="js-type-letters" style="visibility: hidden;"> </span><span class="pl-en js-type-letters" style="visibility: hidden;">Memoize</span><span class="js-type-letters" style="visibility: hidden;">(</span><span class="pl-s1 js-type-letters" style="visibility: hidden;">fn</span><span class="js-type-letters" style="visibility: hidden;"> </span><span class="pl-k js-type-letters" style="visibility: hidden;">func</span><span class="js-type-letters" style="visibility: hidden;">(</span><span class="pl-smi js-type-letters" style="visibility: hidden;">int</span><span class="js-type-letters" style="visibility: hidden;">) </span><span class="pl-smi js-type-letters" style="visibility: hidden;">int</span><span class="js-type-letters" style="visibility: hidden;">) </span><span class="pl-k js-type-letters" style="visibility: hidden;">func</span><span class="js-type-letters" style="visibility: hidden;">(</span><span class="pl-smi js-type-letters" style="visibility: hidden;">int</span><span class="js-type-letters" style="visibility: hidden;">) </span><span class="pl-smi js-type-letters" style="visibility: hidden;">int</span><span class="js-type-letters" style="visibility: hidden;"> {</span></span></pre>
        <pre class="f4"><span class="code-editor-line-mktg d-inline-block js-type-row code-editor-line-suggested-mktg color-bg-accent" data-type-row-delay="0" style="visibility: hidden;">      <span class="pl-s1">cache</span> <span class="pl-c1">:=</span> <span class="pl-en">make</span>(<span class="pl-k">map</span>[<span class="pl-smi">int</span>]<span class="pl-smi">int</span>)</span></pre>
        <pre class="f4"><span class="code-editor-line-mktg d-inline-block js-type-row code-editor-line-suggested-mktg color-bg-accent" data-type-row-delay="0" style="visibility: hidden;">      <span class="pl-k">return</span> <span class="pl-k">func</span>(<span class="pl-s1">n</span> <span class="pl-smi">int</span>) <span class="pl-smi">int</span> {</span></pre>
        <pre class="f4"><span class="code-editor-line-mktg d-inline-block js-type-row code-editor-line-suggested-mktg color-bg-accent" data-type-row-delay="0" style="visibility: hidden;">          <span class="pl-k">if</span> <span class="pl-s1">v</span>, <span class="pl-s1">ok</span> <span class="pl-c1">:=</span> <span class="pl-s1">cache</span>[<span class="pl-s1">n</span>]; <span class="pl-s1">ok</span> {</span></pre>
        <pre class="f4"><span class="code-editor-line-mktg d-inline-block js-type-row code-editor-line-suggested-mktg color-bg-accent" data-type-row-delay="0" style="visibility: hidden;">              <span class="pl-k">return</span> <span class="pl-s1">v</span></span></pre>
        <pre class="f4"><span class="code-editor-line-mktg d-inline-block js-type-row code-editor-line-suggested-mktg color-bg-accent" data-type-row-delay="0" style="visibility: hidden;">          }</span></pre>
        <pre class="f4"><span class="code-editor-line-mktg d-inline-block js-type-row code-editor-line-suggested-mktg color-bg-accent" data-type-row-delay="0" style="visibility: hidden;">          <span class="pl-s1">cache</span>[<span class="pl-s1">n</span>] <span class="pl-c1">=</span> <span class="pl-en">fn</span>(<span class="pl-s1">n</span>)</span></pre>
        <pre class="f4"><span class="code-editor-line-mktg d-inline-block js-type-row code-editor-line-suggested-mktg color-bg-accent" data-type-row-delay="0" style="visibility: hidden;">          <span class="pl-k">return</span> <span class="pl-s1">cache</span>[<span class="pl-s1">n</span>]</span></pre>
        <pre class="f4"><span class="code-editor-line-mktg d-inline-block js-type-row code-editor-line-suggested-mktg color-bg-accent" data-type-row-delay="0" style="visibility: hidden;">      }</span></pre>
        <pre class="f4"><span class="code-editor-line-mktg d-inline-block js-type-row code-editor-line-suggested-mktg color-bg-accent" data-type-row-delay="0" style="visibility: hidden;">  }</span></pre>

      <div class="copilot-marker position-absolute color-fg-on-emphasis rounded color-bg-accent-emphasis text-bold d-flex flex-items-center js-type-row p-2 f5" style="visibility: hidden;">
        <svg width="16" height="15" viewBox="0 0 16 15" fill="currentColor" aria-hidden="true" class="mr-1"><path d="M5.5 8.75282C5.5 8.33863 5.83569 8.00282 6.25 8.00282C6.66415 8.00282 7 8.33861 7 8.75282V10.2489C7 10.6631 6.66431 10.9989 6.25 10.9989C5.83569 10.9989 5.5 10.6631 5.5 10.2489V8.75282Z"></path><path d="M10.5 8.75282C10.5 8.33863 10.1643 8.00282 9.75 8.00282C9.33551 8.00282 9 8.33881 9 8.75282V10.2489C9 10.6631 9.33569 10.9989 9.75 10.9989C10.1643 10.9989 10.5 10.6631 10.5 10.2489V8.75282Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5.04443 0.0297942C6.05371 -0.0606599 7.3667 0.00708908 8 0.919809C8.6333 0.00708908 9.94629 -0.0606599 10.9556 0.0297942C12.1118 0.145761 13.0854 0.543222 13.6328 1.12708C14.5825 2.1648 14.6267 4.34144 14.1685 5.5398C14.2146 5.74464 14.2585 5.95216 14.29 6.17176C15.1366 6.39482 16 7.59408 16 8.45167V10.0717C16 10.5215 15.79 10.9314 15.4199 11.2114C13.3044 12.7835 10.6672 14.0012 8 14.0012C5.33276 14.0012 2.69556 12.7835 0.580078 11.2114C0.209961 10.9314 0 10.5215 0 10.0717V8.45167C0 7.59408 0.863428 6.39482 1.70996 6.17176C1.7416 5.95216 1.7855 5.74461 1.83154 5.5398C1.37329 4.34144 1.41748 2.1648 2.36719 1.12708C2.91455 0.543222 3.88818 0.145761 5.04443 0.0297942ZM8 12.5014C9.93994 12.5014 11.8501 11.6426 13 11.0028V6.65907C11.1445 7.37782 9.00928 7.00721 8.00146 5.34229H7.99854C6.99072 7.00721 4.85547 7.37782 3 6.65907V11.0028C4.1499 11.6426 6.06006 12.5014 8 12.5014ZM5 5.49879C6.64062 5.49879 7 4.20582 7 3.01832C7 1.91517 6.8125 1.50392 5.53125 1.50392C3.31396 1.50392 3.04688 2.25282 3.04688 4.00282C3.04688 5.10597 3.35938 5.49879 5 5.49879ZM11 5.49879C9.35938 5.49879 9 4.20582 9 3.01832C9 1.91517 9.1875 1.50392 10.4688 1.50392C12.686 1.50392 12.9531 2.25282 12.9531 4.00282C12.9531 5.10597 12.6406 5.49879 11 5.49879Z"></path></svg>

        Copilot
      </div>
  </div> */}
                            </div>

                            <div
                              class="position-absolute width-full z-1 text-center bottom-0 left-0 mb-n6 f5-mktg js-type-row"
                              style="visibility: hidden;"
                            >
                              <button
                                type="button"
                                data-view-component="true"
                                class="js-type-restart btn-link color-fg-default no-underline"
                              >
                                {" "}
                                <svg
                                  aria-hidden="true"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  version="1.1"
                                  width="16"
                                  data-view-component="true"
                                  class="octicon octicon-sync mr-2"
                                >
                                  <path d="M1.705 8.005a.75.75 0 0 1 .834.656 5.5 5.5 0 0 0 9.592 2.97l-1.204-1.204a.25.25 0 0 1 .177-.427h3.646a.25.25 0 0 1 .25.25v3.646a.25.25 0 0 1-.427.177l-1.38-1.38A7.002 7.002 0 0 1 1.05 8.84a.75.75 0 0 1 .656-.834ZM8 2.5a5.487 5.487 0 0 0-4.131 1.869l1.204 1.204A.25.25 0 0 1 4.896 6H1.25A.25.25 0 0 1 1 5.75V2.104a.25.25 0 0 1 .427-.177l1.38 1.38A7.002 7.002 0 0 1 14.95 7.16a.75.75 0 0 1-1.49.178A5.5 5.5 0 0 0 8 2.5Z"></path>
                                </svg>
                                Replay
                              </button>{" "}
                            </div>
                          </div>{" "}
                        </tab-container>
                      </div>
                    </div>

                    <div
                      data-target="card-skew.shine"
                      class="position-absolute bottom-0 right-0 events-none z-n1"
                    ></div>
                  </div>{" "}
                </card-skew>
              </div>

              <div class="d-flex flex-column flex-md-row gutter js-build-in-trigger">
                <div class="col-md-6 d-flex">
                  <card-skew
                    class="overflow-hidden rounded-3 mb-3 mb-md-5"
                    data-catalyst=""
                    data-perspective="700"
                  >
                    <div
                      class="feature-card-mktg d-md-flex rounded-3 color-bg-subtle border position-relative flex-justify-between z-1 height-full flex-column"
                      data-target="card-skew.bounding"
                    >
                      <div class="d-md-flex flex-column flex-1 p-5 p-sm-6 py-lg-8 pl-lg-8 pr-lg-12 flex-justify-start">
                        <p class="f2-mktg text-medium color-fg-muted mb-4">
                          <em>GitHub Actions</em> automates your build, test,
                          and deployment workflow with simple and secure CI/CD.
                        </p>

                        <div>
                          {" "}
                          <a
                            class="link-mktg text-semibold color-fg-default py-1 f3-mktg"
                            href="/features/actions"
                            data-analytics-event='{"category":"Discover GitHub Actions","action":"click to Discover GitHub Actions","label":"ref_cta:Discover GitHub Actions;"}'
                          >
                            Discover GitHub Actions{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="octicon arrow-symbol-mktg"
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
                                class="octicon-chevrow-stem"
                                stroke="currentColor"
                                d="M1.75 8H11"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div class="overflow-hidden rounded-bottom-3">
                        <picture>
                          <source
                            srcset="https://github.githubassets.com/images/modules/site/home-campaign/illu-actions.png?width=1209&amp;format=webpll 1209w,https://github.githubassets.com/images/modules/site/home-campaign/illu-actions.png?width=967&amp;format=webpll 967w,https://github.githubassets.com/images/modules/site/home-campaign/illu-actions.png?width=725&amp;format=webpll 725w,https://github.githubassets.com/images/modules/site/home-campaign/illu-actions.png?width=604&amp;format=webpll 604w,https://github.githubassets.com/images/modules/site/home-campaign/illu-actions.png?width=483&amp;format=webpll 483w,https://github.githubassets.com/images/modules/site/home-campaign/illu-actions.png?width=241&amp;format=webpll 241w"
                            sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 604px"
                            type="image/webp"
                          />
                          <source
                            srcset="https://github.githubassets.com/images/modules/site/home-campaign/illu-actions.png 1209w,https://github.githubassets.com/images/modules/site/home-campaign/illu-actions.png?width=604 604w,https://github.githubassets.com/images/modules/site/home-campaign/illu-actions.png?width=483 483w,https://github.githubassets.com/images/modules/site/home-campaign/illu-actions.png?width=302 302w"
                            sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 604px"
                            type="image/png"
                          />
                          <img
                            class="width-full d-block height-auto js-build-in-item build-in-scale-fade"
                            width="1209"
                            height="890"
                            loading="lazy"
                            decoding="async"
                            alt=""
                            aria-hidden="true"
                            src="https://github.githubassets.com/images/modules/site/home-campaign/illu-actions.png"
                          />
                        </picture>
                      </div>

                      <div
                        data-target="card-skew.shine"
                        class="position-absolute bottom-0 right-0 events-none z-n1"
                      ></div>
                    </div>{" "}
                  </card-skew>
                </div>

                <div class="col-md-6 d-flex">
                  <card-skew
                    class="overflow-hidden rounded-3 mb-3 mb-md-5"
                    data-catalyst=""
                    data-perspective="700"
                  >
                    <div
                      class="feature-card-mktg d-md-flex rounded-3 color-bg-subtle border position-relative flex-justify-between z-1 height-full flex-column"
                      data-target="card-skew.bounding"
                    >
                      <div class="d-md-flex flex-column flex-1 p-5 p-sm-6 py-lg-8 pl-lg-8 pr-lg-12 flex-justify-start">
                        <p class="f2-mktg text-medium color-fg-muted mb-4">
                          <em>GitHub Mobile</em> fits your projects in your
                          pocket, so you never miss a beat while on the go.
                        </p>

                        <div>
                          {" "}
                          <a
                            class="link-mktg text-semibold color-fg-default py-1 f3-mktg"
                            href="/mobile"
                            data-analytics-event='{"category":"Get GitHub Mobile","action":"click to Get GitHub Mobile","label":"ref_cta:Get GitHub Mobile;"}'
                          >
                            Get GitHub Mobile{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="octicon arrow-symbol-mktg"
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
                                class="octicon-chevrow-stem"
                                stroke="currentColor"
                                d="M1.75 8H11"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div class="overflow-hidden rounded-bottom-3">
                        <picture>
                          <source
                            srcset="https://github.githubassets.com/assets/illu-mobile-4d51d19f769e.png?width=1208&amp;format=webpll 1208w,https://github.githubassets.com/assets/illu-mobile-4d51d19f769e.png?width=966&amp;format=webpll 966w,https://github.githubassets.com/assets/illu-mobile-4d51d19f769e.png?width=724&amp;format=webpll 724w,https://github.githubassets.com/assets/illu-mobile-4d51d19f769e.png?width=604&amp;format=webpll 604w,https://github.githubassets.com/assets/illu-mobile-4d51d19f769e.png?width=483&amp;format=webpll 483w,https://github.githubassets.com/assets/illu-mobile-4d51d19f769e.png?width=241&amp;format=webpll 241w"
                            sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 604px"
                            type="image/webp"
                          />
                          <source
                            srcset="https://github.githubassets.com/assets/illu-mobile-4d51d19f769e.png 1208w,https://github.githubassets.com/assets/illu-mobile-4d51d19f769e.png?width=604 604w,https://github.githubassets.com/assets/illu-mobile-4d51d19f769e.png?width=483 483w,https://github.githubassets.com/assets/illu-mobile-4d51d19f769e.png?width=302 302w"
                            sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 604px"
                            type="image/png"
                          />
                          <img
                            class="width-full d-block height-auto js-build-in-item build-in-scale-fade"
                            width="1208"
                            height="764"
                            loading="lazy"
                            decoding="async"
                            alt=""
                            aria-hidden="true"
                            src="https://github.githubassets.com/assets/illu-mobile-4d51d19f769e.png"
                          />
                        </picture>
                      </div>

                      <div
                        data-target="card-skew.shine"
                        class="position-absolute bottom-0 right-0 events-none z-n1"
                      ></div>
                    </div>{" "}
                  </card-skew>
                </div>
              </div>

              <div class="col-1 d-flex flex-column flex-items-center js-build-in-trigger">
                <div
                  class="home-campaign-git-line mt-n3 mt-md-n4 mb-n8 rounded js-build-in-item build-in-scale-top"
                  style="height: 160px; background: linear-gradient(var(--color-canvas-default), #ea6045, #ffa28b);"
                ></div>
              </div>
            </div>
          </div>

          <div
            class="home-campaign-collaboration js-section overflow-hidden px-3 pb-8 pt-5"
            data-color-mode="dark"
            data-light-theme="light"
            data-dark-theme="dark"
            id="collaboration"
          >
            <div class="container-xl">
              <div
                class="d-flex js-build-in-trigger"
                data-build-in-stagger="100"
              >
                <div class="col-1 d-flex flex-column flex-items-center">
                  <div
                    class="mb-4 position-relative home-campaign-glowing-icon js-build-in-item build-in-scale-fade"
                    style="transition-delay: 0ms;"
                  >
                    <svg
                      aria-hidden="true"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      width="24"
                      data-view-component="true"
                      class="octicon octicon-code-of-conduct"
                    >
                      <path d="M2.828 4.328C5.26 1.896 9.5 1.881 11.935 4.317c.024.024.046.05.067.076 1.391-1.078 2.993-1.886 4.777-1.89a6.22 6.22 0 0 1 4.424 1.825c.559.56 1.023 1.165 1.34 1.922.318.756.47 1.617.468 2.663 0 2.972-2.047 5.808-4.269 8.074-2.098 2.14-4.507 3.924-5.974 5.009l-.311.23a.752.752 0 0 1-.897 0l-.312-.23c-1.466-1.085-3.875-2.869-5.973-5.009-2.22-2.263-4.264-5.095-4.27-8.063a6.216 6.216 0 0 1 1.823-4.596Zm8.033 1.042c-1.846-1.834-5.124-1.823-6.969.022a4.712 4.712 0 0 0-1.382 3.52c0 2.332 1.65 4.79 3.839 7.022 1.947 1.986 4.184 3.66 5.66 4.752a78.214 78.214 0 0 0 2.159-1.645l-2.14-1.974a.752.752 0 0 1 1.02-1.106l2.295 2.118c.616-.52 1.242-1.08 1.85-1.672l-2.16-1.992a.753.753 0 0 1 1.021-1.106l2.188 2.02a18.963 18.963 0 0 0 1.528-1.877l-.585-.586-1.651-1.652c-1.078-1.074-2.837-1.055-3.935.043-.379.38-.76.758-1.132 1.126-1.14 1.124-2.96 1.077-4.07-.043-.489-.495-.98-.988-1.475-1.482a.752.752 0 0 1-.04-1.019c.234-.276.483-.576.745-.893.928-1.12 2.023-2.442 3.234-3.576Zm9.725 6.77c.579-1.08.92-2.167.92-3.228.002-.899-.128-1.552-.35-2.08-.22-.526-.551-.974-1.017-1.44a4.71 4.71 0 0 0-3.356-1.384c-1.66.004-3.25.951-4.77 2.346-1.18 1.084-2.233 2.353-3.188 3.506l-.351.423c.331.332.663.664.993.998a1.375 1.375 0 0 0 1.943.03c.37-.365.748-.74 1.125-1.118 1.662-1.663 4.373-1.726 6.06-.045.56.558 1.12 1.12 1.658 1.658Z"></path>
                    </svg>
                    <span
                      class="position-absolute left-0 top-0 height-full width-full home-campaign-glowing-icon-glow z-n1"
                      style="background-color: var(--mktg-accent-primary); filter: blur(18px);"
                    ></span>
                  </div>

                  <div
                    class="home-campaign-git-line height-full rounded js-build-in-item build-in-scale-top"
                    style="background: linear-gradient(#ffd6cc, #ec6547, #ec6547, var(--color-canvas-default)); transition-delay: 500ms;"
                    data-build-delay="500"
                  ></div>
                </div>

                <div class="col-11 col-lg-9 ml-2 ml-md-0 mb-6 mb-md-10">
                  <h3
                    class="h5-mktg mb-4 text-medium js-build-in-item build-in-slideX-left"
                    style="transition-delay: 200ms;"
                  >
                    Collaboration
                  </h3>
                  <h2
                    class="h3-mktg mb-4 text-medium js-build-in-item build-in-slideX-left"
                    style="transition-delay: 300ms;"
                  >
                    <span class="text-accent-primary">
                      Supercharge collaboration.
                    </span>
                    We provide unlimited repositories, best-in-class version
                    control, and the world’s most powerful open source
                    community—so your team can work more efficiently together.
                  </h2>
                </div>
              </div>

              <picture>
                <source
                  srcset="https://github.githubassets.com/assets/issues-plan-3282274c574b.png?width=2500&amp;format=webpll 2500w,https://github.githubassets.com/assets/issues-plan-3282274c574b.png?width=2000&amp;format=webpll 2000w,https://github.githubassets.com/assets/issues-plan-3282274c574b.png?width=1500&amp;format=webpll 1500w,https://github.githubassets.com/assets/issues-plan-3282274c574b.png?width=1250&amp;format=webpll 1250w,https://github.githubassets.com/assets/issues-plan-3282274c574b.png?width=1000&amp;format=webpll 1000w,https://github.githubassets.com/assets/issues-plan-3282274c574b.png?width=500&amp;format=webpll 500w"
                  sizes="(max-width: 1200px) 90vw, 1250px"
                  type="image/webp"
                />
                <source
                  srcset="https://github.githubassets.com/assets/issues-plan-3282274c574b.png 2500w,https://github.githubassets.com/assets/issues-plan-3282274c574b.png?width=1250 1250w,https://github.githubassets.com/assets/issues-plan-3282274c574b.png?width=1000 1000w,https://github.githubassets.com/assets/issues-plan-3282274c574b.png?width=625 625w"
                  sizes="(max-width: 1200px) 90vw, 1250px"
                  type="image/png"
                />
                <img
                  class="width-full height-auto d-block rounded-3 border box-shadow-card-dark-mktg"
                  width="2500"
                  height="1500"
                  loading="lazy"
                  decoding="async"
                  alt="Illustration of project table view with cards grouped by 'Feature planning' phase."
                  src="https://github.githubassets.com/assets/issues-plan-3282274c574b.png"
                />
              </picture>

              <div class="d-flex position-relative">
                <img
                  alt=""
                  aria-hidden="true"
                  width="2712"
                  height="2712"
                  style="transform: translateX(300px) rotateZ(180deg);"
                  class="position-absolute top-0 right-0 height-auto col-11 events-none"
                  loading="lazy"
                  decoding="async"
                  src="https://github.githubassets.com/assets/bg-stars-1-af032966b34f.webp"
                />

                <div class="col-1 d-flex flex-column flex-items-center position-relative js-build-in-trigger">
                  <div
                    class="home-campaign-git-line height-full position-relative z-1 js-build-in-item build-in-scale-top"
                    style="transition-duration: 1100ms; background: linear-gradient(var(--color-canvas-default), #ea6045, #ea6045, var(--color-canvas-default));"
                  ></div>
                  <img
                    alt=""
                    aria-hidden="true"
                    width="81"
                    height="612"
                    style="left: calc(50% - 2px); height: auto; max-width: 9vw;"
                    class="d-none d-md-block position-absolute bottom-4 js-build-in-item build-in-scale-fade"
                    loading="lazy"
                    decoding="async"
                    src="https://github.githubassets.com/assets/git-branch-collaboration-fa5c124c7144.svg"
                  />
                </div>

                <div class="col-11 ml-2 ml-md-6">
                  <div
                    class="river-mktg js-build-in-trigger d-flex gutter gutter-spacious my-5 my-sm-7 my-md-8 position-relative flex-column-reverse flex-md-items-center flex-md-row flex-column pb-4 pb-md-7"
                    data-build-in-stagger="100"
                  >
                    <div
                      class="col-12 py-3 mb-2 js-build-in-item col-sm-10 col-md-6 text-left col-lg-6 build-in-slideX-right"
                      style="transition-delay: 0ms;"
                    >
                      <div class="pr-md-4">
                        <h2 class="color-fg-default mb-3 f2-mktg color-fg-muted">
                          <em>GitHub Issues and GitHub Projects</em> supply
                          flexible project management tools that adapt to your
                          team alongside your code.
                        </h2>

                        <a
                          class="link-mktg text-semibold color-fg-default py-1 f3-mktg"
                          href="/features/issues"
                          data-analytics-event='{"category":"Explore GitHub Issues","action":"click to Explore GitHub Issues","label":"ref_cta:Explore GitHub Issues;"}'
                        >
                          Explore GitHub Issues{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="octicon arrow-symbol-mktg"
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
                              class="octicon-chevrow-stem"
                              stroke="currentColor"
                              d="M1.75 8H11"
                              stroke-width="1.5"
                              stroke-linecap="round"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>

                    <div class="col-12 py-3 col-md-6 col-lg-6">
                      <div class="position-relative">
                        <div class="d-flex flex-column position-relative">
                          <div
                            class="js-build-in-item build-in-slideY box-shadow-active-border-inverse-mktg overflow-hidden rounded-2 position-relative left-4 z-1"
                            style="max-width: 595px; margin-top: -30%; transition-delay: 100ms;"
                          >
                            <img
                              src="https://github.githubassets.com/assets/illu-projects-a97f6088923d.png"
                              alt=""
                              loading="lazy"
                              decoding="async"
                              width="1190"
                              height="1004"
                              class="width-full height-auto d-block"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mb-6 mb-md-12 pb-3 js-build-in-trigger">
                    <div class="py-3 js-build-in-item col-sm-10 col-md-6 text-left col-lg-6 build-in-slideX-left">
                      <div
                        class="gradient-border-mktg d-inline-block z-1 position-relative px-2 lh-condensed f6-mktg"
                        style="top: -1px"
                      >
                        <span class="text-gradient-mktg text-semibold">
                          Did you know?
                        </span>
                      </div>

                      <h3 class="text-accent-primary mb-2 mt-3 h2-mktg text-medium">
                        80% reduction
                      </h3>
                      <p class="mb-3 f3-mktg text-medium col-6-max">
                        in onboarding time with GitHub<sup>1</sup>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="d-flex flex-column flex-md-row gutter js-build-in-trigger ">
                <div class="position-relative z-1 col-md-6 d-flex">
                  <card-skew
                    class="overflow-hidden rounded-3 mb-3 mb-md-5"
                    data-catalyst=""
                    data-perspective="700"
                  >
                    <div
                      class="feature-card-mktg d-md-flex rounded-3 color-bg-subtle border position-relative flex-justify-between z-1 height-full flex-column"
                      data-target="card-skew.bounding"
                    >
                      <div class="d-md-flex flex-column flex-1 p-5 p-sm-6 py-lg-8 pl-lg-8 pr-lg-12 flex-justify-start">
                        <p class="f2-mktg text-medium color-fg-muted mb-4">
                          <em>GitHub Discussions</em> create space to ask
                          questions and have open-ended conversations.
                        </p>

                        <div>
                          {" "}
                          <a
                            class="link-mktg text-semibold color-fg-default py-1 f3-mktg"
                            href="/features/discussions"
                            data-analytics-event='{"category":"Enable GitHub Discussions","action":"click to Enable GitHub Discussions","label":"ref_cta:Enable GitHub Discussions;"}'
                          >
                            Enable GitHub Discussions{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="octicon arrow-symbol-mktg"
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
                                class="octicon-chevrow-stem"
                                stroke="currentColor"
                                d="M1.75 8H11"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div class="overflow-hidden rounded-bottom-3">
                        <picture>
                          <source
                            srcset="https://github.githubassets.com/assets/illu-discussions-6aab2000e0ec.png?width=1208&amp;format=webpll 1208w,https://github.githubassets.com/assets/illu-discussions-6aab2000e0ec.png?width=966&amp;format=webpll 966w,https://github.githubassets.com/assets/illu-discussions-6aab2000e0ec.png?width=724&amp;format=webpll 724w,https://github.githubassets.com/assets/illu-discussions-6aab2000e0ec.png?width=604&amp;format=webpll 604w,https://github.githubassets.com/assets/illu-discussions-6aab2000e0ec.png?width=483&amp;format=webpll 483w,https://github.githubassets.com/assets/illu-discussions-6aab2000e0ec.png?width=241&amp;format=webpll 241w"
                            sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 604px"
                            type="image/webp"
                          />
                          <source
                            srcset="https://github.githubassets.com/assets/illu-discussions-6aab2000e0ec.png 1208w,https://github.githubassets.com/assets/illu-discussions-6aab2000e0ec.png?width=604 604w,https://github.githubassets.com/assets/illu-discussions-6aab2000e0ec.png?width=483 483w,https://github.githubassets.com/assets/illu-discussions-6aab2000e0ec.png?width=302 302w"
                            sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 604px"
                            type="image/png"
                          />
                          <img
                            class="width-full d-block height-auto js-build-in-item build-in-scale-up"
                            width="1208"
                            height="764"
                            loading="lazy"
                            decoding="async"
                            alt=""
                            aria-hidden="true"
                            src="https://github.githubassets.com/assets/illu-discussions-6aab2000e0ec.png"
                          />
                        </picture>
                      </div>

                      <div
                        data-target="card-skew.shine"
                        class="position-absolute bottom-0 right-0 events-none z-n1"
                      ></div>
                    </div>{" "}
                  </card-skew>
                </div>

                <div class="col-md-6 d-flex">
                  <card-skew
                    class="overflow-hidden rounded-3 mb-3 mb-md-5"
                    data-catalyst=""
                    data-perspective="700"
                  >
                    <div
                      class="feature-card-mktg d-md-flex rounded-3 color-bg-subtle border position-relative flex-justify-between z-1 height-full flex-column"
                      data-target="card-skew.bounding"
                    >
                      <div class="d-md-flex flex-column flex-1 p-5 p-sm-6 py-lg-8 pl-lg-8 pr-lg-12 flex-justify-start">
                        <p class="f2-mktg text-medium color-fg-muted mb-4">
                          <em>Pull requests</em> allow real-time communication
                          and collaboration about code changes.
                        </p>

                        <div>
                          {" "}
                          <a
                            class="link-mktg text-semibold color-fg-default py-1 f3-mktg"
                            href="/features/code-review"
                            data-analytics-event='{"category":"Check out pull requests","action":"click to Check out pull requests","label":"ref_cta:Check out pull requests;"}'
                          >
                            Check out pull requests{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="octicon arrow-symbol-mktg"
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
                                class="octicon-chevrow-stem"
                                stroke="currentColor"
                                d="M1.75 8H11"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div class="overflow-hidden rounded-bottom-3">
                        <picture>
                          <source
                            srcset="https://github.githubassets.com/assets/illu-pull-requests-743b2b360e1f.png?width=1208&amp;format=webpll 1208w,https://github.githubassets.com/assets/illu-pull-requests-743b2b360e1f.png?width=966&amp;format=webpll 966w,https://github.githubassets.com/assets/illu-pull-requests-743b2b360e1f.png?width=724&amp;format=webpll 724w,https://github.githubassets.com/assets/illu-pull-requests-743b2b360e1f.png?width=604&amp;format=webpll 604w,https://github.githubassets.com/assets/illu-pull-requests-743b2b360e1f.png?width=483&amp;format=webpll 483w,https://github.githubassets.com/assets/illu-pull-requests-743b2b360e1f.png?width=241&amp;format=webpll 241w"
                            sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 604px"
                            type="image/webp"
                          />
                          <source
                            srcset="https://github.githubassets.com/assets/illu-pull-requests-743b2b360e1f.png 1208w,https://github.githubassets.com/assets/illu-pull-requests-743b2b360e1f.png?width=604 604w,https://github.githubassets.com/assets/illu-pull-requests-743b2b360e1f.png?width=483 483w,https://github.githubassets.com/assets/illu-pull-requests-743b2b360e1f.png?width=302 302w"
                            sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 604px"
                            type="image/png"
                          />
                          <img
                            class="width-full d-block height-auto js-build-in-item build-in-scale-up"
                            width="1208"
                            height="764"
                            loading="lazy"
                            decoding="async"
                            alt=""
                            aria-hidden="true"
                            src="https://github.githubassets.com/assets/illu-pull-requests-743b2b360e1f.png"
                          />
                        </picture>
                      </div>

                      <div
                        data-target="card-skew.shine"
                        class="position-absolute bottom-0 right-0 events-none z-n1"
                      ></div>
                    </div>{" "}
                  </card-skew>
                </div>
              </div>

              <card-skew
                class="overflow-hidden rounded-3 mb-3 mb-md-5"
                data-catalyst=""
                data-perspective="700"
              >
                <div
                  class="feature-card-mktg d-md-flex rounded-3 color-bg-subtle border position-relative flex-justify-between z-1 height-full flex-row"
                  data-target="card-skew.bounding"
                >
                  <div class="d-md-flex flex-column flex-1 p-5 p-sm-6 py-lg-8 pl-lg-8 pr-lg-12 col-md-6 flex-justify-between">
                    <p class="f2-mktg text-medium color-fg-muted mb-4">
                      <em>GitHub Sponsors</em> lets you support your favorite
                      open source maintainers and projects.
                    </p>

                    <div>
                      {" "}
                      <a
                        class="link-mktg text-semibold color-fg-default py-1 f3-mktg"
                        href="/sponsors"
                        data-analytics-event='{"category":"Invest with GitHub Sponsors","action":"click to Invest with GitHub Sponsors","label":"ref_cta:Invest with GitHub Sponsors;"}'
                      >
                        Invest with GitHub Sponsors{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="octicon arrow-symbol-mktg"
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
                            class="octicon-chevrow-stem"
                            stroke="currentColor"
                            d="M1.75 8H11"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div class="overflow-hidden col-md-6 rounded-right-3">
                    <div
                      class="d-flex flex-wrap position-relative top-n12 mt-n4 right-n4 p-4 js-build-in-trigger"
                      style="transform: rotate(-15deg) translateZ(10px); max-height: 480px;"
                      data-build-in-stagger="75"
                    >
                      <div class="col-4">
                        <a
                          target="_blank"
                          class="rounded p-4 border color-bg-subtle no-underline d-flex flex-column flex-items-center m-2 box-shadow-default-mktg js-build-in-item build-in-scale-up"
                          tabindex="-1"
                          href="/chaynhq"
                          style="transition-delay: 0ms;"
                        >
                          <img
                            alt="chaynHQ avatar"
                            width="96"
                            height="96"
                            class="d-block rounded"
                            loading="lazy"
                            decoding="async"
                            src="https://github.githubassets.com/assets/chaynhq-4c5953025dca.png"
                          />
                          <div class="color-fg-muted text-truncate my-2">
                            chaynHQ
                          </div>
                          <button
                            tabindex="-1"
                            type="button"
                            data-view-component="true"
                            class="Button--secondary Button--medium Button"
                          >
                            {" "}
                            <span class="Button-content">
                              <span class="Button-visual Button-leadingVisual">
                                <svg
                                  aria-hidden="true"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  version="1.1"
                                  width="16"
                                  data-view-component="true"
                                  class="octicon octicon-heart"
                                >
                                  <path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"></path>
                                </svg>
                              </span>
                              <span class="Button-label">Sponsor</span>
                            </span>
                          </button>
                        </a>{" "}
                      </div>
                      <div class="col-4">
                        <a
                          target="_blank"
                          class="rounded p-4 border color-bg-subtle no-underline d-flex flex-column flex-items-center m-2 box-shadow-default-mktg js-build-in-item build-in-scale-up"
                          tabindex="-1"
                          href="/imolorhe"
                          style="transition-delay: 75ms;"
                        >
                          <img
                            alt="Samuel avatar"
                            width="96"
                            height="96"
                            class="d-block circle"
                            loading="lazy"
                            decoding="async"
                            src="https://github.githubassets.com/assets/imolorhe-9d771b1d4332.jpeg"
                          />
                          <div class="color-fg-muted text-truncate my-2">
                            Samuel
                          </div>
                          <button
                            tabindex="-1"
                            type="button"
                            data-view-component="true"
                            class="Button--secondary Button--medium Button"
                          >
                            {" "}
                            <span class="Button-content">
                              <span class="Button-visual Button-leadingVisual">
                                <svg
                                  aria-hidden="true"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  version="1.1"
                                  width="16"
                                  data-view-component="true"
                                  class="octicon octicon-heart"
                                >
                                  <path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"></path>
                                </svg>
                              </span>
                              <span class="Button-label">Sponsor</span>
                            </span>
                          </button>
                        </a>{" "}
                      </div>
                      <div class="col-4">
                        <a
                          target="_blank"
                          class="rounded p-4 border color-bg-subtle no-underline d-flex flex-column flex-items-center m-2 box-shadow-default-mktg js-build-in-item build-in-scale-up"
                          tabindex="-1"
                          href="/sindresorhus"
                          style="transition-delay: 150ms;"
                        >
                          <img
                            alt="sindresorhus avatar"
                            width="96"
                            height="96"
                            class="d-block circle"
                            loading="lazy"
                            decoding="async"
                            src="https://github.githubassets.com/assets/sindresorhus-d3224f241a4d.jpeg"
                          />
                          <div class="color-fg-muted text-truncate my-2">
                            sindresorhus
                          </div>
                          <button
                            tabindex="-1"
                            type="button"
                            data-view-component="true"
                            class="Button--secondary Button--medium Button"
                          >
                            {" "}
                            <span class="Button-content">
                              <span class="Button-visual Button-leadingVisual">
                                <svg
                                  aria-hidden="true"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  version="1.1"
                                  width="16"
                                  data-view-component="true"
                                  class="octicon octicon-heart"
                                >
                                  <path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"></path>
                                </svg>
                              </span>
                              <span class="Button-label">Sponsor</span>
                            </span>
                          </button>
                        </a>{" "}
                      </div>
                      <div class="col-4">
                        <a
                          target="_blank"
                          class="rounded p-4 border color-bg-subtle no-underline d-flex flex-column flex-items-center m-2 box-shadow-default-mktg js-build-in-item build-in-scale-up"
                          tabindex="-1"
                          href="/curl"
                          style="transition-delay: 225ms;"
                        >
                          <img
                            alt="curl avatar"
                            width="96"
                            height="96"
                            class="d-block rounded"
                            loading="lazy"
                            decoding="async"
                            src="https://github.githubassets.com/assets/curl-24ff778d1afc.jpeg"
                          />
                          <div class="color-fg-muted text-truncate my-2">
                            curl
                          </div>
                          <button
                            tabindex="-1"
                            type="button"
                            data-view-component="true"
                            class="Button--secondary Button--medium Button"
                          >
                            {" "}
                            <span class="Button-content">
                              <span class="Button-visual Button-leadingVisual">
                                <svg
                                  aria-hidden="true"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  version="1.1"
                                  width="16"
                                  data-view-component="true"
                                  class="octicon octicon-heart"
                                >
                                  <path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"></path>
                                </svg>
                              </span>
                              <span class="Button-label">Sponsor</span>
                            </span>
                          </button>
                        </a>{" "}
                      </div>
                      <div class="col-4">
                        <a
                          target="_blank"
                          class="rounded p-4 border color-bg-subtle no-underline d-flex flex-column flex-items-center m-2 box-shadow-default-mktg js-build-in-item build-in-scale-up"
                          tabindex="-1"
                          href="/yyx990803"
                          style="transition-delay: 300ms;"
                        >
                          <img
                            alt="Evan You avatar"
                            width="96"
                            height="96"
                            class="d-block circle"
                            loading="lazy"
                            decoding="async"
                            src="https://github.githubassets.com/assets/yyx990803-e11c7b140b17.jpeg"
                          />
                          <div class="color-fg-muted text-truncate my-2">
                            Evan You
                          </div>
                          <button
                            tabindex="-1"
                            type="button"
                            data-view-component="true"
                            class="Button--secondary Button--medium Button"
                          >
                            {" "}
                            <span class="Button-content">
                              <span class="Button-visual Button-leadingVisual">
                                <svg
                                  aria-hidden="true"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  version="1.1"
                                  width="16"
                                  data-view-component="true"
                                  class="octicon octicon-heart"
                                >
                                  <path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"></path>
                                </svg>
                              </span>
                              <span class="Button-label">Sponsor</span>
                            </span>
                          </button>
                        </a>{" "}
                      </div>
                      <div class="col-4">
                        <a
                          target="_blank"
                          class="rounded p-4 border color-bg-subtle no-underline d-flex flex-column flex-items-center m-2 box-shadow-default-mktg js-build-in-item build-in-scale-up"
                          tabindex="-1"
                          href="/prophen"
                          style="transition-delay: 375ms;"
                        >
                          <img
                            alt="Nikema avatar"
                            width="96"
                            height="96"
                            class="d-block circle"
                            loading="lazy"
                            decoding="async"
                            src="https://github.githubassets.com/assets/prophen-da9b089d8a25.jpeg"
                          />
                          <div class="color-fg-muted text-truncate my-2">
                            Nikema
                          </div>
                          <button
                            tabindex="-1"
                            type="button"
                            data-view-component="true"
                            class="Button--secondary Button--medium Button"
                          >
                            {" "}
                            <span class="Button-content">
                              <span class="Button-visual Button-leadingVisual">
                                <svg
                                  aria-hidden="true"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  version="1.1"
                                  width="16"
                                  data-view-component="true"
                                  class="octicon octicon-heart"
                                >
                                  <path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"></path>
                                </svg>
                              </span>
                              <span class="Button-label">Sponsor</span>
                            </span>
                          </button>
                        </a>{" "}
                      </div>
                      <div class="col-4">
                        <a
                          target="_blank"
                          class="rounded p-4 border color-bg-subtle no-underline d-flex flex-column flex-items-center m-2 box-shadow-default-mktg js-build-in-item build-in-scale-up"
                          tabindex="-1"
                          href="/eslint"
                          style="transition-delay: 450ms;"
                        >
                          <img
                            alt="ESLint avatar"
                            width="96"
                            height="96"
                            class="d-block rounded"
                            loading="lazy"
                            decoding="async"
                            src="https://github.githubassets.com/assets/eslint-33bd6140c37f.png"
                          />
                          <div class="color-fg-muted text-truncate my-2">
                            ESLint
                          </div>
                          <button
                            tabindex="-1"
                            type="button"
                            data-view-component="true"
                            class="Button--secondary Button--medium Button"
                          >
                            {" "}
                            <span class="Button-content">
                              <span class="Button-visual Button-leadingVisual">
                                <svg
                                  aria-hidden="true"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  version="1.1"
                                  width="16"
                                  data-view-component="true"
                                  class="octicon octicon-heart"
                                >
                                  <path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"></path>
                                </svg>
                              </span>
                              <span class="Button-label">Sponsor</span>
                            </span>
                          </button>
                        </a>{" "}
                      </div>
                      <div class="col-4">
                        <a
                          target="_blank"
                          class="rounded p-4 border color-bg-subtle no-underline d-flex flex-column flex-items-center m-2 box-shadow-default-mktg js-build-in-item build-in-scale-up"
                          tabindex="-1"
                          href="/kazupon"
                          style="transition-delay: 525ms;"
                        >
                          <img
                            alt="kazuya kawaguchi avatar"
                            width="96"
                            height="96"
                            class="d-block circle"
                            loading="lazy"
                            decoding="async"
                            src="https://github.githubassets.com/assets/kazupon-d7aeb7b8df20.jpeg"
                          />
                          <div class="color-fg-muted text-truncate my-2">
                            kazuya kawaguchi
                          </div>
                          <button
                            tabindex="-1"
                            type="button"
                            data-view-component="true"
                            class="Button--secondary Button--medium Button"
                          >
                            {" "}
                            <span class="Button-content">
                              <span class="Button-visual Button-leadingVisual">
                                <svg
                                  aria-hidden="true"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  version="1.1"
                                  width="16"
                                  data-view-component="true"
                                  class="octicon octicon-heart"
                                >
                                  <path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"></path>
                                </svg>
                              </span>
                              <span class="Button-label">Sponsor</span>
                            </span>
                          </button>
                        </a>{" "}
                      </div>
                      <div class="col-4">
                        <a
                          target="_blank"
                          class="rounded p-4 border color-bg-subtle no-underline d-flex flex-column flex-items-center m-2 box-shadow-default-mktg js-build-in-item build-in-scale-up"
                          tabindex="-1"
                          href="/homebrew"
                          style="transition-delay: 600ms;"
                        >
                          <img
                            alt="Homebrew avatar"
                            width="96"
                            height="96"
                            class="d-block rounded"
                            loading="lazy"
                            decoding="async"
                            src="https://github.githubassets.com/assets/homebrew-c7e38eeacb52.png"
                          />
                          <div class="color-fg-muted text-truncate my-2">
                            Homebrew
                          </div>
                          <button
                            tabindex="-1"
                            type="button"
                            data-view-component="true"
                            class="Button--secondary Button--medium Button"
                          >
                            {" "}
                            <span class="Button-content">
                              <span class="Button-visual Button-leadingVisual">
                                <svg
                                  aria-hidden="true"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  version="1.1"
                                  width="16"
                                  data-view-component="true"
                                  class="octicon octicon-heart"
                                >
                                  <path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"></path>
                                </svg>
                              </span>
                              <span class="Button-label">Sponsor</span>
                            </span>
                          </button>
                        </a>{" "}
                      </div>
                    </div>
                  </div>

                  <div
                    data-target="card-skew.shine"
                    class="position-absolute bottom-0 right-0 events-none z-n1"
                  ></div>
                </div>{" "}
              </card-skew>

              <div class="col-1 d-flex flex-column flex-items-center js-build-in-trigger">
                <div
                  class="home-campaign-git-line mt-n3 mt-md-n4 mb-n8 rounded js-build-in-item build-in-scale-top"
                  style="height: 160px; background: linear-gradient(var(--color-canvas-default), #797ef9, #abb4ff);"
                ></div>
              </div>
            </div>
          </div>
          <div
            class="home-campaign-security js-section overflow-hidden px-3 pb-8 pt-5"
            data-color-mode="dark"
            data-light-theme="light"
            data-dark-theme="dark"
            id="security"
          >
            <div class="container-xl">
              <div
                class="d-flex js-build-in-trigger"
                data-build-in-stagger="100"
              >
                <div class="col-1 d-flex flex-column flex-items-center">
                  <div
                    class="mb-4 position-relative home-campaign-glowing-icon js-build-in-item build-in-scale-fade"
                    style="transition-delay: 0ms;"
                  >
                    <svg
                      aria-hidden="true"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      width="24"
                      data-view-component="true"
                      class="octicon octicon-lock"
                    >
                      <path d="M6 9V7.25C6 3.845 8.503 1 12 1s6 2.845 6 6.25V9h.5a2.5 2.5 0 0 1 2.5 2.5v8a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 19.5v-8A2.5 2.5 0 0 1 5.5 9Zm-1.5 2.5v8a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-13a1 1 0 0 0-1 1Zm3-4.25V9h9V7.25c0-2.67-1.922-4.75-4.5-4.75-2.578 0-4.5 2.08-4.5 4.75Z"></path>
                    </svg>
                    <span
                      class="position-absolute left-0 top-0 height-full width-full home-campaign-glowing-icon-glow z-n1"
                      style="background-color: var(--mktg-accent-primary); filter: blur(18px);"
                    ></span>
                  </div>

                  <div
                    class="home-campaign-git-line height-full rounded js-build-in-item build-in-scale-top"
                    style="background: linear-gradient(#abb4ff, #797ef9, var(--color-canvas-default)); transition-delay: 500ms;"
                    data-build-delay="500"
                  ></div>
                </div>

                <div class="col-11 col-lg-9 ml-2 ml-md-0 mb-6 mb-md-10">
                  <h3
                    class="h5-mktg mb-4 text-medium js-build-in-item build-in-slideX-left"
                    style="transition-delay: 200ms;"
                  >
                    Security
                  </h3>
                  <h2
                    class="h3-mktg mb-4 text-medium js-build-in-item build-in-slideX-left"
                    style="transition-delay: 300ms;"
                  >
                    <span class="text-accent-primary">
                      Embed security into the developer workflow.
                    </span>
                    With GitHub, developers can secure their code in minutes and
                    organizations can automatically comply with regulations.
                  </h2>
                </div>
              </div>

              <card-skew
                class="overflow-hidden rounded-3 mb-3 mb-md-5 position-relative z-1"
                data-catalyst=""
                data-perspective="700"
              >
                <div
                  class="color-bg-subtle border rounded-3 p-2 p-lg-6 js-build-in-trigger feature-card-mktg z-1 position-relative"
                  data-target="card-skew.bounding"
                  data-build-in-stagger="200"
                >
                  <div class="color-fg-subtle p-4">
                    <div class="f5 text-medium">cmake.yml</div>
                    <span class="f6">on: push</span>
                  </div>

                  <div class="position-relative d-flex flex-column flex-md-row gutter-spacious col-lg-10 mx-auto my-lg-6">
                    <div
                      class="col-md-6 js-build-in-item build-in-scale-right"
                      style="transition-delay: 0ms;"
                    >
                      <div
                        class="p-4 rounded mt-5 box-shadow-mktg-xl mb-6"
                        style="background: rgba(235, 245, 255, 0.2);"
                      >
                        <ul class="list-style-none mb-n4">
                          <li
                            class="mb-4 f4-mktg d-flex flex-items-center flex-justify-between js-build-in-item build-in-scale-fade"
                            style="transition-delay: 200ms;"
                          >
                            <div class="d-flex flex-items-center">
                              <svg
                                aria-hidden="true"
                                height="24"
                                viewBox="0 0 24 24"
                                version="1.1"
                                width="24"
                                data-view-component="true"
                                class="octicon octicon-check-circle-fill color-fg-success mr-2"
                              >
                                <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path>
                              </svg>
                              <span class="text-medium">Build</span>
                            </div>
                            <span class="f5 color-fg-muted d-none d-sm-block">
                              1m 21s
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div
                      class="home-campaign-ghas-connect position-relative position-md-absolute z-1 d-flex flex-items-center js-build-in-item build-in-scale-fade"
                      style="transition-delay: 400ms;"
                    >
                      <div
                        class="d-inline-block circle p-1 color-bg-emphasis"
                        style="box-shadow: 0 0 0 2px #444D56;"
                      ></div>
                      <div style="width: 40px; height: 2px; background: #D1D5DA;"></div>
                      <div
                        class="d-inline-block circle p-1 color-bg-emphasis"
                        style="box-shadow: 0 0 0 2px #444D56;"
                      ></div>
                    </div>

                    <div
                      class="col-md-6 js-build-in-item build-in-scale-right"
                      style="transition-delay: 600ms;"
                    >
                      <div
                        class="pt-2 pb-1 px-4 rounded-top-2 d-inline-block text-medium"
                        style="background: rgba(235, 245, 255, 0.2);"
                      >
                        Steps
                      </div>
                      <div
                        class="p-4 rounded-bottom-2 rounded-right-2 box-shadow-mktg-xl mb-6"
                        style="background: rgba(235, 245, 255, 0.2);"
                      >
                        <ul class="list-style-none mb-n4">
                          <li
                            class="mb-4 f4-mktg d-flex flex-items-center flex-justify-between js-build-in-item build-in-scale-fade"
                            style="transition-delay: 800ms;"
                          >
                            <div class="d-flex flex-items-center">
                              <svg
                                aria-hidden="true"
                                height="24"
                                viewBox="0 0 24 24"
                                version="1.1"
                                width="24"
                                data-view-component="true"
                                class="octicon octicon-check-circle-fill color-fg-success mr-2"
                              >
                                <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path>
                              </svg>
                              <span class="text-medium">Initialize CodeQL</span>
                            </div>
                            <span class="f5 color-fg-muted d-none d-sm-block">
                              1m 42s
                            </span>
                          </li>
                          <li
                            class="mb-4 f4-mktg d-flex flex-items-center flex-justify-between js-build-in-item build-in-scale-fade"
                            style="transition-delay: 1000ms;"
                          >
                            <div class="d-flex flex-items-center">
                              <svg
                                aria-hidden="true"
                                height="24"
                                viewBox="0 0 24 24"
                                version="1.1"
                                width="24"
                                data-view-component="true"
                                class="octicon octicon-check-circle-fill color-fg-success mr-2"
                              >
                                <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path>
                              </svg>
                              <span class="text-medium">Autobuild</span>
                            </div>
                            <span class="f5 color-fg-muted d-none d-sm-block">
                              1m 24s
                            </span>
                          </li>
                          <li
                            class="mb-4 f4-mktg d-flex flex-items-center flex-justify-between js-build-in-item build-in-scale-fade"
                            style="transition-delay: 1200ms;"
                          >
                            <div class="d-flex flex-items-center">
                              <svg
                                aria-hidden="true"
                                height="24"
                                viewBox="0 0 24 24"
                                version="1.1"
                                width="24"
                                data-view-component="true"
                                class="octicon octicon-check-circle-fill color-fg-success mr-2"
                              >
                                <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path>
                              </svg>
                              <span class="text-medium">
                                Perform CodeQL Analyses
                              </span>
                            </div>
                            <span class="f5 color-fg-muted d-none d-sm-block">
                              1m 36s
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    data-target="card-skew.shine"
                    class="position-absolute bottom-0 right-0 events-none z-n1"
                  ></div>
                </div>
              </card-skew>

              <div
                class="d-flex js-build-in-trigger position-relative"
                data-build-in-stagger="100"
              >
                <img
                  alt=""
                  aria-hidden="true"
                  width="2712"
                  height="2712"
                  style="transform: translateX(300px) rotateZ(90deg);"
                  class="position-absolute top-0 right-0 height-auto col-11 events-none"
                  loading="lazy"
                  decoding="async"
                  src="https://github.githubassets.com/assets/bg-stars-1-af032966b34f.webp"
                />

                <div class="col-1 d-flex flex-column flex-items-center position-relative">
                  <div
                    class="home-campaign-git-line height-full position-relative z-1 js-build-in-item build-in-scale-top"
                    style="background: linear-gradient(var(--color-canvas-default), #797ef9, #797ef9, var(--color-canvas-default)); transition-delay: 0ms;"
                  ></div>
                  <img
                    alt=""
                    aria-hidden="true"
                    width="81"
                    height="612"
                    style="left: calc(50% - 2px); height: auto; max-width: 9vw; transition-delay: 100ms;"
                    class="d-none d-md-block position-absolute bottom-4 js-build-in-item build-in-scale-fade"
                    loading="lazy"
                    decoding="async"
                    src="https://github.githubassets.com/assets/git-branch-security-a1be26173d7b.svg"
                  />
                </div>

                <div class="col-11 ml-2 ml-md-6">
                  <div
                    class="river-mktg js-build-in-trigger d-flex gutter gutter-spacious my-5 my-sm-7 my-md-8 position-relative flex-column-reverse flex-md-items-center flex-md-row flex-column pb-4 pb-md-7"
                    data-build-in-stagger="100"
                  >
                    <div
                      class="col-12 py-3 mb-2 js-build-in-item col-sm-10 col-md-6 text-left col-lg-6 build-in-slideX-right"
                      style="transition-delay: 0ms;"
                    >
                      <div class="pr-md-4">
                        <h2 class="color-fg-default mb-3 f2-mktg color-fg-muted">
                          <em>GitHub Advanced Security</em> lets you gain
                          visibility into your security posture, respond to
                          threats proactively, and ship secure applications
                          quickly.
                        </h2>

                        <a
                          class="link-mktg text-semibold color-fg-default py-1 f3-mktg"
                          href="/features/security"
                          data-analytics-event='{"category":"Get GitHub Advanced Security","action":"click to Get GitHub Advanced Security","label":"ref_cta:Get GitHub Advanced Security;"}'
                        >
                          Get GitHub Advanced Security{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="octicon arrow-symbol-mktg"
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
                              class="octicon-chevrow-stem"
                              stroke="currentColor"
                              d="M1.75 8H11"
                              stroke-width="1.5"
                              stroke-linecap="round"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>

                    <div class="col-12 py-3 col-md-6 col-lg-6">
                      <div class="position-relative">
                        <div class="d-flex flex-column position-relative">
                          <div
                            class="js-build-in-item build-in-slideX-right box-shadow-card-dark-mktg overflow-hidden rounded-2 position-relative left-6 z-1"
                            style="max-width: 541px; margin-top: -30%; transition-delay: 100ms;"
                          >
                            <img
                              src="https://github.githubassets.com/images/modules/site/home-campaign/illu-ghas-list.png"
                              alt=""
                              loading="lazy"
                              decoding="async"
                              width="1084"
                              height="600"
                              class="width-full height-auto d-block"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mb-6 mb-md-12 pb-3 js-build-in-trigger">
                    <div
                      class="py-3 js-build-in-item col-sm-10 col-md-6 text-left col-lg-7 build-in-slideX-left"
                      style="transition-delay: 400ms;"
                    >
                      <div
                        class="gradient-border-mktg d-inline-block z-1 position-relative px-2 lh-condensed f6-mktg"
                        style="top: -1px"
                      >
                        <span class="text-gradient-mktg text-semibold">
                          Did you know?
                        </span>
                      </div>

                      <h3 class="text-accent-primary mb-2 mt-3 h2-mktg text-medium">
                        56 million projects
                      </h3>
                      <p class="mb-3 f3-mktg text-medium col-6-max">
                        fixed vulnerabilities with GitHub<sup>2</sup>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="position-relative z-1 js-build-in-trigger">
                <card-skew
                  class="overflow-hidden rounded-3 mb-3 mb-md-5"
                  data-catalyst=""
                  data-perspective="700"
                >
                  <div
                    class="feature-card-mktg d-md-flex rounded-3 color-bg-subtle border position-relative flex-justify-between z-1 height-full flex-row"
                    data-target="card-skew.bounding"
                  >
                    <div class="d-md-flex flex-column flex-1 p-5 p-sm-6 py-lg-8 pl-lg-8 pr-lg-12 col-md-6 flex-justify-between">
                      <p class="f2-mktg text-medium color-fg-muted mb-4">
                        <em>Secret scanning</em> automatically looks for partner
                        patterns and prevents fraudulent use of accidentally
                        committed secrets.
                      </p>

                      <div>
                        {" "}
                        <a
                          class="link-mktg text-semibold color-fg-default py-1 f3-mktg"
                          href="https://github.com/features/security/code"
                          data-analytics-event='{"category":"Read about secret scanning","action":"click to Read about secret scanning","label":"ref_cta:Read about secret scanning;"}'
                        >
                          Read about secret scanning{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="octicon arrow-symbol-mktg"
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
                              class="octicon-chevrow-stem"
                              stroke="currentColor"
                              d="M1.75 8H11"
                              stroke-width="1.5"
                              stroke-linecap="round"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div class="overflow-hidden col-md-6 rounded-right-3">
                      <picture>
                        <source
                          srcset="https://github.githubassets.com/assets/illu-secret-scanning-8b1a09f4d09c.png?width=1288&amp;format=webpll 1288w,https://github.githubassets.com/assets/illu-secret-scanning-8b1a09f4d09c.png?width=1030&amp;format=webpll 1030w,https://github.githubassets.com/assets/illu-secret-scanning-8b1a09f4d09c.png?width=772&amp;format=webpll 772w,https://github.githubassets.com/assets/illu-secret-scanning-8b1a09f4d09c.png?width=644&amp;format=webpll 644w,https://github.githubassets.com/assets/illu-secret-scanning-8b1a09f4d09c.png?width=515&amp;format=webpll 515w,https://github.githubassets.com/assets/illu-secret-scanning-8b1a09f4d09c.png?width=257&amp;format=webpll 257w"
                          sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 644px"
                          type="image/webp"
                        />
                        <source
                          srcset="https://github.githubassets.com/assets/illu-secret-scanning-8b1a09f4d09c.png 1288w,https://github.githubassets.com/assets/illu-secret-scanning-8b1a09f4d09c.png?width=644 644w,https://github.githubassets.com/assets/illu-secret-scanning-8b1a09f4d09c.png?width=515 515w,https://github.githubassets.com/assets/illu-secret-scanning-8b1a09f4d09c.png?width=322 322w"
                          sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 644px"
                          type="image/png"
                        />
                        <img
                          class="width-full d-block height-auto js-build-in-item build-in-scale-fade"
                          width="1288"
                          height="992"
                          loading="lazy"
                          decoding="async"
                          alt=""
                          aria-hidden="true"
                          src="https://github.githubassets.com/assets/illu-secret-scanning-8b1a09f4d09c.png"
                        />
                      </picture>
                    </div>

                    <div
                      data-target="card-skew.shine"
                      class="position-absolute bottom-0 right-0 events-none z-n1"
                    ></div>
                  </div>{" "}
                </card-skew>
              </div>

              <div class="d-flex flex-column flex-md-row gutter js-build-in-trigger ">
                <div class="col-md-6 d-flex">
                  <card-skew
                    class="overflow-hidden rounded-3 mb-3 mb-md-5"
                    data-catalyst=""
                    data-perspective="700"
                  >
                    <div
                      class="feature-card-mktg d-md-flex rounded-3 color-bg-subtle border position-relative flex-justify-between z-1 height-full flex-column"
                      data-target="card-skew.bounding"
                    >
                      <div class="d-md-flex flex-column flex-1 p-5 p-sm-6 py-lg-8 pl-lg-8 pr-lg-12 flex-justify-start">
                        <p class="f2-mktg text-medium color-fg-muted mb-4">
                          <em>Dependabot</em> makes it easy to find and fix
                          vulnerable dependencies in your supply chain.
                        </p>

                        <div>
                          {" "}
                          <a
                            class="link-mktg text-semibold color-fg-default py-1 f3-mktg"
                            href="/features/security/software-supply-chain"
                            data-analytics-event='{"category":"Explore Dependabot","action":"click to Explore Dependabot","label":"ref_cta:Explore Dependabot;"}'
                          >
                            Explore Dependabot{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="octicon arrow-symbol-mktg"
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
                                class="octicon-chevrow-stem"
                                stroke="currentColor"
                                d="M1.75 8H11"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div class="overflow-hidden rounded-bottom-3">
                        <picture>
                          <source
                            srcset="https://github.githubassets.com/assets/illu-dependabot-d98c73cc6724.png?width=1208&amp;format=webpll 1208w,https://github.githubassets.com/assets/illu-dependabot-d98c73cc6724.png?width=966&amp;format=webpll 966w,https://github.githubassets.com/assets/illu-dependabot-d98c73cc6724.png?width=724&amp;format=webpll 724w,https://github.githubassets.com/assets/illu-dependabot-d98c73cc6724.png?width=604&amp;format=webpll 604w,https://github.githubassets.com/assets/illu-dependabot-d98c73cc6724.png?width=483&amp;format=webpll 483w,https://github.githubassets.com/assets/illu-dependabot-d98c73cc6724.png?width=241&amp;format=webpll 241w"
                            sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 604px"
                            type="image/webp"
                          />
                          <source
                            srcset="https://github.githubassets.com/assets/illu-dependabot-d98c73cc6724.png 1208w,https://github.githubassets.com/assets/illu-dependabot-d98c73cc6724.png?width=604 604w,https://github.githubassets.com/assets/illu-dependabot-d98c73cc6724.png?width=483 483w,https://github.githubassets.com/assets/illu-dependabot-d98c73cc6724.png?width=302 302w"
                            sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 604px"
                            type="image/png"
                          />
                          <img
                            class="width-full d-block height-auto js-build-in-item build-in-scale-fade"
                            width="1208"
                            height="764"
                            loading="lazy"
                            decoding="async"
                            alt=""
                            aria-hidden="true"
                            src="https://github.githubassets.com/assets/illu-dependabot-d98c73cc6724.png"
                          />
                        </picture>
                      </div>

                      <div
                        data-target="card-skew.shine"
                        class="position-absolute bottom-0 right-0 events-none z-n1"
                      ></div>
                    </div>{" "}
                  </card-skew>
                </div>

                <div class="col-md-6 d-flex">
                  <card-skew
                    class="overflow-hidden rounded-3 mb-3 mb-md-5"
                    data-catalyst=""
                    data-perspective="700"
                  >
                    <div
                      class="feature-card-mktg d-md-flex rounded-3 color-bg-subtle border position-relative flex-justify-between z-1 height-full flex-column"
                      data-target="card-skew.bounding"
                    >
                      <div class="d-md-flex flex-column flex-1 p-5 p-sm-6 py-lg-8 pl-lg-8 pr-lg-12 flex-justify-start">
                        <p class="f2-mktg text-medium color-fg-muted mb-4">
                          <em>Code scanning</em> is GitHub’s static code
                          analysis tool that helps you remediate issues in your
                          code.
                        </p>

                        <div>
                          {" "}
                          <a
                            class="link-mktg text-semibold color-fg-default py-1 f3-mktg"
                            href="https://resources.github.com/security/sast/"
                            data-analytics-event='{"category":"Download the latest SAST ebook","action":"click to Download the latest SAST ebook","label":"ref_cta:Download the latest SAST ebook;"}'
                          >
                            Download the latest SAST ebook{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="octicon arrow-symbol-mktg"
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
                                class="octicon-chevrow-stem"
                                stroke="currentColor"
                                d="M1.75 8H11"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div class="overflow-hidden rounded-bottom-3">
                        <picture>
                          <source
                            srcset="https://github.githubassets.com/assets/illu-code-scanning-fc9dfb212aa3.png?width=1208&amp;format=webpll 1208w,https://github.githubassets.com/assets/illu-code-scanning-fc9dfb212aa3.png?width=966&amp;format=webpll 966w,https://github.githubassets.com/assets/illu-code-scanning-fc9dfb212aa3.png?width=724&amp;format=webpll 724w,https://github.githubassets.com/assets/illu-code-scanning-fc9dfb212aa3.png?width=604&amp;format=webpll 604w,https://github.githubassets.com/assets/illu-code-scanning-fc9dfb212aa3.png?width=483&amp;format=webpll 483w,https://github.githubassets.com/assets/illu-code-scanning-fc9dfb212aa3.png?width=241&amp;format=webpll 241w"
                            sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 604px"
                            type="image/webp"
                          />
                          <source
                            srcset="https://github.githubassets.com/assets/illu-code-scanning-fc9dfb212aa3.png 1208w,https://github.githubassets.com/assets/illu-code-scanning-fc9dfb212aa3.png?width=604 604w,https://github.githubassets.com/assets/illu-code-scanning-fc9dfb212aa3.png?width=483 483w,https://github.githubassets.com/assets/illu-code-scanning-fc9dfb212aa3.png?width=302 302w"
                            sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 604px"
                            type="image/png"
                          />
                          <img
                            class="width-full d-block height-auto js-build-in-item build-in-scale-fade"
                            width="1208"
                            height="764"
                            loading="lazy"
                            decoding="async"
                            alt=""
                            aria-hidden="true"
                            src="https://github.githubassets.com/assets/illu-code-scanning-fc9dfb212aa3.png"
                          />
                        </picture>
                      </div>

                      <div
                        data-target="card-skew.shine"
                        class="position-absolute bottom-0 right-0 events-none z-n1"
                      ></div>
                    </div>{" "}
                  </card-skew>
                </div>
              </div>
            </div>
          </div>

          <div
            class="position-relative overflow-hidden"
            data-color-mode="dark"
            data-light-theme="light"
            data-dark-theme="dark"
          >
            <div class="container-xl position-relative z-2">
              <div
                class="river-mktg js-build-in-trigger d-flex gutter gutter-spacious my-5 my-sm-7 my-md-8 position-relative flex-md-items-center text-center flex-column"
                data-build-in-stagger="100"
                margin="false"
              >
                <div class="col-12 py-3 mb-2">
                  <div class="">
                    <h2 class="color-fg-default mb-3 h3-mktg col-lg-8 mx-md-auto px-3">
                      The place for anyone from anywhere
                      to&nbsp;build&nbsp;anything
                    </h2>
                    <p class="mb-3 f3-mktg color-fg-muted px-3 mx-auto col-7-max">
                      Whether you’re scaling your startup or just learning how
                      to code, GitHub is your home. Join the world’s largest
                      developer platform to build the innovations that empower
                      humanity. Let’s&nbsp;build from&nbsp;here.
                    </p>

                    <div class="d-flex flex-justify-center mt-6">
                      <div class="by-2 by-lg-0 bx-lg-2 d-flex flex-column flex-lg-row">
                        <a
                          class="btn-mktg btn-large-mktg"
                          data-analytics-event='{"category":"Sign up for GitHub","action":"click to Sign up for GitHub","label":"ref_cta:Sign up for GitHub;"}'
                          href="/signup?ref_cta=Sign+up+for+GitHub&amp;ref_loc=Home+campaign+footer&amp;ref_page=%2F"
                        >
                          Sign up for GitHub
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="octicon arrow-symbol-mktg"
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
                              class="octicon-chevrow-stem"
                              stroke="currentColor"
                              d="M1.75 8H11"
                              stroke-width="1.5"
                              stroke-linecap="round"
                            ></path>
                          </svg>
                        </a>
                        <a
                          class="btn-mktg btn-large-mktg btn-muted-mktg"
                          data-analytics-event='{"category":"Start a free enterprise trial","action":"click to Start a free enterprise trial","label":"ref_cta:Start a free enterprise trial;"}'
                          href="/organizations/enterprise_plan?ref_cta=Start+a+free+enterprise+trial&amp;ref_loc=Home+campaign+footer&amp;ref_page=%2F"
                        >
                          Start a free enterprise trial
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="octicon arrow-symbol-mktg"
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
                              class="octicon-chevrow-stem"
                              stroke="currentColor"
                              d="M1.75 8H11"
                              stroke-width="1.5"
                              stroke-linecap="round"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>

            <div class="position-relative z-2 user-select-none home-globe-scene js-webgl-globe-data">
              <div class="home-globe-container home-globe-container-webgl mx-auto">
                <div class="mx-auto width-full home-globe position-relative height-full js-webgl-globe">
                  <video
                    width="916"
                    height="918"
                    loop=""
                    muted=""
                    playsinline=""
                    preload="none"
                    class="home-globe-container-video js-globe-fallback-video "
                    hidden=""
                  >
                    <source
                      type="video/mp4; codecs=hevc,mp4a.40.2"
                      src="https://github.githubassets.com/assets/globe-900.hevc-58019d77b21c.mp4"
                    />
                    <source
                      type="video/mp4; codecs=avc1.4D401E,mp4a.40.2"
                      src="https://github.githubassets.com/assets/globe-900.h264-975e7b5ac572.mp4"
                    />
                  </video>
                  <video
                    loop=""
                    muted=""
                    playsinline=""
                    preload="none"
                    class="home-globe-container-video js-globe-fallback-video-small"
                    hidden=""
                  >
                    <source
                      type="video/mp4; codecs=hevc,mp4a.40.2"
                      src="https://github.githubassets.com/assets/globe-500.hevc-42032a395ff1.mp4"
                    />
                    <source
                      type="video/mp4; codecs=avc1.4D401E,mp4a.40.2"
                      src="https://github.githubassets.com/assets/globe-500.h264-f00ceaddc706.mp4"
                    />
                  </video>
                  <img
                    srcset="https://github.githubassets.com/assets/globe-700-7504469d0f87.jpg 700w,
                https://github.githubassets.com/assets/globe-d6f3f4ee645a.jpg 1400w"
                    sizes="(max-width: 700px) 70vw, 700px"
                    src="https://github.githubassets.com/assets/globe-d6f3f4ee645a.jpg"
                    alt="Planet earth with visualization of GitHub activity crossing the globe"
                    class="width-full height-auto js-globe-fallback-image"
                    loading="lazy"
                    decoding="async"
                    width="1238"
                    height="1404"
                    hidden=""
                  />

                  <canvas
                    width="900"
                    height="900"
                    class="webgl-canvas js-globe-canvas"
                    style="display: block; width: 900px; height: 900px;"
                  ></canvas>
                </div>
              </div>

              <video
                loop=""
                muted=""
                playsinline=""
                preload="none"
                class="js-globe-aurora position-absolute top-0 left-0 right-0 bottom-0"
                style="margin: auto; z-index: -1; min-width: 100%; min-height: 100%; -webkit-mask-image: -webkit-linear-gradient(transparent, #000 20%, transparent 90%);"
                hidden=""
              >
                <source
                  type="video/mp4; codecs=avc1.4D401E,mp4a.40.2"
                  src="https://github.githubassets.com/assets/aurora.h264-25af1afc4e69.mp4"
                />
              </video>
              <div
                class="data-info position-absolute top-0 left-0 rounded text-mono f6 py-3 pl-2 pr-5 z-3 js-globe-popup text-white d-block"
                style="max-width: 450px; background-color: rgba(0, 0, 0, 0.4); backdrop-filter: blur(10px); transform: translate(-9819.5px, -9983px);"
              >
                <a class="js-globe-popover-card no-underline d-flex flex-row flex-items-start">
                  <div class="pr-2 pt-1 pl-2">
                    <img
                      src="https://github.githubassets.com/images/modules/site/home/globe/pull-request-icon.svg"
                      aria-hidden="true"
                      class="js-globe-popup-icon-pr"
                      loading="lazy"
                    />
                    <img
                      src="https://github.githubassets.com/images/modules/site/home/globe/north-star.svg"
                      aria-hidden="true"
                      class="js-globe-popup-icon-acv mt-n1 d-none"
                      width="24"
                      loading="lazy"
                    />
                  </div>

                  <div>
                    <div class="f4 color-text-white js-globe-popover-header">
                      #1227 ewels/MultiQC
                    </div>
                    <div style="color: #959da5" class="js-globe-popover-body">
                      Python<span style="color: rgb(53, 114, 165);"> • </span>
                      Opened in Sydney, merged in Stockholm
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <picture>
              <source
                srcset="https://github.githubassets.com/assets/footer-galaxy-096a057faaf4.jpg 801w,https://github.githubassets.com/assets/footer-galaxy-096a057faaf4.jpg?width=640 640w,https://github.githubassets.com/assets/footer-galaxy-096a057faaf4.jpg?width=480 480w,https://github.githubassets.com/assets/footer-galaxy-096a057faaf4.jpg?width=400 400w,https://github.githubassets.com/assets/footer-galaxy-096a057faaf4.jpg?width=320 320w,https://github.githubassets.com/assets/footer-galaxy-096a057faaf4.jpg?width=160 160w"
                sizes="100vw"
                type="image/jpeg"
              />
              <img
                class="position-absolute z-1 bottom-0 left-0 width-full height-full object-fit-cover d-block events-none"
                width="801"
                height="807"
                loading="lazy"
                decoding="async"
                alt=""
                aria-hidden="true"
                src="https://github.githubassets.com/assets/footer-galaxy-096a057faaf4.jpg"
              />
            </picture>

            <div class="col-lg-3 mx-auto d-flex flex-justify-center position-relative z-2 events-none">
              <img
                alt="Mona looking at the galaxy"
                width="801"
                height="807"
                class="home-astrocat d-block user-select-none"
                src="https://github.githubassets.com/assets/astrocat-c96b6ce0d913.png"
              />
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 1680 40"
              class="position-absolute width-full z-1"
              style="bottom: -1px;"
            >
              <path
                d="M0 40h1680V30S1340 0 840 0 0 30 0 30z"
                fill="#0D1117"
              ></path>
            </svg>
          </div>
          <div
            class="container-xl p-responsive"
            data-dark-theme="dark"
            data-color-mode="dark"
          >
            <ul class="list-style-none col-lg-9 color-fg-muted f5 pt-8">
              <li>
                <sup id="footnote-1">1</sup> The Total Economic Impact™ Of
                GitHub Enterprise Cloud and Advanced Security, a commissioned
                study conducted by Forrester Consulting, 2022. Results are for a
                composite organization based on interviewed customers.
              </li>
              <li>
                <sup id="footnote-2">2</sup> GitHub, Octoverse 2022 The state of
                open source software.
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Introduction;
