import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://backend-mern-s7bz.onrender.com/api/user/fetch")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data.data); // Assuming the API returns data in res.data.data
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      axios
        .delete(`https://backend-mern-s7bz.onrender.com/api/user/delete/${id}`)
        .then(() => {
          alert("User deleted successfully");
          setUsers(users.filter((user) => user._id !== id)); // Update the UI after deletion
        })
        .catch((error) => {
          console.log(error);
          alert("Failed to delete user");
        });
    }
  };

  return (
    <div>
      <img src="https://t3.ftcdn.net/jpg/03/67/35/72/360_F_367357209_BG07SVnnB4HSHSaMiHajfZhrZZAE859A.jpg"/>
      <Link to="/create">Create User</Link>
      <table border={1} style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>
                <Link to={`/update/${user._id}`} style={{ marginRight: "10px" }}>
                  Update
                </Link>
                <button onClick={() => deleteUser(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
