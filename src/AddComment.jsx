import { useState } from "react";
import { postComment } from "./utils/api";

export function AddComment({ setComments, article_id }) {
  const [username, setUsername] = useState("");
  const [body, setBody] = useState("");
  const [disabled, setDisabled] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setDisabled(true);

    postComment(article_id, username, body)
      .then((newComment) => {
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
      <p>Comments can only be posted once! 😊 </p>;
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
        disabled={disabled}
        onClick={handleSubmit}
      >
        Post comment
      </button>
    </form>
  );
}
export default AddComment;
