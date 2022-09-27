import React from "react";

export default function Contact(props) {
  const { contact } = props;
  return (
    contact.map((item)=>(
      <div style={{margin:"auto"}}>
        <div style={{ display:"flex"}}>
        <div style={{width:'20%'}}>{item.icon}</div>
        <div style={{textAlign:"left",width:'80%'}}>
          <div>{item.head}</div>
          <div>{item.text1}</div>
          <div>{item.text2}</div>
        </div></div>
      </div>
   ))
  );
}
