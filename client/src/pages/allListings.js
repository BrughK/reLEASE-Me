import React from "react";
import { useQuery } from "@apollo/client";
import Browse from "../components/Listings";

import { QUERY_LISTINGS } from "../utils/queries";

const AllLists = () => {
  const { loading, data } = useQuery(QUERY_LISTINGS);
  const listings = data?.listings || [];

  return (
    <body className="bg-main-yellow">
      <div className="">
        <div className="">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <Browse listings={listings} title="All Listings" />
          )}
        </div>
      </div>
    </body>
  );
};

export default AllLists;
