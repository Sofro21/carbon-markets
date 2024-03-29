import React from "react";
import { Parallax } from "react-parallax";
import "./ParallaxComponent.css"; // Import your CSS file for styling
import bgimg from "./sofro-god.jpg";

const ParallaxComponent = () => {
  return (
    <div className="parallax-container">
      <Parallax bgImage={bgimg} strength={500}>
        <div className="parallax-content">
          <h1>Sofro God</h1>
          <p>This is a parallax of Sofro God</p>
        </div>
      </Parallax>
    </div>
  );
};

export default ParallaxComponent;
