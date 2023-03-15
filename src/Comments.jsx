import { useEffect, useState } from "react";
import { getComments } from "./utils/api";

function Comments({ article_id }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(article_id).then((results) => {
      setComments(results);
    });
  }, [article_id]);

  return (
    <ul>
      <h3>Comments</h3>
      {comments.map((comment) => {
        return (
          <li key={comment.comment_id}>
            <p>{comment.author} commented:</p>
            <p>{comment.body}</p>
            <p> on {comment.created_at}</p>
            <p>{comment.votes} Votes</p>
          </li>
        );
      })}
    </ul>
  );
}
export default Comments;
