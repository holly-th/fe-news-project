import { useState } from "react";
import { Link } from "react-router-dom";
import Topic from "./Topic";

function Nav() {
  const [topicValue, setTopicValue] = useState("");
  return (
    <section>
      <nav className="nav">
        <Link to={"/"}>
          <button className="homeButton">Home</button>
        </Link>
        <select
          className="topicsButton"
          value={topicValue}
          onChange={(event) => {
            setTopicValue(event.target.value);
          }}
        >
          <Topic topic={topicValue} />;
          <option disabled value="">
            Topics
          </option>
          <option value="football">Football</option>
          <option value="cooking">Cooking</option>
          <option value="coding">Coding</option>
        </select>

        <Link to={"/users"}>
          <button className="usersButton">Users</button>
        </Link>
      </nav>
      <p className="welcomeMessage">Welcome to NC news!</p>
      <p className="welcomeMessage">
        The only place for sharing, creating, and debating!
      </p>
    </section>
  );
}
export default Nav;
