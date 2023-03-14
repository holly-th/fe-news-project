import { useEffect, useState } from "react";
import { getArticles } from "./utils/api";
import { Link } from "react-router-dom";
function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    getArticles().then((articleData) => {
      setArticles(articleData);
      setIsLoading(false);
    });
  }, []);
  return isLoading ? (
    <p>Loading Articles...</p>
  ) : (
    <section>
      <p>Get started writing, reading and learning!</p>
      <img
        src="https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
        alt="shop window with whats your story message in lights "
        className="starterImage"
      ></img>
      <ul className="articleList">
        <p>All articles available</p>
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
