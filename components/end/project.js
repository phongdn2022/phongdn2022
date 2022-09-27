import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Project() {
    let navigate = useNavigate();
  const [users, setUsers] = useState([]);
  
  React.useEffect(() => {
    const config = {
      method: "get",
      url: "https://632939e4d2c97d8c52632241.mockapi.io/api/v1/user",
      Headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoidHVuZ250MiIsImZ1bGxuYW1lIjoiTmfDtCBUaGFuaCBUw7luZyIsImVtYWlsIjoidHVuZ250QHNvZnRlY2guZWR1LnZuIn0sImlhdCI6MTY1NTM4NTQxMywiZXhwIjoxNjU1NDcxODEzLCJhdWQiOiJzb2Z0ZWNoLmNsb3VkIiwiaXNzIjoic29mdGVjaC5jbG91ZCIsInN1YiI6IjYyODM5NzY2ZWZmY2ZiMGFlNGZkMWMyYSJ9.3xR4317qxtJ2pw-fRSoQIAOmRpBi81osux_fy9rwOPMMwNXQnHtGsiP8PZav1W1zPzJMs8SrR2M8GaJX9YqRNg",
      },
    };
    axios(config)
      .then(function (result) {
        console.log(result.data);
       
        setUsers(result.data);
      })
      .catch(function (error) {
        
        console.log(error);
      });
  }, []);
  const deleteitem = (id) => {
    const url = `https://632939e4d2c97d8c52632241.mockapi.io/api/v1/user/${id}`;
    try {
      let Response = axios.delete(url);
      console.log(Response);
      console.log("success");
      const newuser = users.filter((item) => item.id !== id);
      setUsers(newuser);
    } catch (error) {
      console.error(error);
      console.log("fail");
    }
  };
  const handlecreate=()=>{
    navigate("./create")
  }
  return (<div>
    <h2>danh sách project</h2>
    <input type={"button"}
            name="tạo mới"
            value="tạo mới"
            onClick={()=>handlecreate()}>
    </input>
    <table>
        <tr><th>STT</th> <th>TÊN</th> <th>CHỨC NĂNG</th> </tr>
      {users.map((item,index)=>(
        <tr key={item.id} ><td>{item.id}</td><td>{item.name}</td>
        
        <td><button onClick={()=>deleteitem(item.id)}>delete</button></td>
      </tr> 
      ))}
    </table>
   
    </div>
  );
}
