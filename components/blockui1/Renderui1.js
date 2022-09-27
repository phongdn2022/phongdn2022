import React from 'react'

export default function Renderui1(props) {
   const {input}=props
    console.log(props)
  return (<center>
        <div style={{width:"65%",display:"flex",margin:"10px",border:"1px solid black",textAlign:"center"}}>
        <div style={{width:"20%",height:"30px",background:input.color1,border:"1px solid black",textAlign:"center"}}>{input.Text}</div>
        <div style={{width:"80%",height:"30px"}}>
        <div style={{width:input.percentage,background:input.color1,border:"1px solid black",paddingLeft:"10px",height:"30px"}}>{input.percentage}</div>
        <div style={{background:input.colors}}></div></div> 
    </div></center>
    
  )
}
