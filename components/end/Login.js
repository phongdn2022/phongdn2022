import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const { Login } = props;
  let navigate = useNavigate();
  const [input, setInput] = useState({
    textinput: "",
    passinput: "",
  });
  const hanlechange = (e) => {
    setInput((values) => ({ ...values, [e.target.name]: e.target.value }));
  };
  const submitform = (e) => {
    e.preventDefault();
    Login &&
      Login({
        name: input.username,
        age: 18,
        gender: "nam",
      });
    console.log(input);
    if (input.textinput === "admin" && input.passinput === "admin") {
        alert("thành công")
      navigate("/project");
    } else {
      alert("thông tin không chính xác ,xin hãy thử lại");
    }
  };
  return (
    <div>
      <form onSubmit={submitform}>
        <label>text input</label>
        <input
          type={"text"}
          name={"textinput"}
          value={input.textinput}
          onChange={hanlechange}
        />
        <br></br>
        
        <label>password</label>
        <input
          type={"text"}
          name={"passinput"}
          value={input.passinput}
          onChange={hanlechange}
        ></input>
        <input type={"submit"} />
      </form>
    </div>
  );
}
