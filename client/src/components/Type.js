import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "University of Georgia",
          "Florida State University",
          "Georgia Institute of Technology",
          "Emory",
          "Georgia Southern University",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 100,
        pauseFor: 1750,
      }}
    />
  );
}

export default Type;
