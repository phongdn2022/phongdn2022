import React from 'react'
import Avatar from './componentchild/Avatar'
import Contactemail from './componentchild/Contactemail'
import Contaicphone from './componentchild/Contaicphone'
import Information from './componentchild/Information'
import Text from './componentchild/Text'
const arrayAvatar=[
'/image/block-ui-5-images/5.1.png',
'/image/block-ui-5-images/5.2.png',
'/image/block-ui-5-images/5.3.png',
'/image/block-ui-5-images/5.4.png',
]
const arraytext=[
  {name:'ROBORT PATTITION',position:'deverloping'},
  {name:'ROBORT PATTITION',position:'deverloping'},
  {name:'ROBORT PATTITION',position:'deverloping'},
  {name:'ROBORT PATTITION',position:'deverloping'},
]
const arrayinformation=[
  {dob:'23/05/14',bg:'B+',edu:'MCA',res:'bangalora'},
  {dob:'23/05/14',bg:'B+',edu:'MCA',res:'bangalora'},
  {dob:'23/05/14',bg:'B+',edu:'MCA',res:'bangalora'},
  {dob:'23/05/14',bg:'B+',edu:'MCA',res:'bangalora'},
]
const arrayemail=[
  { name:'robot12@gmail.com',color:'red'},
  { name:'robot12@gmail.com',color:'red'},
  { name:'robot12@gmail.com',color:'red'},
  { name:'robot12@gmail.com',color:'red'},
]
const arrayphone=[
  {number:'8665543219',color:"yellow"},
  {number:'8665543219',color:"yellow"},
  {number:'8665543219',color:"yellow"},
  {number:'8665543219',color:"yellow"},
]
export default function Dataui5() {
  return (
    <div style={{display:'flex'}}>
      { arrayAvatar.map((item,index)=>( 
      <div style={{border:'1px solid black',width:'220px',margin:'20px',boxShadow:'4px 5px #0fa3cc'}}><Avatar avatar={item}/>
      <Text text={arraytext[index]}/>
      <Information information={arrayinformation[index]}/>
      <Contactemail email={arrayemail[index]}/>
      <Contaicphone phone={arrayphone[index]}/>
      </div>
      )
      )}
    </div>
  )
}
