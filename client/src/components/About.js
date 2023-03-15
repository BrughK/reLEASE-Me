import React from "react";
import { Link } from "react-router-dom";

const links = [
  { name: "Home", href: "/" },
  { name: "Browse Listings", href: "/listings" },
  { name: "Meet the devs", href: "/developers-page" },
];
const stats = [
  { name: "Offices worldwide", value: "12" },
  { name: "Student Support", value: "30,000+" },
  { name: "Successful Postings", value: "1,000+" },
  { name: "Colleges Supported", value: "750" },
];

const About = () => {
  return (
    <div
      className="bg-full-gif full-class"
      style={{
        backgroundPosition: "center",
        backgroundSize: "contain",
      }}
    >
      <div className="relative isolate overflow-hidden py-24 sm:py-32">
        <div
          className="text-center px-6 lg:px-8 sm:mx-4 rounded-md bg-main-dark bg-opacity-90"
          style={{ maxWidth: "100vw" }}
        >
          <div className="mx-auto max-w-2xl py-4">
            <h2 className="text-4xl mb-4 font-bold tracking-tight text-main-yellow sm:text-6xl">
              About us
            </h2>
            <p
              className="mt-6 text-center overlinefont-medium text-lg leading-8 text-main-yellow"
              style={{ margin: "0 auto", maxWidth: "80vw" }}
            >
              {" "}
              Did you know? On average 2/5 college students will sublease their
              apartment or look for a new place every semester. Nowadays finding
              one central place to browse for apartments or sublease your own is
              next to impossible, and the places that do exist are only
              half-baked answers to the problem!
              <br />
              <br />
              ReLEASE Me is a MERN stack application designed to help college
              students find subleases or post listings of their own. With the
              ability to filter by school, gender, average rent, and more, users
              can quickly narrow down their search results to find the perfect
              match. In addition, users can connect with each other to discuss
              potential agreements and ensure a good fit for all parties
              involved.{" "}
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid text-2xl justify-center grid-cols-1 gap-y-6 gap-x-8 font-semibold leading-7 text-bright-yellow sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <Link key={link.name} to={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </Link>
              ))}
            </div>
            <dl className="grid grid-cols-1 gap-8 sm:mt-8 sm:pb-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.name}
                  className="flex flex-col-reverse border-opacity-50 rounded border-2 border-main-yellow"
                >
                  <dt className="text-base text-center font-semibold leading-7 text-bright-yellow">
                    {stat.name}
                  </dt>
                  <dd className="text-2xl text-center italic font-bold leading-9 tracking-tight text-main-yellow">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
