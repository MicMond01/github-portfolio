import React from "react";

const Background = () => {
  return (
    <div className="container-xl relative">
      <picture>
        <source
          media="(max-width: 768px)"
          type="image/webp"
          srcSet="https://github.githubassets.com/assets/hero-bg-md-8b05fcf46a30.webp 1x, https://github.githubassets.com/assets/hero-bg-e49a8e86f714.webp 2x"
        />
        <source
          media="(min-width: 1280px)"
          type="image/webp"
          srcSet="https://github.githubassets.com/assets/hero-bg-e49a8e86f714.webp 1x, https://github.githubassets.com/assets/hero-bg-2x-a94895520866.webp 2x"
        />

        <img
          alt=""
          aria-hidden="true"
          width="4377"
          className="position-absolute top-0 events-none"
          style={{ right: "-1050px", maxWidth: "calc(230vw + 1670px)" }}
          src="https://github.githubassets.com/assets/hero-bg-e49a8e86f714.webp"
        />
      </picture>
    </div>
  );
};

export default Background;
