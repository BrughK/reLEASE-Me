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
          "University of Alabama",
          "Auburn University",
          "University of Arkansas",
          "Arizona State University",
          "University of Arizona",
          "University of California, Berkeley",
          "Colorado State University",
          "University of Connecticut",
          "Central Connecticut State University",
          "University of Delaware",
          "Florida Atlantic University",
          "Florida Gulf Coast University",
          "Florida International University",
          "Florida State University",
          "University of Central Florida",
          "University of South Florida",
          "Georgia State University",
          "University of West Georgia",
          "Hawaii Pacific University",
          "University of Hawaii at Manoa",
          "University of Illinois at Urbana-Champaign",
          "Indiana University Bloomington",
          "University of Iowa",
          "Iowa State University",
          "University of Kansas",
          "Kansas State University",
        ],
        delay: 100,
        autoStart: true,
        loop: true,
        deleteSpeed: 100,
        pauseFor: 1750,
      }}
    />
  );
}

export default Type;
