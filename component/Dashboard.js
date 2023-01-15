import React from 'react'
import {AiOutlineSearch,AiTwotoneBell,AiOutlineDown} from "react-icons/ai"
import {MdStackedLineChart} from "react-icons/md"
import {BiLineChartDown} from "react-icons/bi"
import Image from 'next/image'
import Chart from './Chart'
import style from "../styles/dashboard.module.css"
function Main() {
 
  return (
    <>

      <div className={style.header}>

       <div className={style.container}>
        <h1>Dashboard</h1>

        <div className={style.search}>
             <AiOutlineSearch size={20} style={{marginBottom:"-6px", color:"gray"}}/>
             <input type="text" placeholder='Search Terminals ID, Agent and Agent Managers'/>
        </div>

          <div className={style.profile}>
              <div className={style.reminder}>
                <AiTwotoneBell size={27} style={{backgroundColor:"gainsboro", color:"gray", borderRadius:"10px"}}/>
                 <Image src="/dot.png" width={20} height={20} priority />
              </div>
             <div className={style.line}></div>          
                   <Image src="/profile.png" width={50} height={50} priority/>
             <div className={style.name}>
                <p>Segun Peters</p>
                <span>Super Agent</span>
             </div>
             <AiOutlineDown size={15}/>
          </div>
          
    </div>  

  <div className={style.bg}>

    <div className={style.frame}>
        <select><option><span>Timeframe:<p>All-time</p></span></option></select>
        <select><option><span>UserRoles:<p>All</p></span></option></select>
        <select><option><span>Region(Location):<p>All-time</p></span></option></select>
    </div>
{/* flex */}
<div className={style.flex}>

   <div className={style.gridout}>
     <div className={style.transaction}>
        <h5>Total Transactions(Naira)</h5>
        <h4>5,000,000,783</h4>
        <p><span><MdStackedLineChart style={{color:"green"}}/> 1.3%</span> up from last week</p>
      </div>
      <Image src="/scale.png" width={40} height={40} prority/>
   </div>

   <div className={style.gridout}>
     <div className={style.transaction}>
        <h5>Total Transactions(Naira)</h5>
        <h4>80,131,139</h4>
        <p><span><BiLineChartDown style={{color:"green"}}/> 1.3%</span> up from last week</p>
      </div>
      <Image src="/scale2.png" width={40} height={40} prority/>
   </div>

   <div className={style.gridout}>
     <div className={style.transaction}>
        <h5>Total Transactions(Naira)</h5>
        <h4>16,483</h4>
        <p><span><MdStackedLineChart style={{color:"green"}}/> 1.3%</span> up from last week</p>
      </div>
      <Image src="/scale3.png" width={40} height={40} prority/>
   </div>

   <div className={style.gridout}>
     <div className={style.transaction}>
        <h5>Total Transactions(Naira)</h5>
        <h4>1,288</h4>
        <p><span><MdStackedLineChart style={{color:"green"}}/> 1.3%</span> up from last week</p>
      </div>
      <Image src="/scale4.png" width={40} height={40} prority/>
   </div>

   <div className={style.gridout}>
     <div className={style.transaction}>
        <h5>Total Transactions(Naira)</h5>
        <h4>1,123</h4>
        <p><span><MdStackedLineChart style={{color:"green"}}/> 1.3%</span> up from last week</p>
      </div>
      <Image src="/person.png" width={35} height={35} prority/>
   </div>

   <div className={style.gridout}>
     <div className={style.transaction}>
        <h5>Total Transactions(Naira)</h5>
        <h4>4,231</h4>
        <p><span><MdStackedLineChart style={{color:"green"}}/> 1.3%</span> up from last week</p>
      </div>
      <Image src="/person3.png" width={40} height={40} prority/>
   </div>

   <div className={style.gridout}>
     <div className={style.transaction}>
        <h5>Total Transactions(Naira)</h5>
        <h4>5,783</h4>
        <p><span><MdStackedLineChart style={{color:"green"}}/> 1.3%</span> up from last week</p>
      </div>
      <Image src="/person2.png" width={40} height={40} prority/>
   </div>

   <div className={style.gridout}>
     <div className={style.transaction}>
        <h5>Total Transactionsjj(Naira)</h5>
        <h4>66,503</h4>
        <p><span><MdStackedLineChart style={{color:"green"}}/> 1.3%</span> up from last week</p>
      </div>
      <Image src="/person1.png" width={40} height={40} priority/>
   </div>

</div>
<Chart/>
</div>       
    </div>
    </>
    

  
    
   
    
  )
}

export default Main