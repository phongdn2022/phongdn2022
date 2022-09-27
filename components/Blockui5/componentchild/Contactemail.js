import React from 'react'

export default function Contactemail(props) {
    const {email}=props
  return (
    <div style={{margin:'auto',backgroundColor:email.color,height:'100px',width:'200px'}}>
        <p style={{padding:'10px'}}>EMAIL ID</p>
        <div style={{display:'flex' ,padding:'10px'}}>
            <div><i class="fa-regular fa-envelope"></i></div> 
            <div>{email.name}</div>
        </div>
    </div>
  )
}
