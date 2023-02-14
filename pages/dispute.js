import React,{useState} from 'react'
import Sidebar from '../component/Sidebar'
import style from "../styles/dispute.module.css"
import {AiTwotoneBell,AiOutlineDown,AiOutlineArrowRight} from "react-icons/ai"
import Image from 'next/image'
import Link from 'next/link'
import { MdSearch } from 'react-icons/md'
// import disputes from "./dispute.json"
import Table from '../component/Table'
import Caution from '../component/Caution'
import disputes from "../pages/dispute.json"

function dispute() {
   const [counter, setCounter] = useState(1)
   const [oneData, setOneData] = useState([])
   const [show, setShow] = useState(false)
   console.log(oneData)
   console.log(show)
  return (
    <div className={style.background}> 
      {show ? <Caution data={oneData} check={setShow}/>:""}
        <Sidebar/>
        <div className={style.container}>
          <div className={style.main}>
        <h2>Dispute</h2>

          <div className={style.profile}>
              <div className={style.reminder}>
                <AiTwotoneBell size={27} style={{backgroundColor:"gainsboro", color:"gray", borderRadius:"10px"}}/>
                 <Image src="/dot.png" width={20} height={20} priority />
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

      <div className={style.gray}>
          <div className={style.white}>
             <div className={style.header}>
              <p>Agent Transaction Dispute</p>
               <div className={style.search}>
                  <MdSearch size={20} style={{color:"#lightgray"}}/>
                  <input placeholder='Search Agent name, Agent ID, Business name e.tc'/>
               </div>
             </div>

    <Table 
    isClick={() => setShow(true) }
    handleOne={(id) => {
      setOneData(disputes?.find(d => d.id === id))
    }}
    />
        
        <div className={style.entries}>
          <p>Showing 1 to 50 of 100 entries</p>
          <div className={style.btn}>
            <button style={{backgroundColor:"transparent",border:"1px solid gray"}}onClick={()=>{
              setCounter(counter-1)
            }}>Previous</button>
            <button style={{border:"1px solid blue"}}>{counter}</button>
            <button style={{backgroundColor:"transparent",border:"1px solid gray",color:"blue", width:"5em"}} onClick={()=>{
              setCounter(counter+1)
            }}>Next <AiOutlineArrowRight/></button>
          </div>
        </div>

          </div>
      </div>
      </div>
    </div>
  )
}

export default dispute