import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import CommentList from "../components/Comments";
import CommentForm from "../components/createComment";
import { QUERY_SINGLE_LISTING } from "../utils/queries";

const SingleListing = () => {
  const { listingId } = useParams();
  const { loading, data } = useQuery(QUERY_SINGLE_LISTING, {
    variables: { listingId: listingId },
  });

  const listing = data?.listing || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <body className="bg-full-gif full-class">
      <p className="opacity-0">lolololo</p>
      <style type="text/css">{`.full-class{
          background-position: center;
          background-size: contain;
          height: auto;
        }`}</style>

      <div className="my-3 mx-4 px-4 bg-main-dark rounded-md text-main-yellow p-4">
        <p className="text-4xl text-center font-bold sm:truncate sm:tracking-tight">
          {listing.listingAuthor} <br />
          <span className="tracking-wide" style={{ fontSize: "1rem" }}>
            created this listing on {listing.createdAt}
          </span>
        </p>
        <div className="bg-light py-2 ">
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
        </div>
      </div>

      <div className="mb-3 px-4">
        <CommentList comments={listing.comments} />
      </div>
      <div className="mb-2 px-4">
        <CommentForm listingId={listing._id} />
      </div>
      <p className="opacity-0">lolololo</p>
    </body>
  );
};

export default SingleListing;
