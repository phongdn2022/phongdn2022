import React from 'react'

export default function Information(props) {
    const {information}=props
  return (
    <div style={{margin:'20px'}}>
        <div style={{display:'flex',justifyContent:'space-between'}}>
            <div style={{display:'flex'}}><i style={{padding:'2px 2px 0px 0px'}}class="fa-sharp fa-solid fa-cake-candles"></i><p>BOD</p></div>
            <div>{information.dob}</div>
        </div>
        <div style={{display:'flex',justifyContent:'space-between'}}>
            <div><p>GB</p></div>
            <div>{information.bg}</div>
        </div>
        <div style={{display:'flex',justifyContent:'space-between'}}>
            <div><p>EDU</p></div>
            <div>{information.edu}</div>
        </div>
        <div style={{display:'flex',justifyContent:'space-between'}}>
            <div><p>RES</p></div>
            <div>{information.res}</div>
        </div>
    </div>
  )
}
