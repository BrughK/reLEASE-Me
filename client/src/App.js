import Landing from "./components/Landing";
import About from "./components/About";
import AllLists from "./pages/allListings";
import ListingForm from "./components/createListing";
import SingleListing from "./pages/oneListing";
import Devs from "./components/Devs";
import Soon from "./components/comingSoon";

import Footer from "./components/Footer";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Disclosure } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/24/outline";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

export default function Example() {
  return (
    <ApolloProvider client={client}>
      <Router>
        {/* Navbar */}
        <Disclosure as="nav" className="bg-main-dark">
          <div className="mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <Link
                      className="text-main-yellow transition ease-in-out delay-60 hover:opacity-50 rounded-md px-3 py-2 text-lg font-medium"
                      to="/"
                    >
                      ReLEASE Me
                    </Link>
                    <Link
                      className="text-main-yellow transition ease-in-out delay-60 hover:opacity-50 rounded-md px-3 py-2 text-lg font-medium"
                      to="/about"
                    >
                      About
                    </Link>
                    <Link
                      className="text-main-yellow transition ease-in-out delay-60 hover:opacity-50 rounded-md px-3 py-2 text-lg font-medium"
                      to="/listings"
                    >
                      Browse
                    </Link>
                    <Link
                      className="text-main-yellow transition ease-in-out delay-60 hover:opacity-50 rounded-md px-3 py-2 text-lg font-medium"
                      to="/post-listing"
                    >
                      Post a Listing
                    </Link>
                    <Link
                      className="text-main-yellow transition ease-in-out delay-60 hover:opacity-50 rounded-md px-3 py-2 text-lg font-medium"
                      to="/developers-page"
                    >
                      Devs
                    </Link>
                  </div>
                </div>
              </div>
              {/* Bell Icon */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link to="/coming-soon">
                  <button
                    type="button"
                    className="rounded-full p-1 text-main-yellow transition ease-in-out delay-60 hover:opacity-50 focus:ring-main-yellow focus:ring-offset-2 focus:ring-offset-pale-dark"
                  >
                    <BellIcon className="h-8 w-8" aria-hidden="true" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Disclosure>

        {/* React Router Routes */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/listings" element={<AllLists />} />
          <Route path="/post-listing" element={<ListingForm />} />
          <Route path="/developers-page" element={<Devs />} />
          <Route path="/listings/:listingId" element={<SingleListing />} />
          <Route path="/coming-soon" element={<Soon />} />
        </Routes>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}
