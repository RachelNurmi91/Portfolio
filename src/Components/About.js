import React from "react";

const About = () => {
  return (
    <div>
      <div className="header">
        <div className="title">
          <div className="title-before">My name is</div>
          <h1>Rachel Nurmi</h1>
          <div className="title-after">& I code things</div>
        </div>
        <div className="subtitle">
          Back in the early 2000s I got my first taste of building websites
          using Expage.com. Being only 9, the first thing I build was a Pokemon
          website. Since then, I dabbled in web development until I ended up
          where I am now. I am a Full-Stack developer with determination to use
          technology for making a difference.
        </div>
        <p className="about">
          These days my main focus is application development for LAZ Parking.
        </p>
      </div>

      <div className="resume">Take it offline & download my resume</div>

      <div className="projects"></div>
    </div>
  );
};

export default About;
