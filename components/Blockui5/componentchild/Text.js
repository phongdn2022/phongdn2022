import React from 'react'

export default function Text(props) {
  const {text}=props
  return (<div style={{width:'200px',height:'30px',margin:'auto'}}>
    <center>
    <div>{text.name}</div>
    <div>{text.position}</div>
    </center>
    </div>
  )
}
