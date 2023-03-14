import React from "react";
import { Link } from "react-router-dom";

const Browse = ({ listings, title }) => {
  if (!listings.length) {
    return <h3>No Listings</h3>;
  }

  return (
    <div className="mx-3">
      <p className="text-5xl text-center py-4 font-bold leading-7 text-main-dark sm:truncate sm:tracking-tight">
        {title}
      </p>
      {listings &&
        listings.map((listing) => (
          <div
            key={listing._id}
            className="bg-pale-dark rounded-lg text-main-yellow p-3 my-3"
          >
            <p className="text-4xl text-center font-bold sm:truncate sm:tracking-tight">
              {listing.listingAuthor} <br />
              <span className="text-main-dark" style={{ fontSize: "1rem" }}>
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
              className="bg-main-dark hover:opacity-60 transition ease-in-out delay-60 font-bold py-2 rounded"
              to={`/listings/${listing._id}`}
              style={{ display: "flex", justifyContent: "center" }}
            >
              Check out this listing!
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Browse;
