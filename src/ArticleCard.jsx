import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, patchVotes } from "./utils/api";
import Comments from "./Comments";

function ArticleCard() {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [voteCount, setVoteCount] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id).then((articleData) => {
      setArticle(articleData);
      setVoteCount(articleData.votes);
      setIsLoading(false);
    });
  }, [article_id]);

  const increment = () => {
    article.votes = voteCount;
    setVoteCount((currentCount) => currentCount + 1);
    patchVotes(article_id, 1).catch(() => {
      setVoteCount((currentCount) => currentCount - 1);
    });
  };
  const decrement = () => {
    if (voteCount >= 1) {
      article.votes = voteCount;
      setVoteCount((currentCount) => currentCount - 1);
      patchVotes(article_id, -1).catch(() => {
        <p className="errorMessage">Vote not added. Server down</p>;
        setVoteCount((currentCount) => currentCount + 1);
      });
    }
  };
  return isLoading ? (
    <p>Loading Articles...</p>
  ) : (
    <li>
      <h3>{article.title}</h3>
      <h4>Topic: {article.topic}</h4>
      <img
        className="articleImage"
        src={article.article_img_url}
        alt="related to topic of article"
      ></img>
      <p>{article.body}</p>
      <p>By {article.author}</p>
      <p>Posted on: {article.created_at}</p>
      <p>Votes: {article.votes}</p>
      <p>Votes: {voteCount}</p>
      <button onClick={increment}>Upvote 👍</button>
      <button onClick={decrement}>Downvote 👎</button>

      <Comments article_id={article.article_id} />
    </li>
  );
}
export default ArticleCard;
