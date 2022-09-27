import React from 'react'

export default function RenderUi2(props) {
    const {input}=props
  return (
    <div style={{display:'flex',width:"65%",margin:"10px",textAlign:"center"}}><div style={{backgroundColor:input.color,width:'50px',height:'50px',textAlign:'center',padding:'5px'}}>{input.iconname}</div>
       <div style={{width:'20%',padding:'10px'}}>{input.text}</div>
       <div style={{width:'100%',border:'1px solid black',height:'22px',margin:'10px',borderRadius:'3px'}}><div style={{width:input.total,border:'1px solid black',height:'20px',backgroundColor:input.color}}></div>
       <div></div></div>
    </div>
  )
}
