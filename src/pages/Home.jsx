import React from "react";
import PrimaryBackground from "../components/PrimaryBackground";
import backgroundImg from "../assets/images/backgroundsm.png";
import butterfly from "../assets/images/butterfly.png";

const Home = () => {
  return (
    <PrimaryBackground
      imageUrl={backgroundImg}
      imageUrltwo={butterfly}
      altText="Background"
    >
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Welcome to My App</h1>
        <p>This is the main content of your application.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
          praesentium quia exercitationem consequatur assumenda impedit eius
          nisi incidunt quam eos, delectus repudiandae. Placeat recusandae
          dolore sed aspernatur, exercitationem ratione error.
        </p>
      </div>
    </PrimaryBackground>
  );
};

export default Home;
