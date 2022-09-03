import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Teacher login and redirection to create class
const TeacherLogin = () => {
  let history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleClick() {
    history.push("/CreateClass");
  }

  return (
    <div class="d-flex justify-content-center">
      <form className=" w-50">
        <h1 class="d-flex justify-content-center">Teacher Login</h1>
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
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Password
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
          <button type="submit" class="btn btn-primary" onClick={handleClick}>
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default TeacherLogin;
