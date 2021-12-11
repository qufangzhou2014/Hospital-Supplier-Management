import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import {setUser, setIsLogin} from "../feature/userSlice";
import {useDispatch} from 'react-redux';

function User() {
  const [userList, setUserList] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();
  const secColor = {
    backgroundColor: "#61839a",
  };

  const styCollr2 = {
    color: "white",
  };

  const textStyle = {
    textAlign: "center",
  };

  useEffect(() => {
    axios
      .get("http://localhost:8081/users/")
      .then((res) => {
        setUserList(res.data);
        console.log(res, "response");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getBack = () => {
    history.push("/mainpage");
  };

  const addNewUser = () => {
    dispatch(setIsLogin());
    history.push("/signup");
  };

  const deleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      axios
        .delete(`http://localhost:8081/users/delete/${id}`)
        .then((response) => {
          if (response.data === "User deleted!") {
            alert("User deleted!");
            window.location.reload(false);
          }
        })
        .catch((err) => {
          console.log(err);
          alert(`${err.message}`);
        });
    }
  };

  const editUser = (id) => {
      const userToUpdate = userList.find(user => user.id === id);
      dispatch(setUser(userToUpdate));
      history.push("/edituser");
  };

  return (
    <body style={secColor}>
      <div className="container">
        <h2>User Details:</h2>

        <div className="table">
          <table
            className="table table-borded table-responsive table-striped "
            id="table-list"
            style={styCollr2}
          >
            <thead className="table-dark">
              <tr>
                <th style={textStyle}>user_id</th>
                <th style={textStyle}>user_name</th>
                <th style={textStyle}>first_name</th>
                <th style={textStyle}>last_name</th>
                <th style={textStyle}>address</th>
                <th style={textStyle}>designation</th>
                <th style={textStyle}>gender</th>
                <th style={textStyle}>password</th>
                <th style={textStyle}>phone_number</th>
                <th style={textStyle}>email</th>
              </tr>
            </thead>
            <tbody>
              {userList.length > 0 &&
                userList.map((user, index) => {
                  return (
                    <tr index={user.id} key={index}>
                      <td style={textStyle}>{user.userId}</td>
                      <td style={textStyle}>{user.userName}</td>
                      <td style={textStyle}>{user.firstName}</td>
                      <td style={textStyle}>{user.lastName}</td>
                      <td style={textStyle}>{user.address}</td>
                      <td style={textStyle}>{user.designation}</td>
                      <td style={textStyle}>{user.gender}</td>
                      <td style={textStyle}>{user.password}</td>
                      <td style={textStyle}>{user.phoneNumber}</td>
                      <td style={textStyle}>{user.email}</td>
                      <td>
                        <button
                          onClick={() => {
                            editUser(user.id);
                          }}
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            deleteUser(user.id);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <div>
            <button
              className="btn btn-info"
              id="add"
              style={{ marginRight: "80px", textAlign: "center" }}
              onClick={addNewUser}
            >
              <span className="fa fa-plus-sign"></span>Add
            </button>
            <button className="btn btn-info" id="add" onClick={getBack}>
              <span className="fa fa-plus-sign"></span>Back
            </button>
          </div>
        </div>
      </div>
    </body>
  );
}
export default User;
