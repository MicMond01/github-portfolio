import React from "react";
import Dependabot from "./Dependabot";
import SecretScanning from "./SecretScanning";

const SecretDependabot = () => {
  return (
    <div className="flex flex-row gap-8 mx:flex-col w-full">
      <Dependabot />
      <SecretScanning />
    </div>
  );
};

export default SecretDependabot;
