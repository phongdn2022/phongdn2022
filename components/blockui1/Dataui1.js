import React from 'react'
import Renderui1 from './Renderui1'
const text1={
    Text:"BANDWIDTH",
    color1:"red",
    colors:"rgb(223, 228, 240)",
    percentage: "20%",
};
const text2={
    Text:"STORAGE",
    color1:"blue",
    colors:"rgb(223, 228, 240)",
    percentage:"50%",
};
const text3={
  Text:"USER",
  color1:"green",
  colors:"rgb(223, 228, 240)",
  percentage:"30%",
};
const text4={
  Text:"VISITOR",
  color1:"yellow",
  colors:"rgb(223, 228, 240)",
  percentage:"45%",
};
const text5={
  Text:"EMAIL",
  color1:"gray",
  colors:"rgb(223, 228, 240)",
  percentage:"80%",
};
const text6={
  Text:"BASIC",
  color1:"purple",
  colors:"rgb(223, 228, 240)",
  percentage:"37%",
};
const text7={
  Text:"OTHER",
  color1:"blue",
  colors:"rgb(223, 228, 240)",
  percentage:"50%",
};
export default function Dataui1() {
  return ( 
  <div> 
    <Renderui1 input={text1}/>
    <Renderui1 input={text2}/>
    <Renderui1 input={text3}/>
    <Renderui1 input={text4}/>
    <Renderui1 input={text5}/>
    <Renderui1 input={text6}/>
    <Renderui1 input={text7}/>
  </div>
  )
   
}
