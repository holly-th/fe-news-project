import { useEffect, useState } from "react";
import { getArticles } from "./utils/api";
import { Link, useSearchParams } from "react-router-dom";
function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const topic = searchParams.get("topic");
  const sortby = searchParams.get("sortby");
  const orderby = searchParams.get("orderby");
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
      <Link to={"?orderby=asc"}>Ascending</Link>
      Sort by:
      <Link to={"/articles?sortby=author"}>Author</Link>
      <Link to={"/articles?sortby=topic"}>Topic</Link>
      <Link to={"/articles?sortby=created_at"}>Date</Link>
      <Link to={"/articles?sortby=votes"}>Votes</Link>
      <Link to={"/articles?sortby=article_id"}>Article ID</Link>
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
