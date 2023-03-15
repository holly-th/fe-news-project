import { useState } from "react";
import { postComment } from "./utils/api";

export function AddComment({ setComments, article_id }) {
  const [username, setUsername] = useState("");
  const [body, setBody] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    postComment(article_id, username, body)
      .then((newComment) => {
        console.log(newComment);
        setComments((currentComments) => [newComment[0], ...currentComments]);
      })
      .catch(() => {
        <p className="errorMessage">
          Comment not added. User not recognised or server is down
        </p>;
      });
  }

  return (
    <form>
      <label>
        Username:
        <input
          className="username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        ></input>
      </label>

      <label>
        Comment
        <textarea
          className="commentBody"
          onChange={(event) => {
            setBody(event.target.value);
          }}
        ></textarea>
      </label>
      <button
        className="postCommentButton"
        type="submit"
        onClick={handleSubmit}
      >
        Post comment
      </button>
    </form>
  );
}
export default AddComment;
