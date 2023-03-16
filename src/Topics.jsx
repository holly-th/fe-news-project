import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "./utils/api";
function Topics() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topicsList) => {
      setTopics(topicsList.results);
    });
  }, []);
  return (
    <section>
      {topics.map((topic) => {
        return (
          <li className="topicLink" key={topic.slug}>
            <Link to={`/articles?topic=${topic.slug}`}>
              <p>
                {topic.slug}: {topic.description}
              </p>
            </Link>
          </li>
        );
      })}
    </section>
  );
}
export default Topics;
