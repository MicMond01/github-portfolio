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
// import FixedNavBar from "../components/fixed navigation/FixedNavBar";
// import ScrollSpy from "react-ui-scrollspy";
import CodeEditor2 from "../components/editor2/CodeEditor2";
import GithubActionContainer from "../components/githubAction/GithubActionContainer";
import CodeEnvironment from "../components/code environment/CodeEnvironment";
import LineAnimi from "../components/LineAnimi";
import AppSecurityHero from "../components/application security/application security hero/AppSecurityHero";
import AppSecurityCS from "../components/application security/app security card-skew/AppSecurityCS";

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
        <div className="container-xl">
          <Copilot />
          {/* <FixedNavBar /> */}
          <Productivity />
          <CodeEditor />
          <CodeEditor2 />
          <GithubActionContainer />
          <CodeEnvironment />
          <LineAnimi />
        </div>
        <div className="container-xl  pb-20 application-security">
          <AppSecurityHero />
          <AppSecurityCS />
        </div>
      </div>
    </PrimaryBackground>
  );
};

export default Home;
