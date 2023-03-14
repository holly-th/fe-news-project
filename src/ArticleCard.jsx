import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "./utils/api";

function ArticleCard() {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);

  useEffect(() => {
    getArticleById(article_id).then((articleData) => {
      setArticle(articleData);
    });
  }, [article_id]);
  console.log(article);
  return (
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
      <Comments article_id={article.article_id} />
    </li>
  );
}
export default ArticleCard;
