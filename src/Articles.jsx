import { useEffect, useState } from "react";
import { getArticles } from "./utils/api";
import { Link, useSearchParams } from "react-router-dom";
function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const topic = searchParams.get("topic");
  const sortby = searchParams.get("sortby");
  const orderby = searchParams.get("orderby");

  function sortBy(query) {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("sortby", query);
    setSearchParams(newParams);
  }
  function orderBy(order) {
    const newOrderBy = new URLSearchParams(searchParams);
    newOrderBy.set("orderby", order);
    setSearchParams(newOrderBy);
  }

  useEffect(() => {
    setIsLoading(true);
    getArticles(topic, sortby, orderby).then((articleData) => {
      setArticles(articleData);
      setIsLoading(false);
    });
  }, [topic, sortby, orderby]);

  return isLoading ? (
    <p>Loading Articles...</p>
  ) : (
    <section>
      orderby:
      <button
        onClick={() => {
          orderBy("asc");
        }}
      >
        Ascending
      </button>
      <button
        onClick={() => {
          orderBy("desc");
        }}
      >
        Descending
      </button>
      Sort by:
      <button
        onClick={() => {
          sortBy("author");
        }}
      >
        Author
      </button>
      <button
        onClick={() => {
          sortBy("topic");
        }}
      >
        Topic
      </button>
      <button
        onClick={() => {
          sortBy("created_at");
        }}
      >
        Date
      </button>
      <button
        onClick={() => {
          sortBy("votes");
        }}
      >
        Votes
      </button>
      <button
        onClick={() => {
          sortBy("article_id");
        }}
      >
        Article Id
      </button>
      <p>Get started writing, reading and learning!</p>
      <img
        src="https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
        alt="shop window with whats your story message in lights "
        className="starterImage"
      ></img>
      <ul className="articleList">
        {topic ? (
          <p>All articles available on {`${topic}`}</p>
        ) : (
          <p>All articles available</p>
        )}
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
