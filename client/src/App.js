import Landing from "./components/Landing";
import Bean from "./components/TestComp";
import Footer from "./components/Footer";
// import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Disclosure } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/24/outline";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Example() {
  return (
    <Router>
      {/* Navbar */}
      <Disclosure as="nav" className="bg-main-dark">
        <div className="mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link
                    className="text-main-yellow hover:bg-gray-700 transition ease-in-out delay-60 hover:opacity-50 rounded-md px-3 py-2 text-lg font-medium"
                    to="/"
                  >
                    ReLEASE Me
                  </Link>
                  <Link
                    className="text-main-yellow hover:bg-gray-700 transition ease-in-out delay-60 hover:opacity-50 rounded-md px-3 py-2 text-lg font-medium"
                    to="/lol"
                  >
                    About
                  </Link>
                  <Link
                    className="text-main-yellow hover:bg-gray-700 transition ease-in-out delay-60 hover:opacity-50 rounded-md px-3 py-2 text-lg font-medium"
                    to="/"
                  >
                    Browse
                  </Link>
                  <Link
                    className="text-main-yellow hover:bg-gray-700 transition ease-in-out delay-60 hover:opacity-50 rounded-md px-3 py-2 text-lg font-medium"
                    to="/"
                  >
                    Post a Listing
                  </Link>
                  <Link
                    className="text-main-yellow hover:bg-gray-700 transition ease-in-out delay-60 hover:opacity-50 rounded-md px-3 py-2 text-lg font-medium"
                    to="/"
                  >
                    Devs
                  </Link>
                </div>
              </div>
            </div>
            {/* Bell Icon */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="rounded-full p-1 text-main-yellow transition ease-in-out delay-60 hover:opacity-50 focus:ring-main-yellow focus:ring-offset-2 focus:ring-offset-pale-dark"
              >
                <BellIcon className="h-8 w-8" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </Disclosure>

      {/* React Router Routes lol */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/lol" element={<Bean />} />
        {/* Create a route to display a single thought's comments based on its `thoughtId` provided in the URL */}
        {/* <Route path="/thoughts/:thoughtId" element={<SingleThought />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}
