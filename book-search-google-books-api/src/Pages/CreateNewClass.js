import React, { useState } from "react";
import axios from "axios";

// Taking empty input initially.
const CreateNewClass = () => {
  const [input, setInput] = useState({
    subject: "",
    firstName: "",
    lastName: "",
    email: "",
    attachment: "",
  });

  // Assign value into respective name
  function handleChange(e) {
    const { name, value } = e.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  // Handling input
  function handleClick(e) {
    e.preventDefault();
    console.log(input);
    const newClass = {
      subject: input.subject,
      firstName: input.firstName,
      lastName: input.lastName,
      email: input.email,
      attachment: input.attachment,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newClass }),
    };
    //POST request to send data into database.
    axios
      .post("http://localhost:8000/class", newClass)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div class="d-flex justify-content-center">
      <form enctype="multipart/form-data " className=" w-50">
        <h1 class="d-flex justify-content-center">Create class </h1>
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Subject
          </label>
          <div class="col-sm-10">
            <input
              autoComplete="off"
              name="subject"
              type="text"
              class="form-control"
              id="inputEmail3"
              value={input.subject}
              onChange={handleChange}
            />
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            First Name
          </label>
          <div class="col-sm-10">
            <input
              autoComplete="off"
              name="firstName"
              type="text"
              class="form-control"
              id="inputEmail3"
              value={input.firstName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Last Name
          </label>
          <div class="col-sm-10">
            <input
              autoComplete="off"
              name="lastName"
              type="text"
              class="form-control"
              id="inputEmail3"
              value={input.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-10">
            <input
              autoComplete="off"
              name="email"
              type="email"
              class="form-control"
              id="inputEmail3"
              value={input.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Attachment
          </label>
          <div class="col-sm-10">
            <input
              autoComplete="off"
              name="attachment"
              type="file"
              class="form-control-file"
              id="exampleFormControlFile1"
              value={input.attachment}
              onChange={handleChange}
            />
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <button type="submit" class="btn btn-primary" onClick={handleClick}>
            Create Class
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNewClass;
