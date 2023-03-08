import React,{useState, useEffect} from 'react'
import Sidebar from './Sidebar'
import style from "../styles/terminal.module.css"
import {AiOutlineDown,AiTwotoneBell,AiOutlineSearch,AiOutlineArrowRight,AiOutlineArrowLeft} from "react-icons/ai"
import Axios from 'axios'
import {BsToggleOn,BsToggleOff} from "react-icons/bs"
import {MdShowChart} from "react-icons/md"
import Image from 'next/image'
import Service from './Service'
import Allservices from './Allservices'
function Terminal({back,nav}) {
   const [open, setOpen] = useState(false)
   const [allservice, setAllservice] = useState(false)
   const[clients, setClients] = useState()

   const username = typeof window !== 'undefined' ? localStorage.getItem("userName")  : null
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
  const clientId = typeof window !== 'undefined' ? localStorage.getItem('d.id') : null

  const config = {
   headers:{
     Authorization: `Bearer ${token}`
   }
 }
 useEffect(() => {
   Axios.get(`http://89.38.135.41:9800/user/agents/details?id=${clientId}`, config).then((response)=>{
   //   console.log(response?.data)
     setClients(response?.data)
   })
   
 }, [])
 console.log(clients?.data?.currency?.symbol)

  return (
    <div className={style.background}>
      {allservice ?<Allservices handle={setAllservice}/>:""}
      {open ?<Service handled={setOpen}/>:""}
       <Sidebar/> 
    <div className={style.main}> 
        <div className={style.container}>
        <h2>Agent Management</h2>

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
                   <Image src="/profile.png" width={40} height={40} priority/>
             <div className={style.name}>
                <p>{username}<AiOutlineDown size={13}/></p>
                <span>Agent Manager</span>
             </div>
          </div>
        </div>   
        
<div className={style.bg}>
            <button onClick={()=>{back(false)}}><AiOutlineArrowLeft size={20}/> Back</button>
      <div className={style.balance}>
             <div className={style.wallet}>
                <span>Wallet Balance</span>
                <p>{clients?.data?.currency?.symbol} {clients?.data?.balance?.wallet}</p>
                <h5><MdShowChart/>5.5%<span> up from last week</span></h5>
             </div>

             <div className={style.wallet}>
                <span>Commission</span>
                <p>{clients?.data?.currency?.symbol} {clients?.data?.balance?.commission}</p>
                <h5 style={{color:"red"}}><MdShowChart/>2.1%<span> up from last week</span></h5>
             </div>

             <div className={style.wallet}>
                <span>Total Successful Transactions</span>
                <p>1,443</p>
                <h5><MdShowChart/>2.1%<span> up from last week</span></h5>
             </div>

             <div className={style.wallet}>
                <span>Total failed Transactions</span>
                <p> 288</p>
                <h5><MdShowChart/>2.1%<span> up from last week</span></h5>
             </div>
       </div>
      
        <div className={style.transactionlimit}>
         <button>Transaction Limit</button>
        </div>
      {/* transaction */}
      
      <div className={style.service}>
           <div className={style.services}>
              <p>My Services</p>
              {/* <button>Most Used Services <AiOutlineDown/></button> */}
              <select>
               <option>Most Used Services <AiOutlineDown/></option>
               <option>Alphabetically <AiOutlineDown/></option>
               <option>Latest Service <AiOutlineDown/></option>
               <option>Rarely Used Service <AiOutlineDown/></option>
               </select>
           </div>

        <div className={style.balance}>

           <div className={style.dstv}>
              <h2>DSTV</h2>
             <p>Active <BsToggleOn size={25} style={{color:"#1B59F8"}}/></p>
           </div>
           <div className={style.dstv}>
              <h2>AirTime</h2>
             <p>Active <BsToggleOff size={25} style={{color:"#1B59F8"}}/></p>
           </div>
           <div className={style.dstv}>
              <h2>GOTV</h2>
             <p>Active <BsToggleOn size={25} style={{color:"#1B59F8"}}/></p>
           </div>
           <div className={style.dstv}>
              <h2>Electricity</h2>
             <p>Active <BsToggleOn size={25} style={{color:"#1B59F8"}}/></p>
           </div>
           <div className={style.dstv}>
              <h2>FIRS</h2>
             <p>Active <BsToggleOn size={25} style={{color:"#1B59F8"}}/></p>
           </div>
           <div className={style.dstv}>
              <h2>FRSC</h2>
             <p>Active <BsToggleOff size={25} style={{color:"#1B59F8"}}/></p>
           </div>
           <div className={style.add} onClick={()=>{setOpen(true)}}>
              <Image src='/add.png' width={50} height={50} priority/>
              <p>Add New Services</p>
           </div>

        </div>
        <p style={{textAlign:"end", color:"blue", fontSize:"12px"}} onClick={()=>{setAllservice(true)}}>View All Services</p>
      </div>


      <div className={style.gridout}>


<div className={style.prof}>
    <span>AGENT ID</span>
    <p>N1123SB3</p> 
    <p>N1123SB3</p> 
    <p>N1123SB3</p> 
    <p>N1123SB3</p> 
    <p>N1123SB3</p> 
    <p>N1123SB3</p> 
    <p>N1123SB3</p> 
    <p>N1123SB3</p> 
    <p>N1123SB3</p> 
    <p>N1123SB3</p> 
</div>
<div className={style.prof}>
    <span>RES MESSAGE<AiOutlineDown/></span>
    <p>Transaction Approved</p>  
    <p>Transaction Approved</p>  
    <p>Transaction Approved</p>  
    <p>Transaction Approved</p>  
    <p>Insufficient Fund</p>  
    <p>Transaction Approved</p>  
    <p>Transaction Approved</p>  
    <p>Transaction Approved</p>  
    <p>Insufficient Fund</p>  
    <p>Insufficient Fund</p>  
</div>
<div className={style.prof}>
    <span>RESP CODE &nbsp;<AiOutlineDown/></span>
    <p>00</p> 
    <p>00</p> 
    <p>00</p> 
    <p>00</p> 
    <p>00</p> 
    <p>00</p> 
    <p>00</p> 
    <p>00</p> 
    <p>00</p> 
    <p>00</p> 
</div>
<div className={style.prof}>
    <span>TRANS.TYPE &nbsp;<AiOutlineDown/></span>
    <p style={{color:"green"}}>Withdrawal</p>
    <p style={{color:"green"}}>Withdrawal</p>
    <p style={{color:"green"}}>Withdrawal</p>
    <p style={{color:"red"}}>Deposit</p>
    <p style={{color:"green"}}>Withdrawal</p>
    <p style={{color:"green"}}>Withdrawal</p>
    <p style={{color:"green"}}>Withdrawal</p>
    <p style={{color:"red"}}>Deposit</p>
    <p style={{color:"green"}}>Withdrawal</p>
    <p style={{color:"green"}}>Withdrawal</p>
</div>
<div className={style.prof}>
    <span>AMOUNT&nbsp;<AiOutlineDown/></span>
    <p>&#8358;150,000</p>
    <p>&#8358;250,000</p>
    <p>&#8358;170,000</p>
    <p>&#8358;80,000</p>
    <p>&#8358;96,000</p>
    <p>&#8358;10,000</p>
    <p>&#8358;52,000</p>
    <p>&#8358;80,000</p>
    <p>&#8358;96,000</p>
    <p>&#8358;42,000</p>
</div>
<div className={style.prof}>
    <span>EARNING &nbsp;<AiOutlineDown/></span>
    <p>&#8358;150,000</p>
    <p>&#8358;250,000</p>
    <p>&#8358;170,000</p>
    <p>&#8358;80,000</p>
    <p>&#8358;96,000</p>
    <p>&#8358;10,000</p>
    <p>&#8358;52,000</p>
    <p>&#8358;80,000</p>
    <p>&#8358;96,000</p>
    <p>&#8358;42,000</p>
</div>
<div className={style.prof}>
    <span>DATE&nbsp;<AiOutlineDown/></span>
   <p>14th April 2022</p>
   <p>14th April 2022</p>
   <p>14th April 2022</p>
   <p>14th April 2022</p>
   <p>14th April 2022</p>
   <p>14th April 2022</p>
   <p>14th April 2022</p>
   <p>14th April 2022</p>
   <p>14th April 2022</p>
   <p>14th April 2022</p>
</div>
<div className={style.prof}>
    <span>STATUS &nbsp;<AiOutlineDown/></span>
     <p style={{backgroundColor:"#00F4001A",color:"#008000", padding:"4px, 8px, 4px, 8px",width:"60px"}}>Successful</p> 
     <p style={{backgroundColor:"#00F4001A",color:"#008000", padding:"4px, 8px, 4px, 8px",width:"60px"}}>Successful</p> 
     <p style={{backgroundColor:"#00F4001A",color:"#008000", padding:"4px, 8px, 4px, 8px",width:"60px"}}>Successful</p> 
     <p style={{backgroundColor:"#00F4001A",color:"#008000", padding:"4px, 8px, 4px, 8px",width:"60px"}}>Successful</p> 
     <p style={{backgroundColor:"#00F4001A",color:"#008000", padding:"4px, 8px, 4px, 8px",width:"60px"}}>Successful</p> 
     <p style={{backgroundColor:"#00F4001A",color:"#008000", padding:"4px, 8px, 4px, 8px",width:"60px"}}>Successful</p> 
     <p style={{backgroundColor:"#00F4001A",color:"#008000", padding:"4px, 8px, 4px, 8px",width:"60px"}}>Successful</p> 
     <p style={{backgroundColor:"#00F4001A",color:"#008000", padding:"4px, 8px, 4px, 8px",width:"60px"}}>Successful</p> 
     <p style={{backgroundColor:"#00F4001A",color:"#008000", padding:"4px, 8px, 4px, 8px",width:"60px"}}>Successful</p> 
     <p style={{backgroundColor:"#00F4001A",color:"#008000", padding:"4px, 8px, 4px, 8px",width:"60px"}}>Successful</p> 
</div>
<div className={style.prof}>
    <span>AGENT NAME &nbsp;<AiOutlineDown/></span>
    <p>James Adekola</p>
    <p>Shola Adeniyi</p>
    <p>Shola Adeniyi</p>
    <p>Tayo Temitope</p>
    <p>Tayo Temitope</p>
    <p>Shola Adeniyi</p>
    <p>Shola Adeniyi</p>
    <p>James Adekola</p>
    <p>James Adekola</p>
    <p>James Adekola</p>   
</div>

</div>


<div className={style.footer}>
        <span>Showing 1 to 5 of 100 entries</span>
        <div className={style.btn}>
          <button style={{border:"1px solid gainsboro", color:"#969494"}}><AiOutlineArrowLeft/>&nbsp;Previous</button>
          <div className={style.btn1}>
            <button style={{backgroundColor:"#1B59F8", color:"white"}}>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>...</button>
            <button>10</button>
          </div>
          <button  style={{border:"1px solid #1B59F8", color:"#1B59F8"}}>Next&nbsp;<AiOutlineArrowRight/></button>
        </div>
   </div>

 </div>
    </div> 
    </div>
  )
}

export default Terminal