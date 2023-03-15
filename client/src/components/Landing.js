import Type from "./Type";
import React from "react";
import { Link } from "react-router-dom";

export default function Example() {
  return (
    <>
      {/* The rest */}
      <body className="bg-doc-gif full-class">
        <style type="text/css">{`.full-class{
          background-position: center;
          background-size: contain;
          height: 911px;
        }`}</style>

        <div className="relative isolate px-6 pt-24 lg:px-8">
          <div className="mx-auto max-w-2xl sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="[text-shadow:_1px_2px_3px_rgb(0_0_0_/_60%)] text-4xl font-bold tracking-tight text-main-dark sm:text-4xl md:text-6xl">
                Get Started at <Type />
              </h1>
              <p className="[text-shadow:_1px_2px_3px_rgb(0_0_0_/_40%)] mt-6 text-2xl leading-8 text-main-dark font-bold tracking-tight sm:text-4xl">
                Find or Lease your place today!
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to="/post-listing"
                  className="rounded-md bg-main-dark px-8 py-3 text-main-yellow text-lg font-semibold shadow-sm "
                >
                  Get started
                </Link>
                <Link
                  to="/about-us"
                  className="rounded-md bg-main-dark px-8 py-3 text-main-yellow text-lg font-semibold shadow-sm "
                >
                  Learn more!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
