import React from "react";
const stylecard = {
  width:"70%px",
  height:"20px",
  padding:"10px",
  color:"#2c3850",
  textAlign:"left",
  marginLeft:"80px",
};
export default function BasicUi1(props) {
  const { input } = props;
  console.log(input);
  return (<div style={{width:"100%"}}><div style={{border: "1px solid black", width:"90%" ,height:"300px", display:"flex" ,justifyContent:"space-between", margin:"20px"}}>
      <img src="/image/hinh1.png" style={{ width:"30%",height:"300px"}} alt={input.title} />
      <div style={{width:"70%"}}><p style={{ width:"70%px", height:"20px", padding:"10px",textAlign:"left"}}>clothing-apparel</p>
      <p  style={stylecard}>Bags</p>
      <p  style={stylecard}>accesories</p>
      <p  style={stylecard}>kidsfashion</p>
      <p  style={stylecard}>mens</p>
      </div>
      
    </div></div>
   
  )
}
