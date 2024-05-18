import React from "react";
import "./formRes.css";
import { useState } from "react";

const FormRes = function () {
  const [value, setValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");

  const onchangeHandler = (event) => {
    setValue(event.target.value);
  };

  const submitHandler = (data) => {
    data.preventDefault();
    setSubmittedValue(value);
    setValue("");
  };

  console.log(submittedValue);

  return (
    <>
      <div className="container row justify-content-center backgroundNav mt-5 mb-5 pt-5 pb-5">
        <div className="text-center text-white">
          <h1>Save time, Save money</h1>
          <p>Sign up and we'll send the best deals to you</p>
        </div>
        <div className="text-white d-flex align-items-center justify-content-center formInput">
          <form onSubmit={submitHandler} method="post">
            <input
              type="text"
              id="userInput"
              placeholder="Your Email"
              value={value}
              onChange={onchangeHandler}
            />
            <a onClick={submitHandler} type="submit">
              Subscribe
            </a>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormRes;
