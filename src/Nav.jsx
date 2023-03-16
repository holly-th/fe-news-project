import { Link } from "react-router-dom";

function Nav() {
  return (
    <section>
      <nav className="nav">
        <Link className="homeButton" to={"/"}>
          Home
        </Link>

        <Link className="topicsButton" to={"/topics"}>
          Topics
        </Link>

        <Link className="usersButton" to={"/users"}>
          Users
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
