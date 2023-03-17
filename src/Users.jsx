import { useEffect, useState } from "react";
import { getUsers } from "./utils/api";
function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((usersData) => {
      setUsers(usersData);
    });
  }, []);
  return (
    <section>
      <p className="usersIntro">Meet our lovely users!</p>
      {users.map((user) => {
        return (
          <section>
            <li className="user" key={user.username}>
              <p className="userpageUsername">{user.username}</p>
              <p className="userpageName">{user.name}</p>
              <img
                className="userpageImage"
                src={user.avatar_url}
                alt={user.username}
              ></img>
            </li>
          </section>
        );
      })}
    </section>
  );
}
export default Users;
