import React, { useState, useEffect } from "react";
import Axios from "axios";

const StudentLogin = () => {
  const [data, setData] = useState("");

  // Fetch student data from database
  const getdata = () => {
    Axios.get("http://localhost:8000/getdata").then((res) => setData(res.data));
  };

  const [classData, setClassData] = useState([
    {
      subject: "",
      firstName: "",
      lastName: "",
      email: "",
      attachment: "",
    },
  ]);

  useEffect(() => {
    fetch("/getdata")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setClassData(jsonRes));
  });

  return (
    <div class="d-flex justify-content-center">
      <form className=" w-50">
        <h1 class="d-flex justify-content-center">Student Login</h1>
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-10">
            <input
              autoComplete="off"
              name="subject"
              type="text"
              class="form-control"
              id="inputEmail3"
            />
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <button type="submit" class="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
      {/* <button onClick={getdata}>Get data</button> */}
      {/*     {classData.map((data) => (
        <>
          <div>{data.subject}</div>
          <div>{data.firstName}</div>
          <div>{data.lastName}</div>
          <div>{data.email}</div>
          <div>{data.attachment}</div>
        </>
      ))} */}
    </div>
  );
};

export default StudentLogin;
