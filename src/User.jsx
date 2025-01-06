// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import "./User.css";
// const User = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://backend-mern-s7bz.onrender.com/api/user/fetch")
//       .then((res) => {
//         console.log(res.data);
//         setUsers(res.data.data); // Assuming the API returns data in res.data.data
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   const deleteUser = (id) => {
//     if (window.confirm("Are you sure you want to delete this user?")) {
//       axios
//         .delete(`https://backend-mern-s7bz.onrender.com/api/user/delete/${id}`)
//         .then(() => {
//           alert("User deleted successfully");
//           setUsers(users.filter((user) => user._id !== id)); // Update the UI after deletion
//         })
//         .catch((error) => {
//           console.log(error);
//           alert("Failed to delete user");
//         });
//     }
//   };

//   return (
//     <div>
//       <img
//         src="https://t3.ftcdn.net/jpg/03/67/35/72/360_F_367357209_BG07SVnnB4HSHSaMiHajfZhrZZAE859A.jpg"
//         style={{ display: "block", margin: "0 auto" }} // Centers the image
//         alt="Centered"
//       />
    
//       <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "10vh" }}>
//   <Link
//     to={`/create`}
//     style={{
//       padding: "10px 20px",
//       backgroundColor: "#4a60dc",
//       color: "white",
//       textDecoration: "none",
//       borderRadius: "5px",
//       textAlign: "center",
//     }}
//   >
//     Create
//   </Link>
// </div>

//   <div>
//     <h1 textAlign="center" fontSize="24px" textDecoration="underline">Userslist</h1>
//   </div>

//       <table border={1} style={{ width: "100%", borderCollapse: "collapse" }}>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Address</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user._id}>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>{user.address}</td>
//               <td>
            
//                 <Link
//   to={`/update/${user._id}`}
//   style={{
//     marginRight: "10px",
//     padding: "10px 20px",
//     backgroundColor: "#4a60dc", // Green background
//     color: "white",             // White text
//     textDecoration: "none",     // Remove underline
//     borderRadius: "5px",        // Rounded corners
//     display: "inline-block",    // Treat as a block element
//     textAlign: "center",       // Center the text
//   }}
// >
//   Update
// </Link>

// <button
//   onClick={() => deleteUser(user._id)}
//   style={{
//     marginRight: "10px",
//     backgroundColor: "red",
//     color: "white",
//     border: "none",
//     padding: "10px 20px",
//     borderRadius: "5px",
//     cursor: "pointer",
//   }}
// >
//   Delete
// </button>

//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default User;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./User.css";

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
      <img
        src="https://i.pinimg.com/originals/51/bd/c9/51bdc900f42f3fc2d25ff6eaba2e15a1.gif"
        className="user-image"
        alt="Centered"
      />

      <div className="create-button-container">
        <Link to={`/create`} className="create-button">
          Create
        </Link>
      </div>

      <div>
        <h1 className="userslist-heading">Userslist</h1>
      </div>

      <table className="user-table">
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
                <Link
                  to={`/update/${user._id}`}
                  className="action-button update-button"
                >
                  Update
                </Link>

                <button
                  onClick={() => deleteUser(user._id)}
                  className="action-button delete-button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
