import React from "react";
import { Link } from "react-router-dom";

// !UPDATE THIS TO LISTING VARS

const Browse = ({ thoughts, title }) => {
  return (
    <div>
      <h3>{title}</h3>
      {thoughts &&
        thoughts.map((thought) => (
          <div
            key={thought._id}
            className="bg-white rounded-lg shadow-md p-4 mb-4"
          >
            <h4 className="text-lg font-medium mb-2">
              {thought.thoughtAuthor}
            </h4>
            <p className="text-gray-500 mb-2 text-sm">
              had this thought on {thought.createdAt}
            </p>
            <p className="text-gray-700">{thought.thoughtText}</p>
            <Link
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 inline-block"
              to={`/thoughts/${thought._id}`}
            >
              Join the discussion on this thought
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Browse;
