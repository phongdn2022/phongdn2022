import React from 'react'
import Renderui4 from './Renderui4'
const chartcolumn1={
    text:'TODAY VISITOR',
    total:'24,599',
    unit:'',
    percentage:['20%','40%','30%','75%','20%'],
  }
  const chartcolumn2={
    text:'TODAY YESTERDAY',
    total:'15,699',
    unit:'',
    percentage:['27%','69%','69%','95%','78%'],
  }
  const chartcolumn3={
    text:'TOTAL DOWNLOAD',
    total:'124,599',
    unit:'',
    percentage:['35%','57%','30%','35%','41%'],
  }
  const chartcolumn4={
    text:'CURREN INCOME',
    total:'$54,599',
    unit:'',
    percentage:['24%','47%','68%','75%','68%'],
  }

export default function Dataui4() {
  return (
    <div style={{display:'flex'}}>
        <Renderui4 input={chartcolumn1} />
        <Renderui4 input={chartcolumn2} />
        <Renderui4 input={chartcolumn3} />
        <Renderui4 input={chartcolumn4} />
    </div>
  )
}
