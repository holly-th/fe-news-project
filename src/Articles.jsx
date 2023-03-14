import { useEffect, useState } from "react";
import { getArticles } from "./utils/api";
import { Link } from "react-router-dom";
function Articles() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles().then((articleData) => {
      setArticles(articleData);
    });
  }, []);
  return (
    <section>
      <ul className="articleList">
        {articles.map((article) => {
          return (
            <li className="li" key={article.article_id}>
              <Link to={`/articles/${article.article_id}`}>
                <h2>
                  <p> {article.title}</p>
                </h2>
                <p>by {article.author}</p>

                <img
                  className="articleImages"
                  src={article.article_img_url}
                  alt="related to topic of article "
                ></img>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
export default Articles;
