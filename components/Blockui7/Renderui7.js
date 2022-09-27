import React from 'react'

export default function Renderui7(props) {
    const {data}=props
  return (
    <div>
        {data.map((item)=>(<div>
            <div>-{item.percentage}</div>
            <img src={item.avatar} alt=''></img>
            <div>YOUNG SHOP</div>
            <hr></hr>
            <div style={{display:'flex'}}>${item.currentprice}<div>{item.discoutprice}</div><div>{item.percentdiscount}off</div></div>
            <div>{item.text}</div>
            <div><span class="heading">User Rating</span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
            </div>
            <div style={{width:'100%',display:'flex'}}><div style={{width:item.sold}}></div></div>
            <div>sold:{item.sold}</div>
        </div>

        )

        )}
    </div>
  )
}
