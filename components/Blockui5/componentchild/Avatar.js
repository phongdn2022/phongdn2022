import React from 'react'

export default function Avatar(props) {
  const {avatar}=props
  return (
    <div
      ><img src={avatar} style={{
      width:'200px',
      height:'200px',
      margin:'10px',
      border:'1px solid black'}}alt=''></img></div>
  )
}
