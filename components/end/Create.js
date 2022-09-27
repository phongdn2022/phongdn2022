import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Create() {
  const navigate=useNavigate()
  const [input,setInput]=useState(
    { name:'',
      projectname:'',
    }
  )

  const submitform=(e)=>{
     const url = `https://632939e4d2c97d8c52632241.mockapi.io/api/v1/user/:id`;
     let data=input;
     e.prevenDefault();
    try { 
     let Response =axios.post(url,data)
     console.log(Response) 
     alert('Đã được tạo thành công') 
     navigate('./project')
    }
    catch(error){
      console.log(error);
      alert('Chưa được thành công ');
  };

}
  const hanlechange=(e)=>{
    setInput((values)=>({ ...values, [e.target.name]:e.target.value}))
  }
  return (
    <div>
      <div><h2>tạo tên mới</h2></div>
        <div>
        <form onSubmit={submitform}>
        <label>name</label>
        <input
          type={"text"}
          name={"name"}
          value={input.name}
          onChange={hanlechange}
        />
        <br></br>
        
        <label>projectname</label>
        <input
          type={"text"}
          name={"projectname"}
          value={input.projectname}
          onChange={hanlechange}
        ></input>
        <input type={"submit"} />
      </form>  
        </div>
    </div>
  )
}
