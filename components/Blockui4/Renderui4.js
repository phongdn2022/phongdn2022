import React from 'react'

export default function Renderui4(props) {
  const {input}=props
  const number =['red','green','yellow','blue','orange']
  const day=['MON','TUE','WED','THU','PRI']
  return (
    <div style={{border:'1px solid black',width:'300px',height:'250px',fontWeight:"30px",boxShadow:'5px 10px black',margin:'10px'}}>
      <div style={{textAlign:'center'}}>
        <div style={{height:'30px',fontSide:'30px'}}>{input.text}</div>
        <div style={{color:'blue'}}>{input.total}</div>
      </div>
    <hr></hr>
    <div>{input.unit}</div>
    <div style={{display:'flex',height:'150px'}}>
      { input.percentage.map((item,index)=>(
        <div style={{margin:'auto'}}>  <div style={{height:'100px',width:'25px',border:'1px solid black',margin:'auto',display:'flex',alignItems:'end',}}>
          <div style={{backgroundColor:number[index],height:item,padding:'10px',border:'1px solid black'}}></div>
          </div>
          <div>{day[index]}</div>
        </div>
        ))}
    </div>
  </div>
  )
  }
 
   

