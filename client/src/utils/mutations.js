import { gql } from "@apollo/client";

export const ADD_LISTING = gql`
  mutation addListing(
    $listingText: String!
    $listingAuthor: String!
    $listingSchool: String!
    $listingAvgRent: String!
    $listingRoomies: String!
  ) {
    addListing(
      listingText: $listingText
      listingAuthor: $listingAuthor
      listingSchool: $listingSchool
      listingAvgRent: $listingAvgRent
      listingRoomies: $listingRoomies
    ) {
      _id
      listingText
      listingAuthor
      listingAvgRent
      listingRoomies
      listingSchool
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($listingId: ID!, $commentText: String!) {
    addComment(listingId: $listingId, commentText: $commentText) {
      _id
      listingAuthor
      listingText
      listingAvgRent
      listingRoomies
      listingSchool
      createdAt
      comments {
        _id
        createdAt
        commentText
      }
    }
  }
`;
