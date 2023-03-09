import React, { useState,useEffect } from 'react'
import Sidebar from '../component/Sidebar'
import style from "../styles/account.module.css"
import Image from 'next/image'
import Aos from "aos";
import "aos/dist/aos.css";
import Axios from 'axios'
import {AiOutlineSearch,AiTwotoneBell,AiOutlineDown,AiOutlineArrowLeft,
  AiOutlineArrowRight,AiOutlinePlus,AiFillEye,AiFillEyeInvisible} from "react-icons/ai"
import {MdShowChart} from "react-icons/md"
import {TiArrowUnsorted} from "react-icons/ti"
import Modal1 from '../component/Modal1'
import Modal2 from '../component/Modal2'
import Modal3 from '../component/Modal3'
import Link from 'next/link'
import Term2 from '../component/Term2'
import Transaction from '../component/Transaction';

function account() {
  const [modal1, setModal1] = useState(false)
  const [modal2, setModal2] = useState(false)
  const [modal3, setModal3] = useState(false)
  const [counter, setCounter] = useState(1)
  const [see, setSee] = useState(false)
  const [allagents, setAllagents] = useState([])
  const [data, setData] = useState()
  const [agentdata, setAgentdata] = useState([])

  const username = typeof window !== 'undefined' ? localStorage.getItem("userName")  : null
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
  // console.log('logo',logo)

  
 const config = {
    headers:{
      Authorization: `Bearer ${token}`
    }
  }
  useEffect(() => {
    Axios.get("http://89.38.135.41:9800/wallet/balance", config).then((response)=>{
      setData(response?.data)
    })
  }, [])
console.log(data)
  
useEffect(() => {
  Axios.get("http://89.38.135.41:9800/manager/agents/all", config).then((response)=>{
    setAgentdata(response?.data?.getallagents)
  }) 
}, [])
console.log(allagents)

  useEffect(() => {
    Aos.init({ duration: 1000});
  }, []);


  return (
    <>  
         { modal1 ?<Modal1 handle={setModal1}/>:""} 
             {modal2 ?<Modal2 cancelmodal2={setModal2}/>:""}
         { modal3 ?<Modal3 cancelmodal3={setModal3}/>:""}

    <div className={style.header}>
      <Sidebar/>
  <div className={style.container}>
    <div className={style.main}>
        <h1>Account</h1>

        <div className={style.search}>
             <AiOutlineSearch size={20} style={{marginBottom:"-6px", color:"gray"}}/>
             <input type="text" placeholder='Search Terminals ID, Agent and Agent Managers'/>
        </div>

          <div className={style.profile}>
          <div className={style.reminder}>
         <AiTwotoneBell size={27} style={{backgroundColor:"gainsboro", color:"gray", borderRadius:"10px"}}/>
          <div></div>
       </div>      

             <div className={style.line}></div>          
                  <Link href='profile'>< Image src="/profile.png" width={40} height={40} priority/></Link> 
             <div className={style.name}>
                <p style={{textTransform:"capitalize"}}>{username} <AiOutlineDown size={12}/></p>
                <span>Agent Manager</span>
             </div>
          </div>  
      
    </div> 
  
    <div className={style.bg}>

     <div className={style.flexout}>

        <div className={style.accounts}>
           <div className={style.account}>
             <h5>Main Account</h5>
             <p>My Card Details<br/><span>532 *** *** 4567</span></p>
             <button onClick={()=> setModal1(true)}><AiOutlinePlus size={13} style={{color:"#1B59F8"}}/>&nbsp; Add New Card</button>
          </div>
          <div className={style.account1}>
             <h5>Available Balance</h5>
             {see ?<p onClick={()=>{setSee(false)}} type="password">&#8358; {data?.data?.balance?.commission}&nbsp;<AiFillEyeInvisible/></p>:""}
             {see ? "":<p onClick={()=>{
               setSee(true)
               setTimeout(() => {
                setSee(false)
               }, 4000);
             }} type="password">*** *** *** *** &nbsp;<AiFillEye/></p>}
             <button onClick={()=> setModal2(true)}>&nbsp; Fund Wallet</button>
          </div>
        </div>

        <div className={style.agents}>
          <div className={style.agent}>
            <h5>Total Onboarded Agent</h5>
           <h4>{data?.data?.total_agent}</h4>
           <p><span><MdShowChart style={{color:"green"}}/> 5.5%</span> up from last week</p>
          </div> 

          <div className={style.agent1}>
             <Image src="/Group.png" width={70} height={70} priority/>
             <button onClick={()=> setModal3(true)}>Fund Agent&apos;s Wallet</button>
          </div>
        </div>

</div>        


<Transaction/>
   
{/* 
   <div className={style.table}>
        <Term2 data={agentdata}/>
    </div>  */}

      </div>
    </div>    
  </div>
  
    </>

  )
}

export default account