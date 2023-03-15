import React from "react";

const CommentList = ({ comments = [] }) => {
  console.log(comments);
  if (!comments.length) {
    return (
      <h3 className="[text-shadow:_1px_2px_3px_rgb(0_0_0_/_60%)] text-3xl font-bold tracking-tight text-center text-main-dark sm:text-3xl md:text-4xl">
        No Comments Yet <br />
        Post one below!
      </h3>
    );
  }

  return (
    <>
      <div className="bg-main-dark rounded-md text-main-yellow p-4">
        <h2 className="text-3xl text-center py-4 font-bold leading-7 text-main-yellow sm:truncate sm:tracking-tight p-3">
          Comments
        </h2>
        <div className="flex-row my-4">
          {comments &&
            comments.map((comment) => (
              <div key={comment._id} className="col-12 mb-3 pb-3">
                <div className="px-3 py-1 bg-dark text-light">
                  <h5 className="font-medium text-lg">
                    A user commented{" "}
                    <span style={{ fontSize: "1rem" }}>
                      on {comment.createdAt}
                    </span>
                  </h5>
                  <p className="break-all pr-2 italic">{comment.commentText}</p>
                </div>
                <div class="relative flex py-5 items-center">
                  <div class="flex-grow border-t opacity-50"></div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default CommentList;
