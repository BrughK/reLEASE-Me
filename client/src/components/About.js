import React from "react";
const links = [
  { name: 'Home', href: '/' },
  { name: 'Browse Listings', href: '/listings' },
  { name: 'Meet the devs', href: '/developers-page' },
]
const stats = [
  { name: 'Offices worldwide', value: '12' },
  { name: 'Student Support', value: '300+' },
  { name: 'Listings', value: '40' },
  { name: 'Paid time off', value: 'Unlimited' },
]

const About = () => {
  return (
    <body className="bg-main-yellow full-class">
      <style type="text/css">{`.full-class{
        background-position: center;
        background-size: contain;
        height: 911px;}`}</style>
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center bg-doc-gif full-class"/>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 rounded-3xl bg-pale-dark bg-opacity-80">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-main-yellow sm:text-6xl">About us</h2>
            <p className="mt-6 text-lg leading-8 text-bright-yellow"> reLease ME is a multi-use website to allow students to list their apartments or homes they are needing to find roomates, or even find someone to sublease to! </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-y-6 gap-x-8 text-base font-semibold leading-7 text-bright-yellow sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-bright-yellow">{stat.name}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-main-yellow">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </body>
  );
};

export default About;
