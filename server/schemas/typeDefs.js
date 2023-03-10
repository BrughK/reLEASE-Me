const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Listing {
    _id: ID
    listingText: String
    listingAuthor: String
    listingSchool: String
    listingAvgRent: String
    listingRoomies: String
    createdAt: String
    comments: [Comment]!
  }
  type Comment {
    _id: ID
    commentText: String
    createdAt: String
  }
  type Query {
    listings: [Listing]!
    listing(listingId: ID!): Listing
  }
  type Mutation {
    addListing(
      listingText: String!
      listingAuthor: String!
      listingSchool: String!
      listingAvgRent: String!
      listingRoomies: String!
    ): Listing
    addComment(listingId: ID!, commentText: String!): Listing
    removeListing(listingId: ID!): Listing
    removeComment(listingId: ID!, commentId: ID!): Listing
  }
`;

module.exports = typeDefs;
