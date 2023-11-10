import React from "react";
import PrimaryBackground from "../components/PrimaryBackground";
// import backgroundImg from "../assets/images/backgroundsm.png";
import backgroundImg from "../assets/images/hero-bg2.webp";
import butterfly from "../assets/images/butterfly.png";
import NavigationBar from "../components/navigation/NavigationBar";
import NavigationBarM from "../components/navigation/NavigationBarM";
// import Introduction from "../components/home/Introduction";
import Copilot from "../components/home/Copilot";
import Productivity from "../components/home/Productivity";
import CodeEditor from "../components/home/editor/CodeEditor";
import FixedNavBar from "../components/fixed navigation/FixedNavBar";
import ScrollSpy from "react-ui-scrollspy";

const Home = () => {
  return (
    <PrimaryBackground
      imageUrl={backgroundImg}
      imageUrltwo={butterfly}
      altText="Background"
    >
      <div className="box container  mx-auto px-4 relative pt-4 md:pt-4 lg:pt-12 xl:container  md:px-4 ">
        <div className="z-20">
          <NavigationBar />
          <NavigationBarM />
        </div>
        <div className="container-xl  pr-4">
          <ScrollSpy>
            <Copilot />
            <FixedNavBar />
            <Productivity />
            <CodeEditor />
          </ScrollSpy>
        </div>
      </div>
    </PrimaryBackground>
  );
};

export default Home;
