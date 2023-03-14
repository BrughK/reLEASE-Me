import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import { ADD_COMMENT } from "../utils/mutations";

const CommentForm = ({ listingId }) => {
  const [commentText, setCommentText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addComment({
        variables: { listingId, commentText },
      });

      setCommentText("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "commentText" && value.length <= 350) {
      setCommentText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div className="bg-main-dark rounded-md text-main-yellow p-4">
      <h4 className="font-medium">
        Got any questions or interested in the place?
      </h4>
      <p
        className={`m-0 text-sm italic ${
          characterCount === 350 || error ? "text-danger" : ""
        }`}
      >
        Character Count: {characterCount}/350
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12 col-lg-9">
          <textarea
            name="commentText"
            placeholder="(Hey I'm interested contact me here user123@gmail.com)"
            value={commentText}
            className="form-input w-full h-32 bg-pale-dark text-main-yellow focus:border-main-yellow border-2 border-solid"
            style={{ lineHeight: "1.5" }}
            onChange={handleChange}
          ></textarea>
        </div>

        <div
          className="my-2"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <button
            className="bg-pale-dark p-3 rounded-full font-medium"
            type="submit"
          >
            Add Comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
