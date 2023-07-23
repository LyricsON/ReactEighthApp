import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    axios
      .get(apiUrl)
      .then((response) => {
        setListOfUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <div className="list">
      <ul className="user-list">
        {listOfUsers.map((user) => (
          <li key={user.id}>
            <img
              className="avatar"
              src={`https://i.pravatar.cc/50?img=${user.id}`} // site mte3 avatars deja 7adhrin
              alt={user.name}
            />
            <div className="user-info">
              <p className="user-name">{user.name}</p>
              <p className="user-email">{user.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
