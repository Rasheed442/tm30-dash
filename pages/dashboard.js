import React,{useState} from 'react'
import {AiOutlineSearch,AiTwotoneBell,AiOutlineDown} from "react-icons/ai"
import {MdStackedLineChart} from "react-icons/md"
import {BiLineChartDown} from "react-icons/bi"
import {AiOutlineMenu} from "react-icons/ai"
import Image from 'next/image'
import Chart from '../component/Chart'
import Link from 'next/link'
import style from "../styles/dashboard.module.css"
import Sidebar from '../component/Sidebar'
function Main() {
    const [show, setShow] = useState(false)
  return (
    <>
    <div className={style.topp}>
              <Sidebar/>
      <div className={style.header}>
<div className={style.container}>
 <h1>Dashboard</h1>
 <div className={style.icon} onClick={()=>{setShow(true)}}>
   <AiOutlineMenu size={25}/>
 </div>

 <div className={style.search}>
      <AiOutlineSearch size={20} style={{marginBottom:"-6px", color:"gray"}}/>
      <input type="text" placeholder='Search Terminals ID, Agent and Agent Managers'/>
 </div>

   <div className={style.profile}>
       <div className={style.reminder}>
         <AiTwotoneBell size={27} style={{backgroundColor:"gainsboro", color:"gray", borderRadius:"10px"}}/>
          {/* <Image src="/dot.png" width={20} height={20} priority /> */}
          <div></div>
       </div>
      <div className={style.line}></div>          
           <Link href='setting'><Image src="/profile.png" width={50} height={50} priority/></Link> 
      <div className={style.name}>
         <p>Segun Peters</p>
         <span>Agent Manager</span>
      </div>
      <AiOutlineDown size={15}/>
   </div>
   
</div>  

<div className={style.bg}>

<div className={style.frame}>
 <select>
   <option>Timeframe:All-time</option>
   <option>Timeframe:Last 7 Days</option>
   <option>Timeframe:This Month</option>
   <option>Timeframe:This Year</option>
   </select>
   <select><option>UserRoles:All</option></select>
   <select><option>Region(Location):All-time</option></select>
</div>
{/* flex */}

<div className={style.flex}>

<div className={style.gridout}>
<div className={style.transaction}>
 <h5>Total Transactions(Naira)</h5>
 <h4>500,000,783</h4>
 <p><span><MdStackedLineChart style={{color:"green"}}/> 1.3%</span> up from last week</p>
</div>
<Image src="/frame 4.png"width={50} height={50} priority/>
</div>

<div className={style.gridout}>
<div className={style.transaction}>
 <h5>Total Transactions(Naira)</h5>
 <h4>80,131,139</h4>
 <p><span><BiLineChartDown style={{color:"green"}}/> 1.3%</span> up from last week</p>
</div>
<Image src="/frame3.png" width={50} height={50} priority/>
</div>

<div className={style.gridout}>
<div className={style.transaction}>
 <h5>Total Transactions(Naira)</h5>
 <h4>16,483</h4>
 <p><span><MdStackedLineChart style={{color:"green"}}/> 1.3%</span> up from last week</p>
</div>
<Image src="/scale3.png" width={50} height={50} priority/>
</div>

<div className={style.gridout}>
<div className={style.transaction}>
 <h5>Total Transactions(Naira)</h5>
 <h4>1,288</h4>
 <p><span><MdStackedLineChart style={{color:"green"}}/> 1.3%</span> up from last week</p>
</div>
<Image src="/scale4.png" width={50} height={50} priority/>
</div>

<div className={style.gridout}>
<div className={style.transaction}>
 <h5>Total Transactions(Naira)</h5>
 <h4>1,123</h4>
 <p><span><MdStackedLineChart style={{color:"green"}}/> 1.3%</span> up from last week</p>
</div>
<Image src="/frame2.png" width={50} height={50} priority/>
</div>

<div className={style.gridout}>
<div className={style.transaction}>
 <h5>Total Transactions(Naira)</h5>
 <h4>4,231</h4>
 <p><span><MdStackedLineChart style={{color:"green"}}/> 1.3%</span> up from last week</p>
</div>
<Image src="/person3.png" width={50} height={50} priority/>
</div>

<div className={style.gridout}>
<div className={style.transaction}>
 <h5>Total Transactions(Naira)</h5>
 <h4>5,783</h4>
 <p><span><MdStackedLineChart style={{color:"green"}}/> 1.3%</span> up from last week</p>
</div>
<Image src="/person2.png" width={50} height={50} priority/>
</div>

<div className={style.gridout}>
<div className={style.transaction}>
 <h5>Total Transactionsjj(Naira)</h5>
 <h4>66,503</h4>
 <p><span><MdStackedLineChart style={{color:"green"}}/> 1.3%</span> up from last week</p>
</div>
<Image src="/frame1.png" width={50} height={50} priority/>
</div>

</div>
<Chart/>
</div>       
</div>
</div>
    </>
    

  
    
   
    
  )
}

export default Main