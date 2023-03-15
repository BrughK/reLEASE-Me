import React from "react";
// import Kasen from "../assets/kasenprofile.png";
// import Hannah from "../assets/profilepic.jpg";
// import Jillian from "../assets/jillianprofile.jpeg";

const devData = [
  {
    name: "Kasen Brugh",
    picture: "https://avatars.githubusercontent.com/u/48495917?v=4",
    github: "https://github.com/BrughK",
    linkedin: "https://www.linkedin.com/in/kasen-brugh-3231221a7/",
  },
  {
    name: "Hannah Vaughan",
    picture: "https://avatars.githubusercontent.com/u/119354330?v=4",
    github: "https://github.com/hannahsvaughan",
    linkedin: "https://www.linkedin.com/in/hannahsvaughan/",
  },
  {
    name: "Jillian Hallmark",
    picture: "https://avatars.githubusercontent.com/u/118132928?v=4",
    github: "https://github.com/hakuxo",
    linkedin: "https://www.linkedin.com/in/jillian-hallmark-026648259/",
  },
];

const Devs = () => {
  return (
    <>
      <body className="bg-full-gif full-class">
        <style type="text/css">{`.full-class{
          height: 911px;
        }`}</style>

        <div style={{ display: "block" }}>
          <h4 className="text-5xl text-center py-2 pt-8 font-bold leading-7 text-main-dark sm:truncate sm:tracking-tight">
            Meet the Devs
          </h4>
          <div className="flex justify-center mt-20">
            {devData.map((dev, index) => (
              <div key={index} className="max-w-xs mx-4">
                <div className="bg-pale-dark shadow-lg rounded-lg border-solid border-4 overflow-hidden">
                  <img
                    className="w-full h-56 object-cover"
                    src={dev.picture}
                    alt={dev.name}
                  />
                  <div className="py-4 px-6 text-center">
                    <h1 className="text-2xl font-bold text-main-yellow">
                      {dev.name}
                    </h1>
                    <p className="py-2 text-lg text-gray-700">
                      {dev.description}
                    </p>
                    <div className="flex justify-center py-4">
                      <a
                        href={dev.github}
                        className="text-gray-600 hover:text-gray-800 mx-3"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <button className="inline-flex justify-center rounded-full bg-main-dark py-2 px-3 text-lg font-semibold text-main-yellow shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                          GitHub
                        </button>{" "}
                      </a>
                      <a
                        href={dev.linkedin}
                        className="text-gray-600 hover:text-gray-800 mx-3"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <button className="inline-flex justify-center rounded-full bg-main-dark py-2 px-3 text-lg font-semibold text-main-yellow shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                          LinkedIn
                        </button>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </body>
    </>
  );
};

export default Devs;
