import React from "react";

export default function Infor(props) {
  const { infor } = props;
  return (
    infor.map((item)=>(
    <div style={{ display: "flex", }}>
      <div style={{width:"20%",margin: "auto",}}>
        <div
          style={{
            width: "30px",
            height: "30px",
            backgroundColor: "yellow",
          }}
        ></div>
      </div>
      <div style={{ margin: "auto",width:"30%" }}>
        <div>{item.duration}</div>
        <div>{item.text}</div>
      </div>
      <div style={{ margin: "auto",width:"50%" }}>
        <div>{item.text}</div>
        <div>{item.contain}</div>
      </div>
    </div>
  )));
}
