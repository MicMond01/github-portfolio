import React from "react";

const PrimaryBackground = ({ imageUrl, imageUrltwo, children }) => {
  return (
    <div className="overflow-hidden screensize bg-cover relative">
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
          className="home-background absolute top-0 events-none"
          src="https://github.githubassets.com/assets/hero-bg-e49a8e86f714.webp"
        />
      </picture>

      {/* You can add CSS classes for styling here */}
      <div className="butterfly top-12"></div>
      {children}
    </div>
  );
};

export default PrimaryBackground;

// <div className="container-xl relative">
//   <picture>
//     <source
//       media="(max-width: 768px)"
//       type="image/webp"
//       srcSet="https://github.githubassets.com/assets/hero-bg-md-8b05fcf46a30.webp 1x, https://github.githubassets.com/assets/hero-bg-e49a8e86f714.webp 2x"
//     />
//     <source
//       media="(min-width: 1280px)"
//       type="image/webp"
//       srcSet="https://github.githubassets.com/assets/hero-bg-e49a8e86f714.webp 1x, https://github.githubassets.com/assets/hero-bg-2x-a94895520866.webp 2x"
//     />

//     <img
//       alt=""
//       aria-hidden="true"
//       width="4377"
//       className="absolute top-0 events-none"
//       style={{ right: "-1050px", maxWidth: "calc(230vw + 1670px)" }}
//       src="https://github.githubassets.com/assets/hero-bg-e49a8e86f714.webp"
//     />
//   </picture>
// </div>
