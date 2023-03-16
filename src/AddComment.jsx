import { useState } from "react";
import ErrorMessages from "./ErrorMessages";
import { postComment } from "./utils/api";

export function AddComment({ setComments, article_id }) {
  const [username, setUsername] = useState(null);
  const [body, setBody] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setDisabled(true);

    postComment(article_id, username, body)
      .then((newComment) => {
        setComments((currentComments) => [newComment[0], ...currentComments]);
        setBody("");
        setUsername("");
        setDisabled(false);
        setError(false);
      })
      .catch(() => {
        setError(true);
      });
  }

  return error ? (
    <ErrorMessages error={error} />
  ) : (
    <form className="addCommentForm">
      <p>Add a comment! 😊 </p>
      <label className="username">
        Username:
        <input
          value={username}
          className="usernameInput"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        ></input>
      </label>
      <label className="commentBody">
        Comment
        <textarea
          value={body}
          className="commentBodyInput"
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
