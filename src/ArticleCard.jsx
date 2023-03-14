import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "./utils/api";
import Comments from "./Comments";
import AddComment from "./AddComment";

function ArticleCard() {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id).then((articleData) => {
      setArticle(articleData);
      setIsLoading(false);
    });
  }, [article_id]);
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
      <AddComment article_id={article.article_id} />
      <Comments article_id={article.article_id} />
    </li>
  );
}
export default ArticleCard;
