import { useEffect } from "react";
import { postComment } from "./utils/api";

export function AddComment({ article_id }) {
  useEffect(() => {
    postComment(
      article_id,
      "grumpy19",
      "I love cooking and trying new food"
    ).then((data) => {
      console.log(data);
    });
  });
  return (
    <form>
      <label>
        Username:
        <input className="username"></input>
      </label>

      <label>
        Comment
        <textarea></textarea>
      </label>
      <button className="postCommentButton" type="submit">
        Post comment
      </button>
    </form>
  );
}
export default AddComment;
