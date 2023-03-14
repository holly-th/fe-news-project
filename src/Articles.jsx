import { useEffect, useState } from "react";
import { getArticles } from "./utils/api";

function Articles() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles().then((articleData) => {
      setArticles(articleData);
    });
  }, []);
  return (
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
              <h2>
                <p> {article.title}</p>
              </h2>
              <p>by {article.author}</p>

              <img
                className="articleImage"
                src={article.article_img_url}
                alt="related to topic of article "
              ></img>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
export default Articles;
