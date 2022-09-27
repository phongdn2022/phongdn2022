import React from 'react'

export default function Contaicphone(props) {
    const {phone}=props
  return (
    <div style={{margin:'auto',backgroundColor:phone.color,}}>
    <p  style={{padding:'10px'}}>PHONE NO</p>
        <div style={{display:'flex' ,padding:'10px'}}>
        <div><i class="fa-regular fa-envelope"></i></div> 
        <div>{phone.number}</div>
        </div>
    </div>
  )
}
