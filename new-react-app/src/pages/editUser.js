import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { resetUser } from "../feature/userSlice";
import { useSelector, useDispatch } from "react-redux";

export const EditUser = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const editUser = useSelector((state) => state.user.user);
  const [firstname, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [gender, setGender] = useState("F");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [userId, setUserId] = useState("");

  const secColor = {
    backgroundColor: "#61839a",
  };

  const borradius = {
    borderRadius: "15px",
  };

  const updateUser = (e) => {
    e.preventDefault();
    const updateUser = {
      userId: userId === '' ? editUser.userId : userId,
      userName: userName === '' ? editUser.userName : userName,
      firstName: firstname === '' ? editUser.firstName : firstname,
      lastName: lastName === '' ? editUser.lastName: lastName,
      password: password === '' ? editUser.password : password,
      gender: gender === '' ? editUser.gender : gender,
      address: address === '' ? editUser.address : address,
      email: email === '' ? editUser.email : email,
      designation: designation === '' ? editUser.designation : designation,
      phoneNumber: phoneNumber === '' ? editUser.phoneNumber : phoneNumber,
    };
    axios
      .post(`http://localhost:8081/users/update/${editUser.id}`, updateUser)
      .then((response) => {
        if (response.data === "User updated successfully") {
          alert("User updated successfully");
          dispatch(resetUser());
          history.push("/user");
        }
      })
      .catch((err) => {
        alert(err.message);
        console.error(err);
      });
  };

  return (
    <section className="vh-100" style={secColor}>
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div
              className="card shadow-2-strong card-registration"
              style={borradius}
            >
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Edit User Form</h3>
                <form onSubmit={updateUser}>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="firstName"
                          className="form-control form-control-lg"
                          onChange={(e) => setFirstName(e.target.value)}
                          defaultValue={editUser.firstName}
                        />
                        <label className="form-label">First Name</label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="lastName"
                          className="form-control form-control-lg"
                          onChange={(e) => setLastName(e.target.value)}
                          defaultValue={editUser.lastName}
                        />
                        <label className="form-label">Last Name</label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4 d-flex align-items-center">
                      <div className="form-outline datepicker w-100">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="birthdayDate"
                          onChange={(e) => setUserName(e.target.value)}
                          defaultValue={editUser.userName}
                        />
                        <label className="form-label">User Name</label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <h6 className="mb-2 pb-1">Gender: </h6>

                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="femaleGender"
                          defaultChecked={editUser.gender === "F"}
                          onChange={() => setGender("F")}
                        />
                        <label className="form-check-label">Female</label>
                      </div>

                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="maleGender"
                          defaultChecked={editUser.gender === "M"}
                          onChange={() => setGender("M")}
                        />
                        <label className="form-check-label">Male</label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <input
                          type="email"
                          id="emailAddress"
                          className="form-control form-control-lg"
                          onChange={(e) => setEmail(e.target.value)}
                          defaultValue={editUser.email}
                        />
                        <label className="form-label">Email</label>
                      </div>
                      <div className="form-outline">
                        <input
                          type="role"
                          id="designation"
                          className="form-control form-control-lg"
                          onChange={(e) => setDesignation(e.target.value)}
                          defaultValue={editUser.designation}
                        />
                        <label className="form-label">Designation</label>
                      </div>
                      <div className="form-outline">
                        <input
                          id="password"
                          className="form-control form-control-lg"
                          onChange={(e) => setPassword(e.target.value)}
                          defaultValue={editUser.password}
                        />
                        <label className="form-label">Password</label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <input
                          id="phoneNumber"
                          className="form-control form-control-lg"
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          defaultValue={editUser.phoneNumber}
                        />
                        <label className="form-label">Phone Number</label>
                      </div>
                      <div className="form-outline">
                        <input
                          id="address"
                          className="form-control form-control-lg"
                          onChange={(e) => setAddress(e.target.value)}
                          defaultValue={editUser.address}
                        />
                        <label className="form-label">Address</label>
                      </div>
                      <div className="form-outline">
                        <input
                          id="address"
                          className="form-control form-control-lg"
                          onChange={(e) => setUserId(e.target.value)}
                          defaultValue={editUser.userId}
                        />
                        <label className="form-label">User Id</label>
                      </div>
                    </div>
                  </div>

                  <div className="row"></div>

                  <div className="mt-4 pt-2">
                    <input
                      className="btn btn-primary btn-lg"
                      type="submit"
                      value="Update"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
