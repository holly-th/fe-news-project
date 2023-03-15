import { useEffect, useState } from "react";
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
          <li className="topicsList" key={topic.slug}>
            <p>{topic.slug}</p>
            <p>{topic.description}</p>
          </li>
        );
      })}
    </section>
  );
}
export default Topics;
