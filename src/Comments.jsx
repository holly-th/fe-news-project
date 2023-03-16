import { useEffect, useState } from "react";
import { getComments } from "./utils/api";
import AddComment from "./AddComment";

function Comments({ article_id }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(article_id).then((results) => {
      results.map((comment) => {
        const readableDate = new Date(comment.created_at);
        const date = readableDate.getDate();
        const month = readableDate.getMonth();
        const year = readableDate.getFullYear();
        const hour = readableDate.getHours();
        const min = readableDate.getMinutes();
        return (comment.created_at = `${date}/${month}/${year} at ${hour}:${min}`);
      });

      setComments(results);
    });
  }, [article_id]);

  return (
    <section>
      <AddComment setComments={setComments} article_id={article_id} />
      <ul className="commentsList">
        <h3>Comments</h3>

        {comments.map((comment) => {
          return (
            <li className="singleComment" key={comment.comment_id}>
              <p>{comment.author} commented:</p>
              <p>{comment.body}</p>
              <p> on {comment.created_at}</p>
              <p>{comment.votes} Votes</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
export default Comments;
