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
    (<h5>Comments</h5>),
    (
      <ul>
        {comments.map((comment) => {
          return (
            <li>
              {comment.author} commented
              {comment.body} about articleId {comment.article_id}
              on {comment.created_at}
              {comment.votes} Votes
            </li>
          );
        })}
      </ul>
    )
  );
}
export default Comments;
