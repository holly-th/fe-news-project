import { useEffect, useState } from "react";
import { getArticles } from "./utils/api";

function Articles() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles().then((articleData) => {
      setArticles(articleData);
    });
  });
  console.log(articles);
  return (
    <section>
      <ul>
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <h2>
                <p> {article.title}</p>
              </h2>
              <p>by {article.author}</p>

              <img
                src={`${article.article_img_url}`}
                alt={` ${article.topic}`}
              ></img>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
export default Articles;
