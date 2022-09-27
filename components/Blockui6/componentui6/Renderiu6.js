import React from 'react'

export default function Renderiu6(props) {
    const {data}=props
  return (data.map((item)=>( 
  <div><img src={item.avatar} alt=''></img>
  <div>{item.name}</div>
  <div>{item.text}</div>
  <div>XL/XXL/S</div>
  <div>{item.price}</div>
  <button><i class="bi bi-cart-x-fill"></i><div>Add to cart</div></button>
  </div>
  ))) 
}

 