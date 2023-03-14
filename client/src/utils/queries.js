import { gql } from "@apollo/client";

export const QUERY_LISTINGS = gql`
  query getListings {
    listings {
      _id
      listingAuthor
      listingAvgRent
      listingRoomies
      listingSchool
      listingText
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

export const QUERY_SINGLE_LISTING = gql`
  query getSingleListing($listingId: ID!) {
    listing(listingId: $listingId) {
      _id
      listingAuthor
      listingAvgRent
      listingRoomies
      listingSchool
      listingText
      createdAt
      comments {
        commentText
        createdAt
        _id
      }
    }
  }
`;
