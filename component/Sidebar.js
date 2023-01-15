import React,{useState} from 'react'
import style from "../styles/side.module.css"
import {RxDashboard} from "react-icons/rx"
import {MdSupervisorAccount,MdLocalLaundryService,
       MdOutlineExitToApp,MdMiscellaneousServices,MdHomeRepairService,
       MdOutlineLocalLaundryService,MdReportGmailerrorred} from "react-icons/md"
import {AiOutlineUser} from "react-icons/ai"
import Link from "next/link"

function Sidebar() {
  return (
 <div className={style.container}>

 <div className={style.header}>

     <Link href="/"> <div className={style.dash1}>
        <div></div>
        <RxDashboard size={20}/>
        <p>Dashboard</p>
      </div></Link>

    <Link href="account">  <div className={style.dash1}>
        <div></div>
        <MdSupervisorAccount size={20} />
        <p>My Account</p>
      </div></Link>

       <Link href='agent'><div className={style.dash1}>
        <div></div>
        <AiOutlineUser size={20}/>
        <p>Agent Management</p>
      </div></Link>

      <Link href="terminal"> <div className={style.dash1}>
        <div></div>
        <AiOutlineUser size={20} />
        <p>Terminal Management</p>
      </div></Link>
      
      <Link href="new"> <div className={style.dash1}>
        <div></div>
        <MdHomeRepairService/>
        <p>New Agents</p>
      </div></Link>


      <Link href="rental"> <div className={style.dash1}>
        <div></div>
        <MdLocalLaundryService/>
        <p>Rental Service</p>
      </div></Link>

      <Link href="reporting"> <div className={style.dash1}>
        <div></div>
        <MdReportGmailerrorred size={20}/>
        <p>Reporting</p>
      </div></Link>

      <Link href="settings"> <div className={style.dash1}>
        <div></div>
        <MdMiscellaneousServices size={20} />
        <p>Settings</p>
      </div></Link>


    </div>

  <div className={style.exit}>
      <div className={style.profile}>
      <h4>Logout</h4>
      <span>Super Agent</span>
    </div>
       <MdOutlineExitToApp size={30} style={{color:"#FF3A3A", cursor:"pointer"}}/>
    </div>  
  
 </div>   


   
  )
}

export default Sidebar