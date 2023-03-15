import { Link } from "react-router-dom";
import Topics from "./Topics";

function Nav() {
  return (
    <section>
      <nav className="nav">
        <Link to={"/"}>
          <button className="homeButton">Home</button>
        </Link>

        <Link to={"/topics"}>
          <button onClick={<Topics />} className="topicsButton">
            Topics
          </button>
        </Link>

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
