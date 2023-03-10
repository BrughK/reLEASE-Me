const { Listing } = require("../models");

const resolvers = {
  Query: {
    listings: async () => {
      return Listing.find().sort({ createdAt: -1 });
    },
    listing: async (parent, { listingId }) => {
      return Listing.findOne({ _id: listingId });
    },
  },

  Mutation: {
    addListing: async (parent, { listingText, listingAuthor }) => {
      return Listing.create({ listingText, listingAuthor });
    },
    addComment: async (parent, { listingId, commentText }) => {
      return Listing.findOneAndUpdate(
        { _id: listingId },
        {
          $addToSet: { comments: { commentText } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeListing: async (parent, { listingId }) => {
      return Listing.findOneAndDelete({ _id: listingId });
    },
    removeComment: async (parent, { listingId, commentId }) => {
      return Listing.findOneAndUpdate(
        { _id: listingId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
