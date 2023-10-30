import React from "react";
import PrimaryBackground from "../components/PrimaryBackground";
// import backgroundImg from "../assets/images/backgroundsm.png";
import backgroundImg from "../assets/images/hero-bg2.webp";
import butterfly from "../assets/images/butterfly.png";
import NavigationBar from "../components/navigation/NavigationBar";
import NavigationBarM from "../components/navigation/NavigationBarM";
import Introduction from "../components/home/Introduction";

const Home = () => {
  return (
    <PrimaryBackground
      imageUrl={backgroundImg}
      imageUrltwo={butterfly}
      altText="Background"
    >
      <div className="box container mx-auto px-4 relative pt-4 md:pt-4 lg:pt-12 xl:container  md:px-4 ">
        <div className="z-20">
          <NavigationBar />
          <NavigationBarM />
        </div>
        <div className="">
          <Introduction />
        </div>
      </div>
    </PrimaryBackground>
  );
};

export default Home;
