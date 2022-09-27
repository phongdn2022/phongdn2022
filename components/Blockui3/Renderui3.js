import React from 'react'
import './Blockui3.css' 
export default function Renderui3(props) {
    const {input}=props
  return (
    <div style={{width:'200px',height:"250px",backgroundColor:input.color,display:'block',border:'1px solid black',margin:'30px',padding:'15px'}}>
        <div >{input.iconname}</div>
      <div style={{ color:'white',padding:'120px 0px 0px 20px'}}><div style={{height:'20px',fontSize:'20px'}}>{input.text}</div>
        <div style={{display:'flex',fontSize:'15px',padding:' 7px 0px 0px 3px'}}><div style={{paddingRight:'3px'}}>{input.total}</div>
        <div>{input.unit}</div></div></div>  
    </div>
  )
}

