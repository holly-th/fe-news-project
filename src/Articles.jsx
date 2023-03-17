import { useEffect, useState } from "react";
import { getArticles } from "./utils/api";
import { Link, useSearchParams } from "react-router-dom";
import ErrorMessages from "./ErrorMessages";
function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [err, setErr] = useState();
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
    getArticles(topic, sortby, orderby)
      .then((articleData) => {
        setArticles(articleData);
        setIsLoading(false);
      })
      .catch((error) => {
        setErr(error.response);
      });
  }, [topic, sortby, orderby]);

  return (
    <>
      {err ? (
        <ErrorMessages err={err} />
      ) : isLoading ? (
        <p>Loading Articles...</p>
      ) : (
        <section>
          <p className="orderbyText">Order articles by:</p>
          <button
            className="ascButton"
            onClick={() => {
              orderBy("asc");
            }}
          >
            Ascending
          </button>
          <button
            className="descButton"
            onClick={() => {
              orderBy("desc");
            }}
          >
            Descending
          </button>
          <p className="sortbyText">Sort articles by:</p>
          <button
            className="authorButton"
            onClick={() => {
              sortBy("author");
            }}
          >
            Author
          </button>
          <button
            className="topicButton"
            onClick={() => {
              sortBy("topic");
            }}
          >
            Topic
          </button>
          <button
            className="dateButton"
            onClick={() => {
              sortBy("created_at");
            }}
          >
            Date
          </button>
          <button
            className="votesButton"
            onClick={() => {
              sortBy("votes");
            }}
          >
            Votes
          </button>
          <button
            className="article_idButton"
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
      )}
    </>
  );
}
export default Articles;
