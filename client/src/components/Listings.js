import React, { useState } from "react";
import { Link } from "react-router-dom";

const Browse = ({ listings, title }) => {
  const [sortOrder, setSortOrder] = useState();

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const sortedListings = () => {
    if (sortOrder === "asc") {
      return listings
        .slice()
        .sort((a, b) => a.listingAvgRent - b.listingAvgRent);
    } else if (sortOrder === "desc") {
      return listings
        .slice()
        .sort((a, b) => b.listingAvgRent - a.listingAvgRent);
    } else {
      return listings;
    }
  };

  if (!listings.length) {
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
              <h1 className="[text-shadow:_1px_2px_3px_rgb(0_0_0_/_60%)] text-4xl font-bold tracking-tight text-main-dark sm:text-4xl md:text-6xl">
                No Listings Yet! <br /> Check back soon, or post your own now!
              </h1>
            </div>
          </div>
        </div>
      </body>
    );
  }

  return (
    <div className="mx-3">
      <p className="[text-shadow:_1px_2px_3px_rgb(0_0_0_/_60%)] pb-4 text-5xl text-center font-bold tracking-tight text-main-dark sm:text-4xl md:text-5xl">
        {title}
      </p>
      <div className="flex py-3 text-xl font-semibold rounded-md bg-main-dark justify-center text-main-yellow">
        <label htmlFor="sortOrder" className="m-2">
          Sort by price:
        </label>
        <select
          id="sortOrder"
          name="sortOrder"
          value={sortOrder}
          onChange={handleSortOrderChange}
          className="text-main-yellow bg-main-dark text-center rounded"
        >
          <option value="none">No Sort</option>
          <option value="asc">Lowest - Highest</option>
          <option value="desc">Highest - Lowest</option>
        </select>
      </div>
      {sortedListings().map((listing) => (
        <div
          key={listing._id}
          className="bg-main-dark rounded-lg text-main-yellow p-3 mt-3"
        >
          <p className="text-4xl text-center font-bold sm:truncate sm:tracking-tight">
            {listing.listingAuthor} <br />
            <span
              className="text-main-dark italic"
              style={{ fontSize: "1rem" }}
            >
              created this listing on {listing.createdAt}
            </span>
          </p>

          <p className="text-2xl font-medium">
            School: {listing.listingSchool}
          </p>

          <p className="text-xl font-medium">
            Roommates: {listing.listingRoomies}
          </p>

          <p className="text-xl font-medium">
            Average Rent: {listing.listingAvgRent}
          </p>

          <p className="text-xl font-medium mb-2">
            Description: {listing.listingText}
          </p>
          <Link
            className="bg-pale-dark hover:opacity-60 transition ease-in-out delay-60 font-bold py-2 rounded"
            to={`/listings/${listing._id}`}
            style={{ display: "flex", justifyContent: "center" }}
          >
            Check out this listing!
          </Link>
        </div>
      ))}
      <p className="opacity-0">lolololo</p>
    </div>
  );
};

export default Browse;
