import { useEffect, useState } from "react";
import { getUsers } from "./utils/api";
function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((usersData) => {
      setUsers(usersData);
    });
  }, []);
  return users.map((user) => {
    return (
      <li className="user" key={user.username}>
        <p className="userpageUsername">{user.username}</p>
        <p className="userpageName">{user.name}</p>
        <img
          className="userpageImage"
          src={user.avatar_url}
          alt={user.username}
        ></img>
      </li>
    );
  });
}
export default Users;
