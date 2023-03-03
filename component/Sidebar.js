import React,{useState} from 'react'
import style from "../styles/sidebar.module.css"
import {RxDashboard} from "react-icons/rx"
import {MdSupervisorAccount,MdOutlineExitToApp,MdMiscellaneousServices,MdContentCopy,MdReportGmailerrorred} from "react-icons/md"
import {AiOutlineUser} from "react-icons/ai"
import Link from 'next/link'
import {toast } from 'react-toastify'
import Testing from '../component/Testing'
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
function Sidebar({change}) {
  const referralcode = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("referralcode"))  : null

  return (
 <div className={style.container}>

     
      <div className={style.header}>
        <Testing/>
        </div>
      

  <div className={style.exit1} onClick={() => {navigator.clipboard.writeText(referralcode), toast.info("copied")}}>
      <div className={style.profile}>
      <h4>My Referral Code</h4>
      <span>{referralcode}</span>
    </div>
       <MdContentCopy size={30} style={{color:"#084074", cursor:"pointer"}}/>
    </div>  

 <div className={style.exit} onClick={()=>{
   window.location="/"
 }}>
      <div className={style.profile}>
      <h4>Logout</h4>
      <span>Agent Manager</span>
    </div>
       <MdOutlineExitToApp size={30} style={{color:"#FF3A3A", cursor:"pointer"}}/>
    </div> 

  
 </div>   



   
  )
}

export default Sidebar