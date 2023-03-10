const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const listingSchema = new Schema({
  listingText: {
    type: String,
    required: "Say something!",
    minlength: 1,
    maxlength: 350,
    trim: true,
  },
  listingAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  listingSchool: {
    type: String,
    required: true,
    trim: true,
  },
  listingAvgRent: {
    type: Integer,
    required: true,
  },
  listingRoomies: {
    type: string,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});
