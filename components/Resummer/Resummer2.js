import React from 'react'
import Contact from './Childresummer/Contact';
import Infor from './Childresummer/Infor';
import Skill from './Childresummer/Skill';
export default function Resummer2() {
  const education=[
    { duration:"2010-2015", text:'TIỂU HỌC BÙI CHAT',contain:'học nhiều nhiều chuyên ngành khác nhau nhưng không biết chi hết'},
    { duration:"2010-2015", text:'TIỂU HỌC BÙI CHAT',contain:'học nhiều nhiều chuyên ngành khác nhau nhưng không biết chi hết'},
    { duration:"2010-2015", text:'TIỂU HỌC BÙI CHAT',contain:'học nhiều nhiều chuyên ngành khác nhau nhưng không biết chi hết'},
    { duration:"2010-2015", text:'TIỂU HỌC BÙI CHAT',contain:'học nhiều nhiều chuyên ngành khác nhau nhưng không biết chi hết'},
  ]
  const experience=[
    { duration:"2010-2015", text:'TIỂU HỌC BÙI CHAT',contain:'học nhiều nhiều chuyên ngành khác nhau nhưng không biết chi hết'},
    { duration:"2010-2015", text:'TIỂU HỌC BÙI CHAT',contain:'học nhiều nhiều chuyên ngành khác nhau nhưng không biết chi hết'},
    { duration:"2010-2015", text:'TIỂU HỌC BÙI CHAT',contain:'học nhiều nhiều chuyên ngành khác nhau nhưng không biết chi hết'},
    { duration:"2010-2015", text:'TIỂU HỌC BÙI CHAT',contain:'học nhiều nhiều chuyên ngành khác nhau nhưng không biết chi hết'},
  ]
  const contait=[
    {icon:"1234", head:'ADRESS',text1:'thanh ha,hoi an', text2:'quảng nam,vietnam'},
    {icon:"1234", head:'ADRESS',text1:'thanh ha,hoi an', text2:'quảng nam,vietnam'},
    {icon:"1234", head:'ADRESS',text1:'thanh ha,hoi an', text2:'quảng nam,vietnam'},
  ];
  const skills=[
   { text:"photoshop",percent:50},
   { text:"photoshop",percent:70},
   { text:"photoshop",percent:59},
   { text:"photoshop",percent:22},
  ]
  return (
  <div style={{display:'flex'}}>
    <div style={{width:"60%"}}>
      <div style={{width:"90%"}}>
        <h1 style={{backgroundColor:'yellow'}}>EDUCATION</h1>
        <Infor infor={education}/>
        <h1 style={{backgroundColor:'yellow'}}>EXPERIENCE</h1>
        <Infor infor={experience}/>
    </div>
    </div>
    <div style={{width:'40%',color:'white',backgroundColor:'black'}}>
      <div style={{width:'80%',margin:'auto'}}><h1 style={{textAlign:'center'}}>contact me</h1>
       <div style={{margin:'auto'}}> <Contact contact={contait}/></div>   
      </div>
      <div>
        <div style={{width:'80%',margin:'auto'}}><h1 style={{textAlign:'center'}}>pro skill</h1>
            <Skill style={{width:'80%',margin:'auto'}} Skill={skills}/>
        </div>
      </div>
    </div>
    </div>
   
  )
}
