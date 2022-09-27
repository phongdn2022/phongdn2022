import React from "react";
import image from "./5.2.png";
export default function Signup() {
  return (
    <div>
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
        <input
          className="btn btn-light "
          placeholder={"email"}
          type="nam"
          name="mail"
        ></input>
        <input
          className="btn btn-light "
          placeholder={"email"}
          type="password"
          name="mail"
        ></input>
        <button className="btn btn-success" type="submit"> agree and continue</button>
      </div>
    </div>
  );
}
