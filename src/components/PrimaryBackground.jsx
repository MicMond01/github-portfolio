import React from "react";

const PrimaryBackground = ({ imageUrl, imageUrltwo, altText, children }) => {
  const containerStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "100%",
    // backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
  };

  const overlayStyle = {
    backgroundImage: `url(${imageUrltwo})`,
    backgroundSize: "20vw auto", // Adjust the percentage or vw unit as needed
    backgroundPosition: "right 5vw top 12vw", // Adjust the vw units as needed
    backgroundRepeat: "no-repeat",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };

  return (
    <div className="min-h-screen" style={containerStyle}>
      <div style={overlayStyle}></div>
      {children}
    </div>
  );
};

export default PrimaryBackground;
