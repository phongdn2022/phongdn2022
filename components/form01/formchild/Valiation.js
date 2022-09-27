import React from "react";
import "./form.css";
import { useState } from "react";
import image from "./5.2.png";
export default function Valiation() {
  const [input, setInput] = useState({
    mail: " ",

    facebook: false,
    google: false,
    apple: false,
  });
  const handlesumit = (e) => {
    e.preventDefault();
    console.log(input);
  };
  const handlechange = (e) => {
    if (e.target.type === "checkbox") {
      setInput((values) => ({ ...values, [e.target.name]: e.target.checked }));
    } else {
      setInput((values) => ({ ...values, [e.target.name]: e.target.value }));
    }
  };
  return (
    <div
      style={{
        width: "300px",
        height: "500px",
        paddingTop: "100px",
        border: "1px solid black",
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <form  onSubmit={handlesumit}>
        <div style={{width:'100%',margin:'auto'}}>
          <h1>Hi!</h1>
          <input
            className="btn btn-light "
            placeholder={"email"}
            type="text"
            name="mail"
            value={input.mail}
            onChange={handlechange}
          ></input>
          <br />
          <button className="btn btn-success" type="submit">
            continous
          </button>
          <br />
          <input
            className="btn btn-light"
            type="button"
            name="facebook"
            id="fb"
            value="connect to facebook"
          ></input>
          <br />
          <input
            className="btn btn-light"
            type="button"
            name="google"
            id="g"
            value="continue with google"
            onChange={handlechange}
          ></input>
          <br />
          <input
            className="btn btn-light "
            type="button"
            name="apple"
            id="fb"
            value="continue with apple"
            onChange={handlechange}
          ></input>
          <br />
          <div style={{ display: "flex" }}>
            <p>don't have a account</p>
            <b>sign up</b>
          </div>
          <b>forgot your password</b>
        </div>
      </form>
    </div>
  );
}
