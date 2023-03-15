import React, { Component } from "react";

const Soon = () => {
  return (
    <body className="bg-full-gif full-class">
      <style type="text/css">{`.full-class{
  background-position: center;
  background-size: contain;
  height: 911px;
}`}</style>
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-2xl sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="[text-shadow:_1px_2px_3px_rgb(0_0_0_/_60%)] mb-6 text-4xl font-bold tracking-tight text-main-dark sm:text-4xl md:text-6xl">
              Coming Soon!
            </h1>
            <a
              target="none"
              href="https://github.com/BrughK/reLEASE-Me/issues"
              className="rounded-md bg-main-dark px-8 py-3 text-main-yellow text-lg font-semibold shadow-sm "
            >
              Submit A Bug
            </a>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Soon;
